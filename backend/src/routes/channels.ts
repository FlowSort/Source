import { Router } from "express";
import { Prisma } from "../generated/tenant/index.js";
import { z } from "zod";
import { controlDb } from "../db/control.js";
import { env } from "../config/env.js";
import { tenantDb } from "../services/tenant.js";
import { createInboundToken } from "../services/inbound-token.js";
import { ruta } from "../utils/async-route.js";

const channelType=z.enum(["kiosk","web_form","webhook","qr"]);
const priority=z.enum(["BAJA","PREDETERMINADA","ALTA","SUPER_ALTA"]);
const generateSchema=z.object({
  name:z.string().trim().min(2).max(120),
  channelType,
  templateId:z.string().uuid(),
  defaultPriority:priority.default("PREDETERMINADA"),
  metadata:z.record(z.unknown()).default({})
}).strict();
const typeMap={kiosk:"KIOSK",web_form:"WEB_FORM",webhook:"WEBHOOK",qr:"QR"} as const;

const router=Router();
router.post("/generate",ruta(async(req,res)=>{
  const input=generateSchema.parse(req.body);
  const empresaId=req.auth!.empresaId;
  const db=await tenantDb(empresaId);
  const template=await db.plantilla.findUnique({where:{id:input.templateId},select:{id:true}});
  if(!template)return res.status(404).json({error:"Plantilla no encontrada"});
  const {token,tokenHash}=createInboundToken();
  const channel=await db.inboundChannel.create({data:{
    name:input.name,
    channelType:typeMap[input.channelType],
    tokenHash,
    templateId:template.id,
    defaultPriority:input.defaultPriority,
    metadata:input.metadata as Prisma.InputJsonValue
  }});
  try{
    await controlDb.inboundChannelRoute.create({data:{empresaId,channelId:channel.id,tokenHash}});
  }catch(error){
    await db.inboundChannel.delete({where:{id:channel.id}}).catch(()=>undefined);
    throw error;
  }
  res.status(201).json({
    id:channel.id,
    name:channel.name,
    channelType:input.channelType,
    publicUrl:`${env.PUBLIC_API_URL}/api/v1/inbound/submit/${token}`,
    token,
    tokenVisibleOnce:true
  });
}));
export default router;
