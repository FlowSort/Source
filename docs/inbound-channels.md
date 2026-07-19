# Canales de Entrada Universales

## Arquitectura

El canal completo vive dentro del tenant. La base de control conserva únicamente un índice de enrutamiento: `tokenHash`, `empresaId`, `channelId` y `isActive`.

```text
token público → SHA-256 → InboundChannelRoute (control)
                          ↓ empresaId
                     tenantDb(empresaId)
                          ↓ channelId
                     InboundChannel + Plantilla → Registro
```

El valor público contiene 256 bits aleatorios en Base64URL. Nunca se almacena. Solo se devuelve al crear el canal. Las bases guardan su SHA-256.

## Crear canal

`POST /api/v1/channels/generate`

Requiere JWT de `ADMIN_EMPRESA`.

```json
{
  "name": "QR Mesa 5",
  "channelType": "qr",
  "templateId": "92ac4ccc-d00a-4d33-8aee-3fb3a85ea633",
  "defaultPriority": "ALTA",
  "metadata": {
    "origen": "Mesa 5",
    "sucursal": "Miraflores"
  }
}
```

Tipos: `kiosk`, `web_form`, `webhook`, `qr`.

Prioridades: `BAJA`, `PREDETERMINADA`, `ALTA`, `SUPER_ALTA`.

La respuesta incluye `token` y `publicUrl` una sola vez. Guardar la URL final, no el token en texto plano dentro de FlowSort.

## Enviar registro

`POST /api/v1/inbound/submit/:channelToken`

No requiere sesión.

```json
{
  "nombreCliente": "Mesa 5",
  "contacto": "+51 999 999 999",
  "data": {
    "pedido": "2 cafés y un sándwich",
    "alergias": "Sin lactosa"
  }
}
```

Los campos de `metadata` cuyos nombres coinciden con campos de la plantilla se inyectan y prevalecen sobre el payload. Todo el `metadata` también queda preservado en `Registro.inboundMetadata`.

Respuesta aceptada:

```json
{
  "submissionId": "3db9908c-a6b8-490e-8614-bd9b91725367",
  "status": "PENDIENTE",
  "priority": "ALTA",
  "receivedAt": "2026-07-19T03:20:00.000Z"
}
```

## Despliegue

1. Ejecutar migración de control con `pnpm --filter @flowsort/backend migrate:control`.
2. Ejecutar `backend/prisma/tenant-migrations/202607190001_inbound_channels.sql` usando el `search_path` de cada tenant existente.
3. Definir `PUBLIC_API_URL` con el origen HTTPS público.
4. Aplicar rate limiting distribuido en gateway o Redis sobre `/api/v1/inbound/*`.
5. Rotar o desactivar canales comprometidos desde el índice global y el tenant.

La provisión de empresas nuevas crea las tablas automáticamente. El backend también asegura el esquema de canales al primer uso por empresa.
