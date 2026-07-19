import dotenv from "dotenv";import { z } from "zod";
dotenv.config();dotenv.config({path:"../.env"});
const schema=z.object({NODE_ENV:z.enum(["development","test","production"]).default("development"),PORT:z.coerce.number().int().positive().default(4000),CONTROL_DATABASE_URL:z.string().url(),MANAGED_DATABASE_URL:z.string().url(),JWT_ACCESS_SECRET:z.string().min(24),JWT_REFRESH_SECRET:z.string().min(24),ENCRYPTION_MASTER_KEY_BASE64:z.string().min(40)});
export const env=schema.parse(process.env);
