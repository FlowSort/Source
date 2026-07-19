import type { Prioridad, Registro } from "./types.js";
export const PESO_PRIORIDAD: Record<Prioridad,number> = { SUPER_ALTA:3, ALTA:2, PREDETERMINADA:1, BAJA:0 };
export function compararRegistros(a:Pick<Registro,"prioridad"|"fechaRegistro">,b:Pick<Registro,"prioridad"|"fechaRegistro">):number {
  const diferencia=PESO_PRIORIDAD[b.prioridad]-PESO_PRIORIDAD[a.prioridad];
  return diferencia || new Date(a.fechaRegistro).getTime()-new Date(b.fechaRegistro).getTime();
}
