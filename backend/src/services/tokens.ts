import jwt from "jsonwebtoken";import { env } from "../config/env.js";import type { RolUsuario } from "../generated/control/index.js";
export interface Claims {sub:string;empresaId:string;rol:RolUsuario;version:number;tipo:"access"|"refresh"}
export function crearTokens(u:{id:string;empresaId:string;rol:RolUsuario;tokenVersion:number}){const base={sub:u.id,empresaId:u.empresaId,rol:u.rol,version:u.tokenVersion};return {accessToken:jwt.sign({...base,tipo:"access"},env.JWT_ACCESS_SECRET,{expiresIn:"15m"}),refreshToken:jwt.sign({...base,tipo:"refresh"},env.JWT_REFRESH_SECRET,{expiresIn:"30d"})};}
export function verificarAccess(token:string){const c=jwt.verify(token,env.JWT_ACCESS_SECRET) as Claims;if(c.tipo!=="access")throw new Error("Tipo de token inválido");return c;}
export function verificarRefresh(token:string){const c=jwt.verify(token,env.JWT_REFRESH_SECRET) as Claims;if(c.tipo!=="refresh")throw new Error("Tipo de token inválido");return c;}
