import type { Claims } from "./services/tokens.js";declare global {namespace Express {interface Request {auth?:Claims}}}export {};
