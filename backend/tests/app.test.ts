import { beforeAll,describe,expect,it } from "vitest";
import jwt from "jsonwebtoken";
import request from "supertest";

let app:import("express").Express;
beforeAll(async()=>{
  process.env.CONTROL_DATABASE_URL??="postgresql://u:p@localhost:5432/control";
  process.env.MANAGED_DATABASE_URL??="postgresql://u:p@localhost:5432/managed";
  process.env.JWT_ACCESS_SECRET??="a".repeat(32);
  process.env.JWT_REFRESH_SECRET??="b".repeat(32);
  process.env.ENCRYPTION_MASTER_KEY_BASE64??=Buffer.alloc(32,7).toString("base64");
  ({app}=await import("../src/app.js"));
});

describe("API",()=>{
  it("expone health",async()=>{const r=await request(app).get("/health");expect(r.status).toBe(200);expect(r.body).toEqual({ok:true,producto:"FlowSort"});});
  it("rechaza endpoint tenant sin token",async()=>{const r=await request(app).get("/api/registros");expect(r.status).toBe(401);});
  it("bloquea administración al empleado",async()=>{const token=jwt.sign({sub:crypto.randomUUID(),empresaId:crypto.randomUUID(),rol:"EMPLEADO",version:0,tipo:"access"},process.env.JWT_ACCESS_SECRET!,{expiresIn:"15m"});const r=await request(app).get("/api/empleados").set("Authorization",`Bearer ${token}`);expect(r.status).toBe(403);});
});
