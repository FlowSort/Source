# FlowSort

Aplicación B2B multi-tenant para registrar, priorizar y monitorear clientes. Un backend compartido sirve una app universal de escritorio y una app Android; nombre y logo de cada empresa se cargan en tiempo de ejecución.

## Paquetes

- `backend`: Express, Prisma y PostgreSQL.
- `apps/desktop`: Electron, React y TypeScript.
- `apps/mobile`: React Native para teléfono y tablet Android.
- `packages/shared`: tipos, cliente API, validación y orden de prioridades.

No existe sitio web ni build por empresa.

## Requisitos

- Node.js 22+
- pnpm 10.13.1
- Docker con Compose, o PostgreSQL 15+
- Android Studio/JDK 17 para Android
- Herramientas nativas de cada SO para empaquetar Electron

## Inicio local

```bash
cp .env.example .env
docker compose up -d
pnpm install
set -a; source .env; set +a
pnpm --filter @flowsort/backend prisma:generate
pnpm exec prisma db push --schema backend/prisma/control/schema.prisma
pnpm --filter @flowsort/backend dev
```

En otra terminal:

```bash
pnpm --filter @flowsort/desktop dev
```

Desktop usa `http://localhost:4000/api` por defecto. Para otra API:

```bash
VITE_API_URL=http://localhost:4000/api pnpm --filter @flowsort/desktop dev
```

Para Android, consultar `apps/mobile/README.md`. Emulador Android debe apuntar a `http://10.0.2.2:4000/api`; dispositivo físico, a IP LAN del equipo.

## Variables backend

| Variable | Uso |
|---|---|
| `CONTROL_DATABASE_URL` | PostgreSQL central: empresas, usuarios y revocación. |
| `MANAGED_DATABASE_URL` | PostgreSQL gestionado: un schema `tenant_*` por empresa. |
| `JWT_ACCESS_SECRET` | Firma access tokens de 15 minutos. Mínimo 24 caracteres. |
| `JWT_REFRESH_SECRET` | Firma refresh tokens. Mínimo 24 caracteres. |
| `ENCRYPTION_MASTER_KEY_BASE64` | Clave libsodium de 32 bytes para cifrado envelope. |
| `PORT` | Puerto API. Default `4000`. |
| `NODE_ENV` | `development`, `test` o `production`. |

Generar secretos locales:

```bash
openssl rand -hex 32
openssl rand -hex 32
openssl rand -base64 32
```

No versionar `.env`. En producción, guardar secretos en Secret Manager/KMS y exigir TLS para PostgreSQL.

## Prueba manual completa

1. Abrir primera instancia. Elegir **Crear empresa**. Crear CEO.
2. Ir a **Empleados**. Crear empleado con contraseña inicial de 10+ caracteres.
3. Abrir otra instancia/perfil o dispositivo. Iniciar sesión como empleado.
4. Crear registro. Confirmar orden por prioridad: Súper Alta, Alta, Predeterminada, Baja; empate por fecha ascendente.
5. Volver como CEO. Abrir **Monitoreo / Exportar**. Ver registro y exportar filtros activos.
6. Revocar empleado. Su refresh token queda inválido inmediatamente; access token ya emitido vence como máximo en 15 minutos.
7. Confirmar que nuevo login falla y que refresh responde `401`.

Para probar dos empresas, crear ambas y registros equivalentes. Cada CEO debe ver solo usuarios, plantillas y registros de su `empresaId`.

## Aislamiento y hosting

- Gestionado: cada empresa recibe schema aleatorio `tenant_*`; backend selecciona conexión desde claims verificados, nunca desde payload del cliente.
- Autoalojado: CEO configura URL PostgreSQL; backend la cifra antes de persistir, provisiona tablas y usa pool por tenant.
- Rutas administrativas exigen `ADMIN_EMPRESA`.
- Revocar incrementa `tokenVersion`, desactiva usuario y bloquea refresh/login.
- Nunca loguear URLs de conexión, JWT, contraseñas o sobres cifrados.

## Calidad

```bash
pnpm typecheck
pnpm test
pnpm build
```

CI valida tipos, pruebas y builds. En tags `v*` o ejecución manual también crea instaladores de escritorio y publica artefactos privados del workflow.

## Distribución

```bash
pnpm --filter @flowsort/desktop dist
```

Genera en `apps/desktop/release`: `.dmg` universal en macOS, `.exe` NSIS en Windows, `.AppImage` y `.deb` en Linux. Cada destino debe compilarse en su SO. Distribuir por enlace privado, GitHub Release o almacenamiento; nunca contiene configuración por empresa.

Android:

```bash
pnpm --filter @flowsort/mobile android:apk
pnpm --filter @flowsort/mobile android:aab
```

Artefactos Gradle quedan bajo `apps/mobile/android/app/build/outputs/`. Un APK/AAB sirve teléfono y tablet; layout cambia en runtime a partir de 600dp.
