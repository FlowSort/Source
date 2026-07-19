import { Pool } from "pg";

function quoteSchema(schema:string){
  if(!/^[a-z][a-z0-9_]{0,62}$/.test(schema))throw new Error("Schema tenant inválido");
  return `"${schema}"`;
}

export async function provisionInboundSchema(baseUrl:string,schema:string){
  const q=quoteSchema(schema);
  const pool=new Pool({connectionString:baseUrl,max:1});
  const client=await pool.connect();
  try{
    await client.query("BEGIN");
    await client.query(`DO $$ BEGIN CREATE TYPE ${q}."inbound_channel_type" AS ENUM ('kiosk','web_form','webhook','qr'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`);
    await client.query(`CREATE TABLE IF NOT EXISTS ${q}."inbound_channels" ("id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),"name" TEXT NOT NULL,"channel_type" ${q}."inbound_channel_type" NOT NULL,"token" TEXT NOT NULL UNIQUE,"template_id" UUID NOT NULL REFERENCES ${q}."Plantilla"("id") ON DELETE RESTRICT,"default_priority" ${q}."Prioridad" NOT NULL DEFAULT 'PREDETERMINADA',"is_active" BOOLEAN NOT NULL DEFAULT true,"metadata" JSONB NOT NULL DEFAULT '{}',"created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),"updated_at" TIMESTAMPTZ NOT NULL DEFAULT now())`);
    await client.query(`CREATE INDEX IF NOT EXISTS "inbound_channels_template_active_idx" ON ${q}."inbound_channels"("template_id","is_active")`);
    await client.query(`ALTER TABLE ${q}."Registro" ADD COLUMN IF NOT EXISTS "inbound_channel_id" UUID`);
    await client.query(`ALTER TABLE ${q}."Registro" ADD COLUMN IF NOT EXISTS "inbound_metadata" JSONB`);
    await client.query(`CREATE TABLE IF NOT EXISTS ${q}."AuditEvent" ("id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),"registroId" UUID NOT NULL REFERENCES ${q}."Registro"("id") ON DELETE CASCADE,"usuarioId" UUID NOT NULL,"accion" TEXT NOT NULL,"detalle" TEXT NOT NULL,"creadoEn" TIMESTAMPTZ NOT NULL DEFAULT now())`);
    await client.query(`CREATE INDEX IF NOT EXISTS "AuditEvent_registroId_creadoEn_idx" ON ${q}."AuditEvent"("registroId","creadoEn")`);
    await client.query(`DO $$ BEGIN ALTER TABLE ${q}."Registro" ADD CONSTRAINT "Registro_inbound_channel_id_fkey" FOREIGN KEY ("inbound_channel_id") REFERENCES ${q}."inbound_channels"("id") ON DELETE SET NULL; EXCEPTION WHEN duplicate_object THEN NULL; END $$`);
    await client.query(`CREATE INDEX IF NOT EXISTS "Registro_inbound_channel_id_idx" ON ${q}."Registro"("inbound_channel_id")`);
    await client.query("COMMIT");
  }catch(error){await client.query("ROLLBACK");throw error}
  finally{client.release();await pool.end()}
}
