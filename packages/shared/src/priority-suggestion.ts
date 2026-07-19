export type PrioridadSugerida = "BAJA" | "PREDETERMINADA" | "ALTA" | "SUPER_ALTA";

const urgente = ["urgente", "emergencia", "inmediato", "inmediatamente", "accidente", "grave", "crítico", "critico", "no funciona", "bloqueado", "sin servicio"];
const alta = ["hoy", "rápido", "rapido", "prioridad", "reclamo", "queja", "dolor", "fiebre", "fallo", "falla", "avería", "averia", "retraso", "vencido"];
const baja = ["consulta", "información", "informacion", "cotización", "cotizacion", "duda", "interés", "interes", "cuando pueda", "sin prisa"];

export function sugerirPrioridad(texto: string): PrioridadSugerida {
  const normalizado = texto.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (urgente.some(p => normalizado.includes(p.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) return "SUPER_ALTA";
  if (alta.some(p => normalizado.includes(p.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) return "ALTA";
  if (baja.some(p => normalizado.includes(p.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) return "BAJA";
  return "PREDETERMINADA";
}
