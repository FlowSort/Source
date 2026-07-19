import { createHash, randomBytes } from "node:crypto";

export const PUBLIC_CHANNEL_TOKEN_PATTERN=/^[A-Za-z0-9_-]{43}$/;

export function hashInboundToken(token:string){
  return createHash("sha256").update(token,"utf8").digest("hex");
}

export function createInboundToken(){
  const token=randomBytes(32).toString("base64url");
  return {token,tokenHash:hashInboundToken(token)};
}
