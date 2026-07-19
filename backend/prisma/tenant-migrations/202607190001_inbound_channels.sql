DO $$ BEGIN
  CREATE TYPE "inbound_channel_type" AS ENUM ('kiosk','web_form','webhook','qr');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS "inbound_channels" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "channel_type" "inbound_channel_type" NOT NULL,
  "token" TEXT NOT NULL,
  "template_id" UUID NOT NULL,
  "default_priority" "Prioridad" NOT NULL DEFAULT 'PREDETERMINADA',
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "metadata" JSONB NOT NULL DEFAULT '{}',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT "inbound_channels_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "inbound_channels_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "Plantilla"("id") ON DELETE RESTRICT
);
CREATE UNIQUE INDEX IF NOT EXISTS "inbound_channels_token_key" ON "inbound_channels"("token");
CREATE INDEX IF NOT EXISTS "inbound_channels_template_active_idx" ON "inbound_channels"("template_id","is_active");

ALTER TABLE "Registro" ADD COLUMN IF NOT EXISTS "inbound_channel_id" UUID;
ALTER TABLE "Registro" ADD COLUMN IF NOT EXISTS "inbound_metadata" JSONB;
CREATE TABLE IF NOT EXISTS "AuditEvent" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "registroId" UUID NOT NULL REFERENCES "Registro"("id") ON DELETE CASCADE,
  "usuarioId" UUID NOT NULL,
  "accion" TEXT NOT NULL,
  "detalle" TEXT NOT NULL,
  "creadoEn" TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT "AuditEvent_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "AuditEvent_registroId_creadoEn_idx" ON "AuditEvent"("registroId","creadoEn");
DO $$ BEGIN
  ALTER TABLE "Registro" ADD CONSTRAINT "Registro_inbound_channel_id_fkey" FOREIGN KEY ("inbound_channel_id") REFERENCES "inbound_channels"("id") ON DELETE SET NULL;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
CREATE INDEX IF NOT EXISTS "Registro_inbound_channel_id_idx" ON "Registro"("inbound_channel_id");
