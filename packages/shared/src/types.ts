export type RolUsuario = "ADMIN_EMPRESA" | "EMPLEADO";
export type Prioridad = "BAJA" | "PREDETERMINADA" | "ALTA" | "SUPER_ALTA";
export type EstadoRegistro = "PENDIENTE" | "EN_PROCESO" | "COMPLETADO";
export type TipoCampo = "texto" | "textarea" | "numero" | "fecha" | "fecha_hora" | "select" | "checkbox" | "telefono" | "email";

export interface CampoPlantilla { id:string; etiqueta:string; tipo:TipoCampo; requerido:boolean; opciones?:string[]; placeholder?:string }
export interface Plantilla { id:string; nombre:string; descripcion?:string|null; esDefault:boolean; campos:CampoPlantilla[] }
export interface Registro { id:string; nombreCliente:string; contacto?:string|null; plantillaId:string; especificaciones:Record<string,unknown>; prioridad:Prioridad; estado:EstadoRegistro; usuarioId:string; fechaRegistro:string; fechaActualizacion:string }
export interface Sesion { accessToken:string; refreshToken:string; usuario:{id:string;nombre:string;email:string;rol:RolUsuario}; empresa:{id:string;nombre:string;logoUrl:string|null} }
export interface FiltrosRegistro { prioridad?:Prioridad; plantillaId?:string; estado?:EstadoRegistro; busqueda?:string; usuarioId?:string; desde?:string; hasta?:string; pagina?:number; limite?:number }
