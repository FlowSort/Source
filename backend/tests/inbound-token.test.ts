import { describe,expect,it } from "vitest";
import { createInboundToken,hashInboundToken,PUBLIC_CHANNEL_TOKEN_PATTERN } from "../src/services/inbound-token.js";

describe("inbound channel tokens",()=>{
  it("genera token opaco de 256 bits",()=>{
    const generated=createInboundToken();
    expect(generated.token).toMatch(PUBLIC_CHANNEL_TOKEN_PATTERN);
    expect(generated.tokenHash).toHaveLength(64);
    expect(generated.tokenHash).toBe(hashInboundToken(generated.token));
  });
  it("genera tokens únicos",()=>{
    expect(createInboundToken().token).not.toBe(createInboundToken().token);
  });
});
