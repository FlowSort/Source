import { Router } from "express";import { tenantDb } from "../services/tenant.js";import { ruta } from "../utils/async-route.js";
const router=Router();router.get("/",ruta(async(req,res)=>{const db=await tenantDb(req.auth!.empresaId);res.json(await db.plantilla.findMany({orderBy:[{esDefault:"desc"},{nombre:"asc"}]}))}));export default router;
