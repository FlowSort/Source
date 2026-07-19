import { z } from "zod";
import type { CampoPlantilla } from "./types.js";
export const campoPlantillaSchema=z.object({id:z.string().min(1).regex(/^[a-zA-Z0-9_-]+$/),etiqueta:z.string().min(1),tipo:z.enum(["texto","textarea","numero","fecha","fecha_hora","select","checkbox","telefono","email"]),requerido:z.boolean(),opciones:z.array(z.string().min(1)).optional(),placeholder:z.string().optional()}).superRefine((campo,ctx)=>{if(campo.tipo==="select"&&(!campo.opciones||campo.opciones.length===0))ctx.addIssue({code:"custom",message:"Select requiere opciones",path:["opciones"]});});
export const camposPlantillaSchema=z.array(campoPlantillaSchema).min(1).superRefine((campos,ctx)=>{const ids=new Set<string>();campos.forEach((campo,i)=>{if(ids.has(campo.id))ctx.addIssue({code:"custom",message:"ID duplicado",path:[i,"id"]});ids.add(campo.id);});});
function esquemaCampo(campo:CampoPlantilla):z.ZodTypeAny {
  let schema:z.ZodTypeAny;
  switch(campo.tipo){case "numero":schema=z.preprocess(v=>v===""?undefined:v,z.coerce.number().finite());break;case "checkbox":schema=z.boolean();break;case "email":schema=z.string().email();break;case "fecha":schema=z.string().date();break;case "fecha_hora":schema=z.string().datetime({offset:true});break;case "select":schema=z.enum(campo.opciones as [string,...string[]]);break;default:schema=campo.requerido?z.string().trim().min(1):z.string();}
  return campo.requerido?schema:schema.optional().nullable().or(z.literal(""));
}
export function crearSchemaEspecificaciones(campos:CampoPlantilla[]){return z.object(Object.fromEntries(campos.map(c=>[c.id,esquemaCampo(c)]))).strict();}
export function validarEspecificaciones(campos:CampoPlantilla[],datos:unknown){return crearSchemaEspecificaciones(campos).safeParse(datos);}
