import { Router } from "express";
import { Prisma } from "../generated/tenant/index.js";
import { z } from "zod";
import type { CampoPlantilla } from "@flowsort/shared";
import { validarEspecificaciones } from "@flowsort/shared";
import { controlDb } from "../db/control.js";
import { tenantDb } from "../services/tenant.js";
import { hashInboundToken, PUBLIC_CHANNEL_TOKEN_PATTERN } from "../services/inbound-token.js";
import { ruta } from "../utils/async-route.js";

const SYSTEM_ACTOR_ID="00000000-0000-0000-0000-000000000000";
const tokenSchema=z.string().regex(PUBLIC_CHANNEL_TOKEN_PATTERN);
const submitSchema=z.object({
  nombreCliente:z.string().trim().min(1).max(200),
  contacto:z.string().trim().max(200).optional().nullable(),
  data:z.record(z.unknown()).default({})
}).strict();

const router=Router();
router.post("/submit/:channelToken",ruta(async(req,res)=>{
  const parsedToken=tokenSchema.safeParse(req.params.channelToken);
  if(!parsedToken.success)return res.status(404).json({error:"Canal no disponible"});
  const rawToken=parsedToken.data;
  const tokenHash=hashInboundToken(rawToken);
  const route=await controlDb.inboundChannelRoute.findUnique({where:{tokenHash},select:{empresaId:true,channelId:true,isActive:true}});
  if(!route?.isActive)return res.status(404).json({error:"Canal no disponible"});
  const db=await tenantDb(route.empresaId);
  const channel=await db.inboundChannel.findFirst({
    where:{id:route.channelId,tokenHash,isActive:true},
    include:{template:{select:{id:true,campos:true}}}
  });
  if(!channel)return res.status(404).json({error:"Canal no disponible"});
  const input=submitSchema.parse(req.body);
  const metadata=channel.metadata as Record<string,unknown>;
  const fields=channel.template.campos as unknown as CampoPlantilla[];
  const allowed=new Set(fields.map(field=>field.id));
  const injected=Object.fromEntries(Object.entries(metadata).filter(([key])=>allowed.has(key)));
  const especificaciones={...input.data,...injected};
  const validation=validarEspecificaciones(fields,especificaciones);
  if(!validation.success)return res.status(422).json({error:"Datos no válidos para la plantilla",detalles:validation.error.flatten()});
  const record=await db.registro.create({data:{
    nombreCliente:input.nombreCliente,
    contacto:input.contacto,
    plantillaId:channel.template.id,
    especificaciones:validation.data as Prisma.InputJsonValue,
    prioridad:channel.defaultPriority,
    estado:"PENDIENTE",
    usuarioId:SYSTEM_ACTOR_ID,
    inboundChannelId:channel.id,
    inboundMetadata:metadata as Prisma.InputJsonValue,
    auditoria:{create:{usuarioId:SYSTEM_ACTOR_ID,accion:"INBOUND_CREATED",detalle:`Registro recibido por ${channel.name}`}}
  },select:{id:true,estado:true,prioridad:true,fechaRegistro:true}});
  res.status(202).json({submissionId:record.id,status:record.estado,priority:record.prioridad,receivedAt:record.fechaRegistro});
}));
export default router;
