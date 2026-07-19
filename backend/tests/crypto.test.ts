import { beforeAll,describe,expect,it } from "vitest";

let cifrarSecreto:(valor:string)=>Promise<string>;
let descifrarSecreto:(valor:string)=>Promise<string>;

beforeAll(async()=>{
  process.env.CONTROL_DATABASE_URL="postgresql://u:p@localhost:5432/control";
  process.env.MANAGED_DATABASE_URL="postgresql://u:p@localhost:5432/managed";
  process.env.JWT_ACCESS_SECRET="a".repeat(32);
  process.env.JWT_REFRESH_SECRET="b".repeat(32);
  process.env.ENCRYPTION_MASTER_KEY_BASE64=Buffer.alloc(32,7).toString("base64");
  ({cifrarSecreto,descifrarSecreto}=await import("../src/services/crypto.js"));
});

describe("envelope encryption",()=>{
  it("recupera el secreto sin persistir texto plano",async()=>{const secreto="postgresql://usuario:clave@db/tenant";const cifrado=await cifrarSecreto(secreto);expect(cifrado).not.toContain(secreto);expect(await descifrarSecreto(cifrado)).toBe(secreto);});
  it("rechaza sobres manipulados",async()=>{const sobre=JSON.parse(await cifrarSecreto("secreto")) as {dc:string};sobre.dc=`${sobre.dc[0]==="A"?"B":"A"}${sobre.dc.slice(1)}`;await expect(descifrarSecreto(JSON.stringify(sobre))).rejects.toThrow();});
});
