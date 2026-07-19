# Backend FlowSort

API Express multi-tenant. BD de control separa identidad/configuración; BD operativa usa schema gestionado por empresa o PostgreSQL autoalojado.

## Desarrollo

Desde raíz:

```bash
docker compose up -d
cp .env.example .env
set -a; source .env; set +a
pnpm install
pnpm --filter @flowsort/backend prisma:generate
pnpm exec prisma db push --schema backend/prisma/control/schema.prisma
pnpm --filter @flowsort/backend dev
```

API: `http://localhost:4000/api`. Salud: `GET /health`.

Variables requeridas: `CONTROL_DATABASE_URL`, `MANAGED_DATABASE_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `ENCRYPTION_MASTER_KEY_BASE64`. Opcionales: `PORT=4000`, `NODE_ENV=development`. Ver tabla completa en README raíz.

## Scripts

```bash
pnpm --filter @flowsort/backend prisma:generate
pnpm --filter @flowsort/backend migrate:control
pnpm --filter @flowsort/backend typecheck
pnpm --filter @flowsort/backend test
pnpm --filter @flowsort/backend build
```

Producción usa `migrate:control`, no `db push`. Respaldar antes de migrar. Ejecutar migración con identidad de despliegue; proceso API debe usar privilegios mínimos compatibles con provisionar schemas tenants.

## Seguridad tenant

- `empresaId` y rol salen exclusivamente de JWT verificado.
- Consultas de control incluyen `empresaId`.
- Gestionado fija schema dedicado; autoalojado descifra URL solo al abrir pool.
- URL autoalojada nunca debe aparecer en logs o respuestas.
- Access token dura 15 minutos. Refresh valida `activo` y `tokenVersion`.
- Revocación bloquea login/refresh y rota versión lógica.

Prueba aislamiento con dos empresas en cada modo. Consultar listados, monitoreo y exportación usando tokens cruzados; ninguna respuesta debe exponer datos ajenos.

