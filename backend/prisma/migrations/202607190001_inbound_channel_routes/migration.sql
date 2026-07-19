CREATE TABLE "inbound_channel_routes" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "empresa_id" TEXT NOT NULL,
  "channel_id" UUID NOT NULL,
  "token_hash" TEXT NOT NULL,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "inbound_channel_routes_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "inbound_channel_routes_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "Empresa"("id") ON DELETE CASCADE
);
CREATE UNIQUE INDEX "inbound_channel_routes_token_hash_key" ON "inbound_channel_routes"("token_hash");
CREATE UNIQUE INDEX "inbound_channel_routes_empresa_channel_key" ON "inbound_channel_routes"("empresa_id","channel_id");
CREATE INDEX "inbound_channel_routes_empresa_active_idx" ON "inbound_channel_routes"("empresa_id","is_active");
