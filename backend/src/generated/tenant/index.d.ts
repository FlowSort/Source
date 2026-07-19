
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Plantilla
 * 
 */
export type Plantilla = $Result.DefaultSelection<Prisma.$PlantillaPayload>
/**
 * Model Registro
 * 
 */
export type Registro = $Result.DefaultSelection<Prisma.$RegistroPayload>
/**
 * Model AuditEvent
 * 
 */
export type AuditEvent = $Result.DefaultSelection<Prisma.$AuditEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Prioridad: {
  BAJA: 'BAJA',
  PREDETERMINADA: 'PREDETERMINADA',
  ALTA: 'ALTA',
  SUPER_ALTA: 'SUPER_ALTA'
};

export type Prioridad = (typeof Prioridad)[keyof typeof Prioridad]


export const EstadoRegistro: {
  PENDIENTE: 'PENDIENTE',
  EN_PROCESO: 'EN_PROCESO',
  COMPLETADO: 'COMPLETADO'
};

export type EstadoRegistro = (typeof EstadoRegistro)[keyof typeof EstadoRegistro]

}

export type Prioridad = $Enums.Prioridad

export const Prioridad: typeof $Enums.Prioridad

export type EstadoRegistro = $Enums.EstadoRegistro

export const EstadoRegistro: typeof $Enums.EstadoRegistro

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Plantillas
 * const plantillas = await prisma.plantilla.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Plantillas
   * const plantillas = await prisma.plantilla.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.plantilla`: Exposes CRUD operations for the **Plantilla** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantillas
    * const plantillas = await prisma.plantilla.findMany()
    * ```
    */
  get plantilla(): Prisma.PlantillaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registro`: Exposes CRUD operations for the **Registro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registros
    * const registros = await prisma.registro.findMany()
    * ```
    */
  get registro(): Prisma.RegistroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditEvent`: Exposes CRUD operations for the **AuditEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditEvents
    * const auditEvents = await prisma.auditEvent.findMany()
    * ```
    */
  get auditEvent(): Prisma.AuditEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Plantilla: 'Plantilla',
    Registro: 'Registro',
    AuditEvent: 'AuditEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "plantilla" | "registro" | "auditEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Plantilla: {
        payload: Prisma.$PlantillaPayload<ExtArgs>
        fields: Prisma.PlantillaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantillaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantillaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          findFirst: {
            args: Prisma.PlantillaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantillaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          findMany: {
            args: Prisma.PlantillaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>[]
          }
          create: {
            args: Prisma.PlantillaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          createMany: {
            args: Prisma.PlantillaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantillaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>[]
          }
          delete: {
            args: Prisma.PlantillaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          update: {
            args: Prisma.PlantillaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          deleteMany: {
            args: Prisma.PlantillaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantillaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantillaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>[]
          }
          upsert: {
            args: Prisma.PlantillaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantillaPayload>
          }
          aggregate: {
            args: Prisma.PlantillaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantilla>
          }
          groupBy: {
            args: Prisma.PlantillaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantillaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantillaCountArgs<ExtArgs>
            result: $Utils.Optional<PlantillaCountAggregateOutputType> | number
          }
        }
      }
      Registro: {
        payload: Prisma.$RegistroPayload<ExtArgs>
        fields: Prisma.RegistroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          findFirst: {
            args: Prisma.RegistroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          findMany: {
            args: Prisma.RegistroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          create: {
            args: Prisma.RegistroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          createMany: {
            args: Prisma.RegistroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          delete: {
            args: Prisma.RegistroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          update: {
            args: Prisma.RegistroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          deleteMany: {
            args: Prisma.RegistroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>[]
          }
          upsert: {
            args: Prisma.RegistroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroPayload>
          }
          aggregate: {
            args: Prisma.RegistroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistro>
          }
          groupBy: {
            args: Prisma.RegistroGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroCountAggregateOutputType> | number
          }
        }
      }
      AuditEvent: {
        payload: Prisma.$AuditEventPayload<ExtArgs>
        fields: Prisma.AuditEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findFirst: {
            args: Prisma.AuditEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          findMany: {
            args: Prisma.AuditEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          create: {
            args: Prisma.AuditEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          createMany: {
            args: Prisma.AuditEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          delete: {
            args: Prisma.AuditEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          update: {
            args: Prisma.AuditEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          deleteMany: {
            args: Prisma.AuditEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>[]
          }
          upsert: {
            args: Prisma.AuditEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditEventPayload>
          }
          aggregate: {
            args: Prisma.AuditEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditEvent>
          }
          groupBy: {
            args: Prisma.AuditEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditEventCountArgs<ExtArgs>
            result: $Utils.Optional<AuditEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    plantilla?: PlantillaOmit
    registro?: RegistroOmit
    auditEvent?: AuditEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlantillaCountOutputType
   */

  export type PlantillaCountOutputType = {
    registros: number
  }

  export type PlantillaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | PlantillaCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * PlantillaCountOutputType without action
   */
  export type PlantillaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantillaCountOutputType
     */
    select?: PlantillaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantillaCountOutputType without action
   */
  export type PlantillaCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
  }


  /**
   * Count Type RegistroCountOutputType
   */

  export type RegistroCountOutputType = {
    auditoria: number
  }

  export type RegistroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditoria?: boolean | RegistroCountOutputTypeCountAuditoriaArgs
  }

  // Custom InputTypes
  /**
   * RegistroCountOutputType without action
   */
  export type RegistroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroCountOutputType
     */
    select?: RegistroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistroCountOutputType without action
   */
  export type RegistroCountOutputTypeCountAuditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Plantilla
   */

  export type AggregatePlantilla = {
    _count: PlantillaCountAggregateOutputType | null
    _min: PlantillaMinAggregateOutputType | null
    _max: PlantillaMaxAggregateOutputType | null
  }

  export type PlantillaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    esDefault: boolean | null
  }

  export type PlantillaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    esDefault: boolean | null
  }

  export type PlantillaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    esDefault: number
    campos: number
    _all: number
  }


  export type PlantillaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    esDefault?: true
  }

  export type PlantillaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    esDefault?: true
  }

  export type PlantillaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    esDefault?: true
    campos?: true
    _all?: true
  }

  export type PlantillaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantilla to aggregate.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantillas
    **/
    _count?: true | PlantillaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantillaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantillaMaxAggregateInputType
  }

  export type GetPlantillaAggregateType<T extends PlantillaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantilla]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantilla[P]>
      : GetScalarType<T[P], AggregatePlantilla[P]>
  }




  export type PlantillaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantillaWhereInput
    orderBy?: PlantillaOrderByWithAggregationInput | PlantillaOrderByWithAggregationInput[]
    by: PlantillaScalarFieldEnum[] | PlantillaScalarFieldEnum
    having?: PlantillaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantillaCountAggregateInputType | true
    _min?: PlantillaMinAggregateInputType
    _max?: PlantillaMaxAggregateInputType
  }

  export type PlantillaGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    esDefault: boolean
    campos: JsonValue
    _count: PlantillaCountAggregateOutputType | null
    _min: PlantillaMinAggregateOutputType | null
    _max: PlantillaMaxAggregateOutputType | null
  }

  type GetPlantillaGroupByPayload<T extends PlantillaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantillaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantillaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantillaGroupByOutputType[P]>
            : GetScalarType<T[P], PlantillaGroupByOutputType[P]>
        }
      >
    >


  export type PlantillaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    esDefault?: boolean
    campos?: boolean
    registros?: boolean | Plantilla$registrosArgs<ExtArgs>
    _count?: boolean | PlantillaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantilla"]>

  export type PlantillaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    esDefault?: boolean
    campos?: boolean
  }, ExtArgs["result"]["plantilla"]>

  export type PlantillaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    esDefault?: boolean
    campos?: boolean
  }, ExtArgs["result"]["plantilla"]>

  export type PlantillaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    esDefault?: boolean
    campos?: boolean
  }

  export type PlantillaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "esDefault" | "campos", ExtArgs["result"]["plantilla"]>
  export type PlantillaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | Plantilla$registrosArgs<ExtArgs>
    _count?: boolean | PlantillaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantillaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantillaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantillaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plantilla"
    objects: {
      registros: Prisma.$RegistroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      esDefault: boolean
      campos: Prisma.JsonValue
    }, ExtArgs["result"]["plantilla"]>
    composites: {}
  }

  type PlantillaGetPayload<S extends boolean | null | undefined | PlantillaDefaultArgs> = $Result.GetResult<Prisma.$PlantillaPayload, S>

  type PlantillaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantillaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantillaCountAggregateInputType | true
    }

  export interface PlantillaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plantilla'], meta: { name: 'Plantilla' } }
    /**
     * Find zero or one Plantilla that matches the filter.
     * @param {PlantillaFindUniqueArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantillaFindUniqueArgs>(args: SelectSubset<T, PlantillaFindUniqueArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plantilla that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantillaFindUniqueOrThrowArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantillaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantillaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plantilla that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaFindFirstArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantillaFindFirstArgs>(args?: SelectSubset<T, PlantillaFindFirstArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plantilla that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaFindFirstOrThrowArgs} args - Arguments to find a Plantilla
     * @example
     * // Get one Plantilla
     * const plantilla = await prisma.plantilla.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantillaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantillaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plantillas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantillas
     * const plantillas = await prisma.plantilla.findMany()
     * 
     * // Get first 10 Plantillas
     * const plantillas = await prisma.plantilla.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantillaWithIdOnly = await prisma.plantilla.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantillaFindManyArgs>(args?: SelectSubset<T, PlantillaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plantilla.
     * @param {PlantillaCreateArgs} args - Arguments to create a Plantilla.
     * @example
     * // Create one Plantilla
     * const Plantilla = await prisma.plantilla.create({
     *   data: {
     *     // ... data to create a Plantilla
     *   }
     * })
     * 
     */
    create<T extends PlantillaCreateArgs>(args: SelectSubset<T, PlantillaCreateArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plantillas.
     * @param {PlantillaCreateManyArgs} args - Arguments to create many Plantillas.
     * @example
     * // Create many Plantillas
     * const plantilla = await prisma.plantilla.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantillaCreateManyArgs>(args?: SelectSubset<T, PlantillaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plantillas and returns the data saved in the database.
     * @param {PlantillaCreateManyAndReturnArgs} args - Arguments to create many Plantillas.
     * @example
     * // Create many Plantillas
     * const plantilla = await prisma.plantilla.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plantillas and only return the `id`
     * const plantillaWithIdOnly = await prisma.plantilla.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantillaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantillaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plantilla.
     * @param {PlantillaDeleteArgs} args - Arguments to delete one Plantilla.
     * @example
     * // Delete one Plantilla
     * const Plantilla = await prisma.plantilla.delete({
     *   where: {
     *     // ... filter to delete one Plantilla
     *   }
     * })
     * 
     */
    delete<T extends PlantillaDeleteArgs>(args: SelectSubset<T, PlantillaDeleteArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plantilla.
     * @param {PlantillaUpdateArgs} args - Arguments to update one Plantilla.
     * @example
     * // Update one Plantilla
     * const plantilla = await prisma.plantilla.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantillaUpdateArgs>(args: SelectSubset<T, PlantillaUpdateArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plantillas.
     * @param {PlantillaDeleteManyArgs} args - Arguments to filter Plantillas to delete.
     * @example
     * // Delete a few Plantillas
     * const { count } = await prisma.plantilla.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantillaDeleteManyArgs>(args?: SelectSubset<T, PlantillaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantillas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantillas
     * const plantilla = await prisma.plantilla.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantillaUpdateManyArgs>(args: SelectSubset<T, PlantillaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantillas and returns the data updated in the database.
     * @param {PlantillaUpdateManyAndReturnArgs} args - Arguments to update many Plantillas.
     * @example
     * // Update many Plantillas
     * const plantilla = await prisma.plantilla.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plantillas and only return the `id`
     * const plantillaWithIdOnly = await prisma.plantilla.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlantillaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantillaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plantilla.
     * @param {PlantillaUpsertArgs} args - Arguments to update or create a Plantilla.
     * @example
     * // Update or create a Plantilla
     * const plantilla = await prisma.plantilla.upsert({
     *   create: {
     *     // ... data to create a Plantilla
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plantilla we want to update
     *   }
     * })
     */
    upsert<T extends PlantillaUpsertArgs>(args: SelectSubset<T, PlantillaUpsertArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plantillas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaCountArgs} args - Arguments to filter Plantillas to count.
     * @example
     * // Count the number of Plantillas
     * const count = await prisma.plantilla.count({
     *   where: {
     *     // ... the filter for the Plantillas we want to count
     *   }
     * })
    **/
    count<T extends PlantillaCountArgs>(
      args?: Subset<T, PlantillaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantillaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plantilla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantillaAggregateArgs>(args: Subset<T, PlantillaAggregateArgs>): Prisma.PrismaPromise<GetPlantillaAggregateType<T>>

    /**
     * Group by Plantilla.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantillaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlantillaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantillaGroupByArgs['orderBy'] }
        : { orderBy?: PlantillaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlantillaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantillaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plantilla model
   */
  readonly fields: PlantillaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plantilla.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantillaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registros<T extends Plantilla$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Plantilla$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plantilla model
   */
  interface PlantillaFieldRefs {
    readonly id: FieldRef<"Plantilla", 'String'>
    readonly nombre: FieldRef<"Plantilla", 'String'>
    readonly descripcion: FieldRef<"Plantilla", 'String'>
    readonly esDefault: FieldRef<"Plantilla", 'Boolean'>
    readonly campos: FieldRef<"Plantilla", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Plantilla findUnique
   */
  export type PlantillaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla findUniqueOrThrow
   */
  export type PlantillaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla findFirst
   */
  export type PlantillaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantillas.
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantillas.
     */
    distinct?: PlantillaScalarFieldEnum | PlantillaScalarFieldEnum[]
  }

  /**
   * Plantilla findFirstOrThrow
   */
  export type PlantillaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantilla to fetch.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantillas.
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantillas.
     */
    distinct?: PlantillaScalarFieldEnum | PlantillaScalarFieldEnum[]
  }

  /**
   * Plantilla findMany
   */
  export type PlantillaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter, which Plantillas to fetch.
     */
    where?: PlantillaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantillas to fetch.
     */
    orderBy?: PlantillaOrderByWithRelationInput | PlantillaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantillas.
     */
    cursor?: PlantillaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantillas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantillas.
     */
    skip?: number
    distinct?: PlantillaScalarFieldEnum | PlantillaScalarFieldEnum[]
  }

  /**
   * Plantilla create
   */
  export type PlantillaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * The data needed to create a Plantilla.
     */
    data: XOR<PlantillaCreateInput, PlantillaUncheckedCreateInput>
  }

  /**
   * Plantilla createMany
   */
  export type PlantillaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plantillas.
     */
    data: PlantillaCreateManyInput | PlantillaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plantilla createManyAndReturn
   */
  export type PlantillaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * The data used to create many Plantillas.
     */
    data: PlantillaCreateManyInput | PlantillaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plantilla update
   */
  export type PlantillaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * The data needed to update a Plantilla.
     */
    data: XOR<PlantillaUpdateInput, PlantillaUncheckedUpdateInput>
    /**
     * Choose, which Plantilla to update.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla updateMany
   */
  export type PlantillaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantillas.
     */
    data: XOR<PlantillaUpdateManyMutationInput, PlantillaUncheckedUpdateManyInput>
    /**
     * Filter which Plantillas to update
     */
    where?: PlantillaWhereInput
    /**
     * Limit how many Plantillas to update.
     */
    limit?: number
  }

  /**
   * Plantilla updateManyAndReturn
   */
  export type PlantillaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * The data used to update Plantillas.
     */
    data: XOR<PlantillaUpdateManyMutationInput, PlantillaUncheckedUpdateManyInput>
    /**
     * Filter which Plantillas to update
     */
    where?: PlantillaWhereInput
    /**
     * Limit how many Plantillas to update.
     */
    limit?: number
  }

  /**
   * Plantilla upsert
   */
  export type PlantillaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * The filter to search for the Plantilla to update in case it exists.
     */
    where: PlantillaWhereUniqueInput
    /**
     * In case the Plantilla found by the `where` argument doesn't exist, create a new Plantilla with this data.
     */
    create: XOR<PlantillaCreateInput, PlantillaUncheckedCreateInput>
    /**
     * In case the Plantilla was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantillaUpdateInput, PlantillaUncheckedUpdateInput>
  }

  /**
   * Plantilla delete
   */
  export type PlantillaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
    /**
     * Filter which Plantilla to delete.
     */
    where: PlantillaWhereUniqueInput
  }

  /**
   * Plantilla deleteMany
   */
  export type PlantillaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantillas to delete
     */
    where?: PlantillaWhereInput
    /**
     * Limit how many Plantillas to delete.
     */
    limit?: number
  }

  /**
   * Plantilla.registros
   */
  export type Plantilla$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    cursor?: RegistroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Plantilla without action
   */
  export type PlantillaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plantilla
     */
    select?: PlantillaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plantilla
     */
    omit?: PlantillaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantillaInclude<ExtArgs> | null
  }


  /**
   * Model Registro
   */

  export type AggregateRegistro = {
    _count: RegistroCountAggregateOutputType | null
    _min: RegistroMinAggregateOutputType | null
    _max: RegistroMaxAggregateOutputType | null
  }

  export type RegistroMinAggregateOutputType = {
    id: string | null
    nombreCliente: string | null
    contacto: string | null
    plantillaId: string | null
    prioridad: $Enums.Prioridad | null
    estado: $Enums.EstadoRegistro | null
    usuarioId: string | null
    fechaRegistro: Date | null
    fechaActualizacion: Date | null
  }

  export type RegistroMaxAggregateOutputType = {
    id: string | null
    nombreCliente: string | null
    contacto: string | null
    plantillaId: string | null
    prioridad: $Enums.Prioridad | null
    estado: $Enums.EstadoRegistro | null
    usuarioId: string | null
    fechaRegistro: Date | null
    fechaActualizacion: Date | null
  }

  export type RegistroCountAggregateOutputType = {
    id: number
    nombreCliente: number
    contacto: number
    plantillaId: number
    especificaciones: number
    prioridad: number
    estado: number
    usuarioId: number
    fechaRegistro: number
    fechaActualizacion: number
    _all: number
  }


  export type RegistroMinAggregateInputType = {
    id?: true
    nombreCliente?: true
    contacto?: true
    plantillaId?: true
    prioridad?: true
    estado?: true
    usuarioId?: true
    fechaRegistro?: true
    fechaActualizacion?: true
  }

  export type RegistroMaxAggregateInputType = {
    id?: true
    nombreCliente?: true
    contacto?: true
    plantillaId?: true
    prioridad?: true
    estado?: true
    usuarioId?: true
    fechaRegistro?: true
    fechaActualizacion?: true
  }

  export type RegistroCountAggregateInputType = {
    id?: true
    nombreCliente?: true
    contacto?: true
    plantillaId?: true
    especificaciones?: true
    prioridad?: true
    estado?: true
    usuarioId?: true
    fechaRegistro?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type RegistroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registro to aggregate.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registros
    **/
    _count?: true | RegistroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroMaxAggregateInputType
  }

  export type GetRegistroAggregateType<T extends RegistroAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistro[P]>
      : GetScalarType<T[P], AggregateRegistro[P]>
  }




  export type RegistroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroWhereInput
    orderBy?: RegistroOrderByWithAggregationInput | RegistroOrderByWithAggregationInput[]
    by: RegistroScalarFieldEnum[] | RegistroScalarFieldEnum
    having?: RegistroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroCountAggregateInputType | true
    _min?: RegistroMinAggregateInputType
    _max?: RegistroMaxAggregateInputType
  }

  export type RegistroGroupByOutputType = {
    id: string
    nombreCliente: string
    contacto: string | null
    plantillaId: string
    especificaciones: JsonValue
    prioridad: $Enums.Prioridad
    estado: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro: Date
    fechaActualizacion: Date
    _count: RegistroCountAggregateOutputType | null
    _min: RegistroMinAggregateOutputType | null
    _max: RegistroMaxAggregateOutputType | null
  }

  type GetRegistroGroupByPayload<T extends RegistroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroGroupByOutputType[P]>
        }
      >
    >


  export type RegistroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCliente?: boolean
    contacto?: boolean
    plantillaId?: boolean
    especificaciones?: boolean
    prioridad?: boolean
    estado?: boolean
    usuarioId?: boolean
    fechaRegistro?: boolean
    fechaActualizacion?: boolean
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    auditoria?: boolean | Registro$auditoriaArgs<ExtArgs>
    _count?: boolean | RegistroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCliente?: boolean
    contacto?: boolean
    plantillaId?: boolean
    especificaciones?: boolean
    prioridad?: boolean
    estado?: boolean
    usuarioId?: boolean
    fechaRegistro?: boolean
    fechaActualizacion?: boolean
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombreCliente?: boolean
    contacto?: boolean
    plantillaId?: boolean
    especificaciones?: boolean
    prioridad?: boolean
    estado?: boolean
    usuarioId?: boolean
    fechaRegistro?: boolean
    fechaActualizacion?: boolean
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registro"]>

  export type RegistroSelectScalar = {
    id?: boolean
    nombreCliente?: boolean
    contacto?: boolean
    plantillaId?: boolean
    especificaciones?: boolean
    prioridad?: boolean
    estado?: boolean
    usuarioId?: boolean
    fechaRegistro?: boolean
    fechaActualizacion?: boolean
  }

  export type RegistroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombreCliente" | "contacto" | "plantillaId" | "especificaciones" | "prioridad" | "estado" | "usuarioId" | "fechaRegistro" | "fechaActualizacion", ExtArgs["result"]["registro"]>
  export type RegistroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
    auditoria?: boolean | Registro$auditoriaArgs<ExtArgs>
    _count?: boolean | RegistroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegistroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
  }
  export type RegistroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantilla?: boolean | PlantillaDefaultArgs<ExtArgs>
  }

  export type $RegistroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registro"
    objects: {
      plantilla: Prisma.$PlantillaPayload<ExtArgs>
      auditoria: Prisma.$AuditEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombreCliente: string
      contacto: string | null
      plantillaId: string
      especificaciones: Prisma.JsonValue
      prioridad: $Enums.Prioridad
      estado: $Enums.EstadoRegistro
      usuarioId: string
      fechaRegistro: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["registro"]>
    composites: {}
  }

  type RegistroGetPayload<S extends boolean | null | undefined | RegistroDefaultArgs> = $Result.GetResult<Prisma.$RegistroPayload, S>

  type RegistroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroCountAggregateInputType | true
    }

  export interface RegistroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registro'], meta: { name: 'Registro' } }
    /**
     * Find zero or one Registro that matches the filter.
     * @param {RegistroFindUniqueArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroFindUniqueArgs>(args: SelectSubset<T, RegistroFindUniqueArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroFindUniqueOrThrowArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindFirstArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroFindFirstArgs>(args?: SelectSubset<T, RegistroFindFirstArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindFirstOrThrowArgs} args - Arguments to find a Registro
     * @example
     * // Get one Registro
     * const registro = await prisma.registro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registros
     * const registros = await prisma.registro.findMany()
     * 
     * // Get first 10 Registros
     * const registros = await prisma.registro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroWithIdOnly = await prisma.registro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroFindManyArgs>(args?: SelectSubset<T, RegistroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registro.
     * @param {RegistroCreateArgs} args - Arguments to create a Registro.
     * @example
     * // Create one Registro
     * const Registro = await prisma.registro.create({
     *   data: {
     *     // ... data to create a Registro
     *   }
     * })
     * 
     */
    create<T extends RegistroCreateArgs>(args: SelectSubset<T, RegistroCreateArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registros.
     * @param {RegistroCreateManyArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registro = await prisma.registro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroCreateManyArgs>(args?: SelectSubset<T, RegistroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registros and returns the data saved in the database.
     * @param {RegistroCreateManyAndReturnArgs} args - Arguments to create many Registros.
     * @example
     * // Create many Registros
     * const registro = await prisma.registro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registros and only return the `id`
     * const registroWithIdOnly = await prisma.registro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registro.
     * @param {RegistroDeleteArgs} args - Arguments to delete one Registro.
     * @example
     * // Delete one Registro
     * const Registro = await prisma.registro.delete({
     *   where: {
     *     // ... filter to delete one Registro
     *   }
     * })
     * 
     */
    delete<T extends RegistroDeleteArgs>(args: SelectSubset<T, RegistroDeleteArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registro.
     * @param {RegistroUpdateArgs} args - Arguments to update one Registro.
     * @example
     * // Update one Registro
     * const registro = await prisma.registro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroUpdateArgs>(args: SelectSubset<T, RegistroUpdateArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registros.
     * @param {RegistroDeleteManyArgs} args - Arguments to filter Registros to delete.
     * @example
     * // Delete a few Registros
     * const { count } = await prisma.registro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroDeleteManyArgs>(args?: SelectSubset<T, RegistroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registros
     * const registro = await prisma.registro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroUpdateManyArgs>(args: SelectSubset<T, RegistroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registros and returns the data updated in the database.
     * @param {RegistroUpdateManyAndReturnArgs} args - Arguments to update many Registros.
     * @example
     * // Update many Registros
     * const registro = await prisma.registro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registros and only return the `id`
     * const registroWithIdOnly = await prisma.registro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistroUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registro.
     * @param {RegistroUpsertArgs} args - Arguments to update or create a Registro.
     * @example
     * // Update or create a Registro
     * const registro = await prisma.registro.upsert({
     *   create: {
     *     // ... data to create a Registro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registro we want to update
     *   }
     * })
     */
    upsert<T extends RegistroUpsertArgs>(args: SelectSubset<T, RegistroUpsertArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroCountArgs} args - Arguments to filter Registros to count.
     * @example
     * // Count the number of Registros
     * const count = await prisma.registro.count({
     *   where: {
     *     // ... the filter for the Registros we want to count
     *   }
     * })
    **/
    count<T extends RegistroCountArgs>(
      args?: Subset<T, RegistroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistroAggregateArgs>(args: Subset<T, RegistroAggregateArgs>): Prisma.PrismaPromise<GetRegistroAggregateType<T>>

    /**
     * Group by Registro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroGroupByArgs['orderBy'] }
        : { orderBy?: RegistroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registro model
   */
  readonly fields: RegistroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plantilla<T extends PlantillaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantillaDefaultArgs<ExtArgs>>): Prisma__PlantillaClient<$Result.GetResult<Prisma.$PlantillaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    auditoria<T extends Registro$auditoriaArgs<ExtArgs> = {}>(args?: Subset<T, Registro$auditoriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Registro model
   */
  interface RegistroFieldRefs {
    readonly id: FieldRef<"Registro", 'String'>
    readonly nombreCliente: FieldRef<"Registro", 'String'>
    readonly contacto: FieldRef<"Registro", 'String'>
    readonly plantillaId: FieldRef<"Registro", 'String'>
    readonly especificaciones: FieldRef<"Registro", 'Json'>
    readonly prioridad: FieldRef<"Registro", 'Prioridad'>
    readonly estado: FieldRef<"Registro", 'EstadoRegistro'>
    readonly usuarioId: FieldRef<"Registro", 'String'>
    readonly fechaRegistro: FieldRef<"Registro", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"Registro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registro findUnique
   */
  export type RegistroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro findUniqueOrThrow
   */
  export type RegistroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro findFirst
   */
  export type RegistroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro findFirstOrThrow
   */
  export type RegistroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registro to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registros.
     */
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro findMany
   */
  export type RegistroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter, which Registros to fetch.
     */
    where?: RegistroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registros to fetch.
     */
    orderBy?: RegistroOrderByWithRelationInput | RegistroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registros.
     */
    cursor?: RegistroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registros.
     */
    skip?: number
    distinct?: RegistroScalarFieldEnum | RegistroScalarFieldEnum[]
  }

  /**
   * Registro create
   */
  export type RegistroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The data needed to create a Registro.
     */
    data: XOR<RegistroCreateInput, RegistroUncheckedCreateInput>
  }

  /**
   * Registro createMany
   */
  export type RegistroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registros.
     */
    data: RegistroCreateManyInput | RegistroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registro createManyAndReturn
   */
  export type RegistroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * The data used to create many Registros.
     */
    data: RegistroCreateManyInput | RegistroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro update
   */
  export type RegistroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The data needed to update a Registro.
     */
    data: XOR<RegistroUpdateInput, RegistroUncheckedUpdateInput>
    /**
     * Choose, which Registro to update.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro updateMany
   */
  export type RegistroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
  }

  /**
   * Registro updateManyAndReturn
   */
  export type RegistroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * The data used to update Registros.
     */
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyInput>
    /**
     * Filter which Registros to update
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registro upsert
   */
  export type RegistroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * The filter to search for the Registro to update in case it exists.
     */
    where: RegistroWhereUniqueInput
    /**
     * In case the Registro found by the `where` argument doesn't exist, create a new Registro with this data.
     */
    create: XOR<RegistroCreateInput, RegistroUncheckedCreateInput>
    /**
     * In case the Registro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroUpdateInput, RegistroUncheckedUpdateInput>
  }

  /**
   * Registro delete
   */
  export type RegistroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
    /**
     * Filter which Registro to delete.
     */
    where: RegistroWhereUniqueInput
  }

  /**
   * Registro deleteMany
   */
  export type RegistroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registros to delete
     */
    where?: RegistroWhereInput
    /**
     * Limit how many Registros to delete.
     */
    limit?: number
  }

  /**
   * Registro.auditoria
   */
  export type Registro$auditoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    cursor?: AuditEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * Registro without action
   */
  export type RegistroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registro
     */
    select?: RegistroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registro
     */
    omit?: RegistroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroInclude<ExtArgs> | null
  }


  /**
   * Model AuditEvent
   */

  export type AggregateAuditEvent = {
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  export type AuditEventMinAggregateOutputType = {
    id: string | null
    registroId: string | null
    usuarioId: string | null
    accion: string | null
    detalle: string | null
    creadoEn: Date | null
  }

  export type AuditEventMaxAggregateOutputType = {
    id: string | null
    registroId: string | null
    usuarioId: string | null
    accion: string | null
    detalle: string | null
    creadoEn: Date | null
  }

  export type AuditEventCountAggregateOutputType = {
    id: number
    registroId: number
    usuarioId: number
    accion: number
    detalle: number
    creadoEn: number
    _all: number
  }


  export type AuditEventMinAggregateInputType = {
    id?: true
    registroId?: true
    usuarioId?: true
    accion?: true
    detalle?: true
    creadoEn?: true
  }

  export type AuditEventMaxAggregateInputType = {
    id?: true
    registroId?: true
    usuarioId?: true
    accion?: true
    detalle?: true
    creadoEn?: true
  }

  export type AuditEventCountAggregateInputType = {
    id?: true
    registroId?: true
    usuarioId?: true
    accion?: true
    detalle?: true
    creadoEn?: true
    _all?: true
  }

  export type AuditEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvent to aggregate.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditEvents
    **/
    _count?: true | AuditEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditEventMaxAggregateInputType
  }

  export type GetAuditEventAggregateType<T extends AuditEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditEvent[P]>
      : GetScalarType<T[P], AggregateAuditEvent[P]>
  }




  export type AuditEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditEventWhereInput
    orderBy?: AuditEventOrderByWithAggregationInput | AuditEventOrderByWithAggregationInput[]
    by: AuditEventScalarFieldEnum[] | AuditEventScalarFieldEnum
    having?: AuditEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditEventCountAggregateInputType | true
    _min?: AuditEventMinAggregateInputType
    _max?: AuditEventMaxAggregateInputType
  }

  export type AuditEventGroupByOutputType = {
    id: string
    registroId: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn: Date
    _count: AuditEventCountAggregateOutputType | null
    _min: AuditEventMinAggregateOutputType | null
    _max: AuditEventMaxAggregateOutputType | null
  }

  type GetAuditEventGroupByPayload<T extends AuditEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
            : GetScalarType<T[P], AuditEventGroupByOutputType[P]>
        }
      >
    >


  export type AuditEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registroId?: boolean
    usuarioId?: boolean
    accion?: boolean
    detalle?: boolean
    creadoEn?: boolean
    registro?: boolean | RegistroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registroId?: boolean
    usuarioId?: boolean
    accion?: boolean
    detalle?: boolean
    creadoEn?: boolean
    registro?: boolean | RegistroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registroId?: boolean
    usuarioId?: boolean
    accion?: boolean
    detalle?: boolean
    creadoEn?: boolean
    registro?: boolean | RegistroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditEvent"]>

  export type AuditEventSelectScalar = {
    id?: boolean
    registroId?: boolean
    usuarioId?: boolean
    accion?: boolean
    detalle?: boolean
    creadoEn?: boolean
  }

  export type AuditEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registroId" | "usuarioId" | "accion" | "detalle" | "creadoEn", ExtArgs["result"]["auditEvent"]>
  export type AuditEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | RegistroDefaultArgs<ExtArgs>
  }
  export type AuditEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | RegistroDefaultArgs<ExtArgs>
  }
  export type AuditEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registro?: boolean | RegistroDefaultArgs<ExtArgs>
  }

  export type $AuditEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditEvent"
    objects: {
      registro: Prisma.$RegistroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registroId: string
      usuarioId: string
      accion: string
      detalle: string
      creadoEn: Date
    }, ExtArgs["result"]["auditEvent"]>
    composites: {}
  }

  type AuditEventGetPayload<S extends boolean | null | undefined | AuditEventDefaultArgs> = $Result.GetResult<Prisma.$AuditEventPayload, S>

  type AuditEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditEventCountAggregateInputType | true
    }

  export interface AuditEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditEvent'], meta: { name: 'AuditEvent' } }
    /**
     * Find zero or one AuditEvent that matches the filter.
     * @param {AuditEventFindUniqueArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditEventFindUniqueArgs>(args: SelectSubset<T, AuditEventFindUniqueArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditEventFindUniqueOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditEventFindFirstArgs>(args?: SelectSubset<T, AuditEventFindFirstArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindFirstOrThrowArgs} args - Arguments to find a AuditEvent
     * @example
     * // Get one AuditEvent
     * const auditEvent = await prisma.auditEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany()
     * 
     * // Get first 10 AuditEvents
     * const auditEvents = await prisma.auditEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditEventFindManyArgs>(args?: SelectSubset<T, AuditEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditEvent.
     * @param {AuditEventCreateArgs} args - Arguments to create a AuditEvent.
     * @example
     * // Create one AuditEvent
     * const AuditEvent = await prisma.auditEvent.create({
     *   data: {
     *     // ... data to create a AuditEvent
     *   }
     * })
     * 
     */
    create<T extends AuditEventCreateArgs>(args: SelectSubset<T, AuditEventCreateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditEvents.
     * @param {AuditEventCreateManyArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditEventCreateManyArgs>(args?: SelectSubset<T, AuditEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditEvents and returns the data saved in the database.
     * @param {AuditEventCreateManyAndReturnArgs} args - Arguments to create many AuditEvents.
     * @example
     * // Create many AuditEvents
     * const auditEvent = await prisma.auditEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditEvent.
     * @param {AuditEventDeleteArgs} args - Arguments to delete one AuditEvent.
     * @example
     * // Delete one AuditEvent
     * const AuditEvent = await prisma.auditEvent.delete({
     *   where: {
     *     // ... filter to delete one AuditEvent
     *   }
     * })
     * 
     */
    delete<T extends AuditEventDeleteArgs>(args: SelectSubset<T, AuditEventDeleteArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditEvent.
     * @param {AuditEventUpdateArgs} args - Arguments to update one AuditEvent.
     * @example
     * // Update one AuditEvent
     * const auditEvent = await prisma.auditEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditEventUpdateArgs>(args: SelectSubset<T, AuditEventUpdateArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditEvents.
     * @param {AuditEventDeleteManyArgs} args - Arguments to filter AuditEvents to delete.
     * @example
     * // Delete a few AuditEvents
     * const { count } = await prisma.auditEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditEventDeleteManyArgs>(args?: SelectSubset<T, AuditEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditEventUpdateManyArgs>(args: SelectSubset<T, AuditEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditEvents and returns the data updated in the database.
     * @param {AuditEventUpdateManyAndReturnArgs} args - Arguments to update many AuditEvents.
     * @example
     * // Update many AuditEvents
     * const auditEvent = await prisma.auditEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditEvents and only return the `id`
     * const auditEventWithIdOnly = await prisma.auditEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditEvent.
     * @param {AuditEventUpsertArgs} args - Arguments to update or create a AuditEvent.
     * @example
     * // Update or create a AuditEvent
     * const auditEvent = await prisma.auditEvent.upsert({
     *   create: {
     *     // ... data to create a AuditEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditEvent we want to update
     *   }
     * })
     */
    upsert<T extends AuditEventUpsertArgs>(args: SelectSubset<T, AuditEventUpsertArgs<ExtArgs>>): Prisma__AuditEventClient<$Result.GetResult<Prisma.$AuditEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventCountArgs} args - Arguments to filter AuditEvents to count.
     * @example
     * // Count the number of AuditEvents
     * const count = await prisma.auditEvent.count({
     *   where: {
     *     // ... the filter for the AuditEvents we want to count
     *   }
     * })
    **/
    count<T extends AuditEventCountArgs>(
      args?: Subset<T, AuditEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditEventAggregateArgs>(args: Subset<T, AuditEventAggregateArgs>): Prisma.PrismaPromise<GetAuditEventAggregateType<T>>

    /**
     * Group by AuditEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditEventGroupByArgs['orderBy'] }
        : { orderBy?: AuditEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditEvent model
   */
  readonly fields: AuditEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registro<T extends RegistroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistroDefaultArgs<ExtArgs>>): Prisma__RegistroClient<$Result.GetResult<Prisma.$RegistroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditEvent model
   */
  interface AuditEventFieldRefs {
    readonly id: FieldRef<"AuditEvent", 'String'>
    readonly registroId: FieldRef<"AuditEvent", 'String'>
    readonly usuarioId: FieldRef<"AuditEvent", 'String'>
    readonly accion: FieldRef<"AuditEvent", 'String'>
    readonly detalle: FieldRef<"AuditEvent", 'String'>
    readonly creadoEn: FieldRef<"AuditEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditEvent findUnique
   */
  export type AuditEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findUniqueOrThrow
   */
  export type AuditEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent findFirst
   */
  export type AuditEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findFirstOrThrow
   */
  export type AuditEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvent to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditEvents.
     */
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent findMany
   */
  export type AuditEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter, which AuditEvents to fetch.
     */
    where?: AuditEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditEvents to fetch.
     */
    orderBy?: AuditEventOrderByWithRelationInput | AuditEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditEvents.
     */
    cursor?: AuditEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditEvents.
     */
    skip?: number
    distinct?: AuditEventScalarFieldEnum | AuditEventScalarFieldEnum[]
  }

  /**
   * AuditEvent create
   */
  export type AuditEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditEvent.
     */
    data: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
  }

  /**
   * AuditEvent createMany
   */
  export type AuditEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditEvent createManyAndReturn
   */
  export type AuditEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to create many AuditEvents.
     */
    data: AuditEventCreateManyInput | AuditEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent update
   */
  export type AuditEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditEvent.
     */
    data: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
    /**
     * Choose, which AuditEvent to update.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent updateMany
   */
  export type AuditEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
  }

  /**
   * AuditEvent updateManyAndReturn
   */
  export type AuditEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * The data used to update AuditEvents.
     */
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyInput>
    /**
     * Filter which AuditEvents to update
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditEvent upsert
   */
  export type AuditEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditEvent to update in case it exists.
     */
    where: AuditEventWhereUniqueInput
    /**
     * In case the AuditEvent found by the `where` argument doesn't exist, create a new AuditEvent with this data.
     */
    create: XOR<AuditEventCreateInput, AuditEventUncheckedCreateInput>
    /**
     * In case the AuditEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditEventUpdateInput, AuditEventUncheckedUpdateInput>
  }

  /**
   * AuditEvent delete
   */
  export type AuditEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
    /**
     * Filter which AuditEvent to delete.
     */
    where: AuditEventWhereUniqueInput
  }

  /**
   * AuditEvent deleteMany
   */
  export type AuditEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditEvents to delete
     */
    where?: AuditEventWhereInput
    /**
     * Limit how many AuditEvents to delete.
     */
    limit?: number
  }

  /**
   * AuditEvent without action
   */
  export type AuditEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditEvent
     */
    select?: AuditEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditEvent
     */
    omit?: AuditEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlantillaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    esDefault: 'esDefault',
    campos: 'campos'
  };

  export type PlantillaScalarFieldEnum = (typeof PlantillaScalarFieldEnum)[keyof typeof PlantillaScalarFieldEnum]


  export const RegistroScalarFieldEnum: {
    id: 'id',
    nombreCliente: 'nombreCliente',
    contacto: 'contacto',
    plantillaId: 'plantillaId',
    especificaciones: 'especificaciones',
    prioridad: 'prioridad',
    estado: 'estado',
    usuarioId: 'usuarioId',
    fechaRegistro: 'fechaRegistro',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type RegistroScalarFieldEnum = (typeof RegistroScalarFieldEnum)[keyof typeof RegistroScalarFieldEnum]


  export const AuditEventScalarFieldEnum: {
    id: 'id',
    registroId: 'registroId',
    usuarioId: 'usuarioId',
    accion: 'accion',
    detalle: 'detalle',
    creadoEn: 'creadoEn'
  };

  export type AuditEventScalarFieldEnum = (typeof AuditEventScalarFieldEnum)[keyof typeof AuditEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Prioridad'
   */
  export type EnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad'>
    


  /**
   * Reference to a field of type 'Prioridad[]'
   */
  export type ListEnumPrioridadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Prioridad[]'>
    


  /**
   * Reference to a field of type 'EstadoRegistro'
   */
  export type EnumEstadoRegistroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoRegistro'>
    


  /**
   * Reference to a field of type 'EstadoRegistro[]'
   */
  export type ListEnumEstadoRegistroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoRegistro[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PlantillaWhereInput = {
    AND?: PlantillaWhereInput | PlantillaWhereInput[]
    OR?: PlantillaWhereInput[]
    NOT?: PlantillaWhereInput | PlantillaWhereInput[]
    id?: StringFilter<"Plantilla"> | string
    nombre?: StringFilter<"Plantilla"> | string
    descripcion?: StringNullableFilter<"Plantilla"> | string | null
    esDefault?: BoolFilter<"Plantilla"> | boolean
    campos?: JsonFilter<"Plantilla">
    registros?: RegistroListRelationFilter
  }

  export type PlantillaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    esDefault?: SortOrder
    campos?: SortOrder
    registros?: RegistroOrderByRelationAggregateInput
  }

  export type PlantillaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: PlantillaWhereInput | PlantillaWhereInput[]
    OR?: PlantillaWhereInput[]
    NOT?: PlantillaWhereInput | PlantillaWhereInput[]
    descripcion?: StringNullableFilter<"Plantilla"> | string | null
    esDefault?: BoolFilter<"Plantilla"> | boolean
    campos?: JsonFilter<"Plantilla">
    registros?: RegistroListRelationFilter
  }, "id" | "nombre">

  export type PlantillaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    esDefault?: SortOrder
    campos?: SortOrder
    _count?: PlantillaCountOrderByAggregateInput
    _max?: PlantillaMaxOrderByAggregateInput
    _min?: PlantillaMinOrderByAggregateInput
  }

  export type PlantillaScalarWhereWithAggregatesInput = {
    AND?: PlantillaScalarWhereWithAggregatesInput | PlantillaScalarWhereWithAggregatesInput[]
    OR?: PlantillaScalarWhereWithAggregatesInput[]
    NOT?: PlantillaScalarWhereWithAggregatesInput | PlantillaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plantilla"> | string
    nombre?: StringWithAggregatesFilter<"Plantilla"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Plantilla"> | string | null
    esDefault?: BoolWithAggregatesFilter<"Plantilla"> | boolean
    campos?: JsonWithAggregatesFilter<"Plantilla">
  }

  export type RegistroWhereInput = {
    AND?: RegistroWhereInput | RegistroWhereInput[]
    OR?: RegistroWhereInput[]
    NOT?: RegistroWhereInput | RegistroWhereInput[]
    id?: StringFilter<"Registro"> | string
    nombreCliente?: StringFilter<"Registro"> | string
    contacto?: StringNullableFilter<"Registro"> | string | null
    plantillaId?: StringFilter<"Registro"> | string
    especificaciones?: JsonFilter<"Registro">
    prioridad?: EnumPrioridadFilter<"Registro"> | $Enums.Prioridad
    estado?: EnumEstadoRegistroFilter<"Registro"> | $Enums.EstadoRegistro
    usuarioId?: StringFilter<"Registro"> | string
    fechaRegistro?: DateTimeFilter<"Registro"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Registro"> | Date | string
    plantilla?: XOR<PlantillaScalarRelationFilter, PlantillaWhereInput>
    auditoria?: AuditEventListRelationFilter
  }

  export type RegistroOrderByWithRelationInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    contacto?: SortOrderInput | SortOrder
    plantillaId?: SortOrder
    especificaciones?: SortOrder
    prioridad?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    fechaRegistro?: SortOrder
    fechaActualizacion?: SortOrder
    plantilla?: PlantillaOrderByWithRelationInput
    auditoria?: AuditEventOrderByRelationAggregateInput
  }

  export type RegistroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroWhereInput | RegistroWhereInput[]
    OR?: RegistroWhereInput[]
    NOT?: RegistroWhereInput | RegistroWhereInput[]
    nombreCliente?: StringFilter<"Registro"> | string
    contacto?: StringNullableFilter<"Registro"> | string | null
    plantillaId?: StringFilter<"Registro"> | string
    especificaciones?: JsonFilter<"Registro">
    prioridad?: EnumPrioridadFilter<"Registro"> | $Enums.Prioridad
    estado?: EnumEstadoRegistroFilter<"Registro"> | $Enums.EstadoRegistro
    usuarioId?: StringFilter<"Registro"> | string
    fechaRegistro?: DateTimeFilter<"Registro"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Registro"> | Date | string
    plantilla?: XOR<PlantillaScalarRelationFilter, PlantillaWhereInput>
    auditoria?: AuditEventListRelationFilter
  }, "id">

  export type RegistroOrderByWithAggregationInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    contacto?: SortOrderInput | SortOrder
    plantillaId?: SortOrder
    especificaciones?: SortOrder
    prioridad?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    fechaRegistro?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: RegistroCountOrderByAggregateInput
    _max?: RegistroMaxOrderByAggregateInput
    _min?: RegistroMinOrderByAggregateInput
  }

  export type RegistroScalarWhereWithAggregatesInput = {
    AND?: RegistroScalarWhereWithAggregatesInput | RegistroScalarWhereWithAggregatesInput[]
    OR?: RegistroScalarWhereWithAggregatesInput[]
    NOT?: RegistroScalarWhereWithAggregatesInput | RegistroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registro"> | string
    nombreCliente?: StringWithAggregatesFilter<"Registro"> | string
    contacto?: StringNullableWithAggregatesFilter<"Registro"> | string | null
    plantillaId?: StringWithAggregatesFilter<"Registro"> | string
    especificaciones?: JsonWithAggregatesFilter<"Registro">
    prioridad?: EnumPrioridadWithAggregatesFilter<"Registro"> | $Enums.Prioridad
    estado?: EnumEstadoRegistroWithAggregatesFilter<"Registro"> | $Enums.EstadoRegistro
    usuarioId?: StringWithAggregatesFilter<"Registro"> | string
    fechaRegistro?: DateTimeWithAggregatesFilter<"Registro"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"Registro"> | Date | string
  }

  export type AuditEventWhereInput = {
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    registroId?: StringFilter<"AuditEvent"> | string
    usuarioId?: StringFilter<"AuditEvent"> | string
    accion?: StringFilter<"AuditEvent"> | string
    detalle?: StringFilter<"AuditEvent"> | string
    creadoEn?: DateTimeFilter<"AuditEvent"> | Date | string
    registro?: XOR<RegistroScalarRelationFilter, RegistroWhereInput>
  }

  export type AuditEventOrderByWithRelationInput = {
    id?: SortOrder
    registroId?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
    registro?: RegistroOrderByWithRelationInput
  }

  export type AuditEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditEventWhereInput | AuditEventWhereInput[]
    OR?: AuditEventWhereInput[]
    NOT?: AuditEventWhereInput | AuditEventWhereInput[]
    registroId?: StringFilter<"AuditEvent"> | string
    usuarioId?: StringFilter<"AuditEvent"> | string
    accion?: StringFilter<"AuditEvent"> | string
    detalle?: StringFilter<"AuditEvent"> | string
    creadoEn?: DateTimeFilter<"AuditEvent"> | Date | string
    registro?: XOR<RegistroScalarRelationFilter, RegistroWhereInput>
  }, "id">

  export type AuditEventOrderByWithAggregationInput = {
    id?: SortOrder
    registroId?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
    _count?: AuditEventCountOrderByAggregateInput
    _max?: AuditEventMaxOrderByAggregateInput
    _min?: AuditEventMinOrderByAggregateInput
  }

  export type AuditEventScalarWhereWithAggregatesInput = {
    AND?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    OR?: AuditEventScalarWhereWithAggregatesInput[]
    NOT?: AuditEventScalarWhereWithAggregatesInput | AuditEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditEvent"> | string
    registroId?: StringWithAggregatesFilter<"AuditEvent"> | string
    usuarioId?: StringWithAggregatesFilter<"AuditEvent"> | string
    accion?: StringWithAggregatesFilter<"AuditEvent"> | string
    detalle?: StringWithAggregatesFilter<"AuditEvent"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"AuditEvent"> | Date | string
  }

  export type PlantillaCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    esDefault?: boolean
    campos: JsonNullValueInput | InputJsonValue
    registros?: RegistroCreateNestedManyWithoutPlantillaInput
  }

  export type PlantillaUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    esDefault?: boolean
    campos: JsonNullValueInput | InputJsonValue
    registros?: RegistroUncheckedCreateNestedManyWithoutPlantillaInput
  }

  export type PlantillaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    esDefault?: BoolFieldUpdateOperationsInput | boolean
    campos?: JsonNullValueInput | InputJsonValue
    registros?: RegistroUpdateManyWithoutPlantillaNestedInput
  }

  export type PlantillaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    esDefault?: BoolFieldUpdateOperationsInput | boolean
    campos?: JsonNullValueInput | InputJsonValue
    registros?: RegistroUncheckedUpdateManyWithoutPlantillaNestedInput
  }

  export type PlantillaCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    esDefault?: boolean
    campos: JsonNullValueInput | InputJsonValue
  }

  export type PlantillaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    esDefault?: BoolFieldUpdateOperationsInput | boolean
    campos?: JsonNullValueInput | InputJsonValue
  }

  export type PlantillaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    esDefault?: BoolFieldUpdateOperationsInput | boolean
    campos?: JsonNullValueInput | InputJsonValue
  }

  export type RegistroCreateInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
    plantilla: PlantillaCreateNestedOneWithoutRegistrosInput
    auditoria?: AuditEventCreateNestedManyWithoutRegistroInput
  }

  export type RegistroUncheckedCreateInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    plantillaId: string
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
    auditoria?: AuditEventUncheckedCreateNestedManyWithoutRegistroInput
  }

  export type RegistroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    plantilla?: PlantillaUpdateOneRequiredWithoutRegistrosNestedInput
    auditoria?: AuditEventUpdateManyWithoutRegistroNestedInput
  }

  export type RegistroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    plantillaId?: StringFieldUpdateOperationsInput | string
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditoria?: AuditEventUncheckedUpdateManyWithoutRegistroNestedInput
  }

  export type RegistroCreateManyInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    plantillaId: string
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
  }

  export type RegistroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    plantillaId?: StringFieldUpdateOperationsInput | string
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateInput = {
    id?: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn?: Date | string
    registro: RegistroCreateNestedOneWithoutAuditoriaInput
  }

  export type AuditEventUncheckedCreateInput = {
    id?: string
    registroId: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn?: Date | string
  }

  export type AuditEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    registro?: RegistroUpdateOneRequiredWithoutAuditoriaNestedInput
  }

  export type AuditEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registroId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyInput = {
    id?: string
    registroId: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn?: Date | string
  }

  export type AuditEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registroId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RegistroListRelationFilter = {
    every?: RegistroWhereInput
    some?: RegistroWhereInput
    none?: RegistroWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegistroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantillaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    esDefault?: SortOrder
    campos?: SortOrder
  }

  export type PlantillaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    esDefault?: SortOrder
  }

  export type PlantillaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    esDefault?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumPrioridadFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadFilter<$PrismaModel> | $Enums.Prioridad
  }

  export type EnumEstadoRegistroFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRegistro | EnumEstadoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRegistroFilter<$PrismaModel> | $Enums.EstadoRegistro
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlantillaScalarRelationFilter = {
    is?: PlantillaWhereInput
    isNot?: PlantillaWhereInput
  }

  export type AuditEventListRelationFilter = {
    every?: AuditEventWhereInput
    some?: AuditEventWhereInput
    none?: AuditEventWhereInput
  }

  export type AuditEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroCountOrderByAggregateInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    contacto?: SortOrder
    plantillaId?: SortOrder
    especificaciones?: SortOrder
    prioridad?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    fechaRegistro?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type RegistroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    contacto?: SortOrder
    plantillaId?: SortOrder
    prioridad?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    fechaRegistro?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type RegistroMinOrderByAggregateInput = {
    id?: SortOrder
    nombreCliente?: SortOrder
    contacto?: SortOrder
    plantillaId?: SortOrder
    prioridad?: SortOrder
    estado?: SortOrder
    usuarioId?: SortOrder
    fechaRegistro?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type EnumPrioridadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadFilter<$PrismaModel>
    _max?: NestedEnumPrioridadFilter<$PrismaModel>
  }

  export type EnumEstadoRegistroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRegistro | EnumEstadoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRegistroWithAggregatesFilter<$PrismaModel> | $Enums.EstadoRegistro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoRegistroFilter<$PrismaModel>
    _max?: NestedEnumEstadoRegistroFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegistroScalarRelationFilter = {
    is?: RegistroWhereInput
    isNot?: RegistroWhereInput
  }

  export type AuditEventCountOrderByAggregateInput = {
    id?: SortOrder
    registroId?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
  }

  export type AuditEventMaxOrderByAggregateInput = {
    id?: SortOrder
    registroId?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
  }

  export type AuditEventMinOrderByAggregateInput = {
    id?: SortOrder
    registroId?: SortOrder
    usuarioId?: SortOrder
    accion?: SortOrder
    detalle?: SortOrder
    creadoEn?: SortOrder
  }

  export type RegistroCreateNestedManyWithoutPlantillaInput = {
    create?: XOR<RegistroCreateWithoutPlantillaInput, RegistroUncheckedCreateWithoutPlantillaInput> | RegistroCreateWithoutPlantillaInput[] | RegistroUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutPlantillaInput | RegistroCreateOrConnectWithoutPlantillaInput[]
    createMany?: RegistroCreateManyPlantillaInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type RegistroUncheckedCreateNestedManyWithoutPlantillaInput = {
    create?: XOR<RegistroCreateWithoutPlantillaInput, RegistroUncheckedCreateWithoutPlantillaInput> | RegistroCreateWithoutPlantillaInput[] | RegistroUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutPlantillaInput | RegistroCreateOrConnectWithoutPlantillaInput[]
    createMany?: RegistroCreateManyPlantillaInputEnvelope
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RegistroUpdateManyWithoutPlantillaNestedInput = {
    create?: XOR<RegistroCreateWithoutPlantillaInput, RegistroUncheckedCreateWithoutPlantillaInput> | RegistroCreateWithoutPlantillaInput[] | RegistroUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutPlantillaInput | RegistroCreateOrConnectWithoutPlantillaInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutPlantillaInput | RegistroUpsertWithWhereUniqueWithoutPlantillaInput[]
    createMany?: RegistroCreateManyPlantillaInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutPlantillaInput | RegistroUpdateWithWhereUniqueWithoutPlantillaInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutPlantillaInput | RegistroUpdateManyWithWhereWithoutPlantillaInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type RegistroUncheckedUpdateManyWithoutPlantillaNestedInput = {
    create?: XOR<RegistroCreateWithoutPlantillaInput, RegistroUncheckedCreateWithoutPlantillaInput> | RegistroCreateWithoutPlantillaInput[] | RegistroUncheckedCreateWithoutPlantillaInput[]
    connectOrCreate?: RegistroCreateOrConnectWithoutPlantillaInput | RegistroCreateOrConnectWithoutPlantillaInput[]
    upsert?: RegistroUpsertWithWhereUniqueWithoutPlantillaInput | RegistroUpsertWithWhereUniqueWithoutPlantillaInput[]
    createMany?: RegistroCreateManyPlantillaInputEnvelope
    set?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    disconnect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    delete?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    connect?: RegistroWhereUniqueInput | RegistroWhereUniqueInput[]
    update?: RegistroUpdateWithWhereUniqueWithoutPlantillaInput | RegistroUpdateWithWhereUniqueWithoutPlantillaInput[]
    updateMany?: RegistroUpdateManyWithWhereWithoutPlantillaInput | RegistroUpdateManyWithWhereWithoutPlantillaInput[]
    deleteMany?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
  }

  export type PlantillaCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<PlantillaCreateWithoutRegistrosInput, PlantillaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PlantillaCreateOrConnectWithoutRegistrosInput
    connect?: PlantillaWhereUniqueInput
  }

  export type AuditEventCreateNestedManyWithoutRegistroInput = {
    create?: XOR<AuditEventCreateWithoutRegistroInput, AuditEventUncheckedCreateWithoutRegistroInput> | AuditEventCreateWithoutRegistroInput[] | AuditEventUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutRegistroInput | AuditEventCreateOrConnectWithoutRegistroInput[]
    createMany?: AuditEventCreateManyRegistroInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type AuditEventUncheckedCreateNestedManyWithoutRegistroInput = {
    create?: XOR<AuditEventCreateWithoutRegistroInput, AuditEventUncheckedCreateWithoutRegistroInput> | AuditEventCreateWithoutRegistroInput[] | AuditEventUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutRegistroInput | AuditEventCreateOrConnectWithoutRegistroInput[]
    createMany?: AuditEventCreateManyRegistroInputEnvelope
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
  }

  export type EnumPrioridadFieldUpdateOperationsInput = {
    set?: $Enums.Prioridad
  }

  export type EnumEstadoRegistroFieldUpdateOperationsInput = {
    set?: $Enums.EstadoRegistro
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlantillaUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<PlantillaCreateWithoutRegistrosInput, PlantillaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: PlantillaCreateOrConnectWithoutRegistrosInput
    upsert?: PlantillaUpsertWithoutRegistrosInput
    connect?: PlantillaWhereUniqueInput
    update?: XOR<XOR<PlantillaUpdateToOneWithWhereWithoutRegistrosInput, PlantillaUpdateWithoutRegistrosInput>, PlantillaUncheckedUpdateWithoutRegistrosInput>
  }

  export type AuditEventUpdateManyWithoutRegistroNestedInput = {
    create?: XOR<AuditEventCreateWithoutRegistroInput, AuditEventUncheckedCreateWithoutRegistroInput> | AuditEventCreateWithoutRegistroInput[] | AuditEventUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutRegistroInput | AuditEventCreateOrConnectWithoutRegistroInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutRegistroInput | AuditEventUpsertWithWhereUniqueWithoutRegistroInput[]
    createMany?: AuditEventCreateManyRegistroInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutRegistroInput | AuditEventUpdateWithWhereUniqueWithoutRegistroInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutRegistroInput | AuditEventUpdateManyWithWhereWithoutRegistroInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type AuditEventUncheckedUpdateManyWithoutRegistroNestedInput = {
    create?: XOR<AuditEventCreateWithoutRegistroInput, AuditEventUncheckedCreateWithoutRegistroInput> | AuditEventCreateWithoutRegistroInput[] | AuditEventUncheckedCreateWithoutRegistroInput[]
    connectOrCreate?: AuditEventCreateOrConnectWithoutRegistroInput | AuditEventCreateOrConnectWithoutRegistroInput[]
    upsert?: AuditEventUpsertWithWhereUniqueWithoutRegistroInput | AuditEventUpsertWithWhereUniqueWithoutRegistroInput[]
    createMany?: AuditEventCreateManyRegistroInputEnvelope
    set?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    disconnect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    delete?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    connect?: AuditEventWhereUniqueInput | AuditEventWhereUniqueInput[]
    update?: AuditEventUpdateWithWhereUniqueWithoutRegistroInput | AuditEventUpdateWithWhereUniqueWithoutRegistroInput[]
    updateMany?: AuditEventUpdateManyWithWhereWithoutRegistroInput | AuditEventUpdateManyWithWhereWithoutRegistroInput[]
    deleteMany?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
  }

  export type RegistroCreateNestedOneWithoutAuditoriaInput = {
    create?: XOR<RegistroCreateWithoutAuditoriaInput, RegistroUncheckedCreateWithoutAuditoriaInput>
    connectOrCreate?: RegistroCreateOrConnectWithoutAuditoriaInput
    connect?: RegistroWhereUniqueInput
  }

  export type RegistroUpdateOneRequiredWithoutAuditoriaNestedInput = {
    create?: XOR<RegistroCreateWithoutAuditoriaInput, RegistroUncheckedCreateWithoutAuditoriaInput>
    connectOrCreate?: RegistroCreateOrConnectWithoutAuditoriaInput
    upsert?: RegistroUpsertWithoutAuditoriaInput
    connect?: RegistroWhereUniqueInput
    update?: XOR<XOR<RegistroUpdateToOneWithWhereWithoutAuditoriaInput, RegistroUpdateWithoutAuditoriaInput>, RegistroUncheckedUpdateWithoutAuditoriaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPrioridadFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadFilter<$PrismaModel> | $Enums.Prioridad
  }

  export type NestedEnumEstadoRegistroFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRegistro | EnumEstadoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRegistroFilter<$PrismaModel> | $Enums.EstadoRegistro
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumPrioridadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Prioridad | EnumPrioridadFieldRefInput<$PrismaModel>
    in?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    notIn?: $Enums.Prioridad[] | ListEnumPrioridadFieldRefInput<$PrismaModel>
    not?: NestedEnumPrioridadWithAggregatesFilter<$PrismaModel> | $Enums.Prioridad
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrioridadFilter<$PrismaModel>
    _max?: NestedEnumPrioridadFilter<$PrismaModel>
  }

  export type NestedEnumEstadoRegistroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoRegistro | EnumEstadoRegistroFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoRegistro[] | ListEnumEstadoRegistroFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoRegistroWithAggregatesFilter<$PrismaModel> | $Enums.EstadoRegistro
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoRegistroFilter<$PrismaModel>
    _max?: NestedEnumEstadoRegistroFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegistroCreateWithoutPlantillaInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
    auditoria?: AuditEventCreateNestedManyWithoutRegistroInput
  }

  export type RegistroUncheckedCreateWithoutPlantillaInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
    auditoria?: AuditEventUncheckedCreateNestedManyWithoutRegistroInput
  }

  export type RegistroCreateOrConnectWithoutPlantillaInput = {
    where: RegistroWhereUniqueInput
    create: XOR<RegistroCreateWithoutPlantillaInput, RegistroUncheckedCreateWithoutPlantillaInput>
  }

  export type RegistroCreateManyPlantillaInputEnvelope = {
    data: RegistroCreateManyPlantillaInput | RegistroCreateManyPlantillaInput[]
    skipDuplicates?: boolean
  }

  export type RegistroUpsertWithWhereUniqueWithoutPlantillaInput = {
    where: RegistroWhereUniqueInput
    update: XOR<RegistroUpdateWithoutPlantillaInput, RegistroUncheckedUpdateWithoutPlantillaInput>
    create: XOR<RegistroCreateWithoutPlantillaInput, RegistroUncheckedCreateWithoutPlantillaInput>
  }

  export type RegistroUpdateWithWhereUniqueWithoutPlantillaInput = {
    where: RegistroWhereUniqueInput
    data: XOR<RegistroUpdateWithoutPlantillaInput, RegistroUncheckedUpdateWithoutPlantillaInput>
  }

  export type RegistroUpdateManyWithWhereWithoutPlantillaInput = {
    where: RegistroScalarWhereInput
    data: XOR<RegistroUpdateManyMutationInput, RegistroUncheckedUpdateManyWithoutPlantillaInput>
  }

  export type RegistroScalarWhereInput = {
    AND?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
    OR?: RegistroScalarWhereInput[]
    NOT?: RegistroScalarWhereInput | RegistroScalarWhereInput[]
    id?: StringFilter<"Registro"> | string
    nombreCliente?: StringFilter<"Registro"> | string
    contacto?: StringNullableFilter<"Registro"> | string | null
    plantillaId?: StringFilter<"Registro"> | string
    especificaciones?: JsonFilter<"Registro">
    prioridad?: EnumPrioridadFilter<"Registro"> | $Enums.Prioridad
    estado?: EnumEstadoRegistroFilter<"Registro"> | $Enums.EstadoRegistro
    usuarioId?: StringFilter<"Registro"> | string
    fechaRegistro?: DateTimeFilter<"Registro"> | Date | string
    fechaActualizacion?: DateTimeFilter<"Registro"> | Date | string
  }

  export type PlantillaCreateWithoutRegistrosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    esDefault?: boolean
    campos: JsonNullValueInput | InputJsonValue
  }

  export type PlantillaUncheckedCreateWithoutRegistrosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    esDefault?: boolean
    campos: JsonNullValueInput | InputJsonValue
  }

  export type PlantillaCreateOrConnectWithoutRegistrosInput = {
    where: PlantillaWhereUniqueInput
    create: XOR<PlantillaCreateWithoutRegistrosInput, PlantillaUncheckedCreateWithoutRegistrosInput>
  }

  export type AuditEventCreateWithoutRegistroInput = {
    id?: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn?: Date | string
  }

  export type AuditEventUncheckedCreateWithoutRegistroInput = {
    id?: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn?: Date | string
  }

  export type AuditEventCreateOrConnectWithoutRegistroInput = {
    where: AuditEventWhereUniqueInput
    create: XOR<AuditEventCreateWithoutRegistroInput, AuditEventUncheckedCreateWithoutRegistroInput>
  }

  export type AuditEventCreateManyRegistroInputEnvelope = {
    data: AuditEventCreateManyRegistroInput | AuditEventCreateManyRegistroInput[]
    skipDuplicates?: boolean
  }

  export type PlantillaUpsertWithoutRegistrosInput = {
    update: XOR<PlantillaUpdateWithoutRegistrosInput, PlantillaUncheckedUpdateWithoutRegistrosInput>
    create: XOR<PlantillaCreateWithoutRegistrosInput, PlantillaUncheckedCreateWithoutRegistrosInput>
    where?: PlantillaWhereInput
  }

  export type PlantillaUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: PlantillaWhereInput
    data: XOR<PlantillaUpdateWithoutRegistrosInput, PlantillaUncheckedUpdateWithoutRegistrosInput>
  }

  export type PlantillaUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    esDefault?: BoolFieldUpdateOperationsInput | boolean
    campos?: JsonNullValueInput | InputJsonValue
  }

  export type PlantillaUncheckedUpdateWithoutRegistrosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    esDefault?: BoolFieldUpdateOperationsInput | boolean
    campos?: JsonNullValueInput | InputJsonValue
  }

  export type AuditEventUpsertWithWhereUniqueWithoutRegistroInput = {
    where: AuditEventWhereUniqueInput
    update: XOR<AuditEventUpdateWithoutRegistroInput, AuditEventUncheckedUpdateWithoutRegistroInput>
    create: XOR<AuditEventCreateWithoutRegistroInput, AuditEventUncheckedCreateWithoutRegistroInput>
  }

  export type AuditEventUpdateWithWhereUniqueWithoutRegistroInput = {
    where: AuditEventWhereUniqueInput
    data: XOR<AuditEventUpdateWithoutRegistroInput, AuditEventUncheckedUpdateWithoutRegistroInput>
  }

  export type AuditEventUpdateManyWithWhereWithoutRegistroInput = {
    where: AuditEventScalarWhereInput
    data: XOR<AuditEventUpdateManyMutationInput, AuditEventUncheckedUpdateManyWithoutRegistroInput>
  }

  export type AuditEventScalarWhereInput = {
    AND?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    OR?: AuditEventScalarWhereInput[]
    NOT?: AuditEventScalarWhereInput | AuditEventScalarWhereInput[]
    id?: StringFilter<"AuditEvent"> | string
    registroId?: StringFilter<"AuditEvent"> | string
    usuarioId?: StringFilter<"AuditEvent"> | string
    accion?: StringFilter<"AuditEvent"> | string
    detalle?: StringFilter<"AuditEvent"> | string
    creadoEn?: DateTimeFilter<"AuditEvent"> | Date | string
  }

  export type RegistroCreateWithoutAuditoriaInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
    plantilla: PlantillaCreateNestedOneWithoutRegistrosInput
  }

  export type RegistroUncheckedCreateWithoutAuditoriaInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    plantillaId: string
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
  }

  export type RegistroCreateOrConnectWithoutAuditoriaInput = {
    where: RegistroWhereUniqueInput
    create: XOR<RegistroCreateWithoutAuditoriaInput, RegistroUncheckedCreateWithoutAuditoriaInput>
  }

  export type RegistroUpsertWithoutAuditoriaInput = {
    update: XOR<RegistroUpdateWithoutAuditoriaInput, RegistroUncheckedUpdateWithoutAuditoriaInput>
    create: XOR<RegistroCreateWithoutAuditoriaInput, RegistroUncheckedCreateWithoutAuditoriaInput>
    where?: RegistroWhereInput
  }

  export type RegistroUpdateToOneWithWhereWithoutAuditoriaInput = {
    where?: RegistroWhereInput
    data: XOR<RegistroUpdateWithoutAuditoriaInput, RegistroUncheckedUpdateWithoutAuditoriaInput>
  }

  export type RegistroUpdateWithoutAuditoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    plantilla?: PlantillaUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type RegistroUncheckedUpdateWithoutAuditoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    plantillaId?: StringFieldUpdateOperationsInput | string
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistroCreateManyPlantillaInput = {
    id?: string
    nombreCliente: string
    contacto?: string | null
    especificaciones: JsonNullValueInput | InputJsonValue
    prioridad?: $Enums.Prioridad
    estado?: $Enums.EstadoRegistro
    usuarioId: string
    fechaRegistro?: Date | string
    fechaActualizacion?: Date | string
  }

  export type RegistroUpdateWithoutPlantillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditoria?: AuditEventUpdateManyWithoutRegistroNestedInput
  }

  export type RegistroUncheckedUpdateWithoutPlantillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    auditoria?: AuditEventUncheckedUpdateManyWithoutRegistroNestedInput
  }

  export type RegistroUncheckedUpdateManyWithoutPlantillaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    especificaciones?: JsonNullValueInput | InputJsonValue
    prioridad?: EnumPrioridadFieldUpdateOperationsInput | $Enums.Prioridad
    estado?: EnumEstadoRegistroFieldUpdateOperationsInput | $Enums.EstadoRegistro
    usuarioId?: StringFieldUpdateOperationsInput | string
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventCreateManyRegistroInput = {
    id?: string
    usuarioId: string
    accion: string
    detalle: string
    creadoEn?: Date | string
  }

  export type AuditEventUpdateWithoutRegistroInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateWithoutRegistroInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditEventUncheckedUpdateManyWithoutRegistroInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    detalle?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}