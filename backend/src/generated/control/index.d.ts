
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
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model InboundChannelRoute
 * 
 */
export type InboundChannelRoute = $Result.DefaultSelection<Prisma.$InboundChannelRoutePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ModoHostingDB: {
  AUTOALOJADO: 'AUTOALOJADO',
  GOOGLE_CLOUD: 'GOOGLE_CLOUD'
};

export type ModoHostingDB = (typeof ModoHostingDB)[keyof typeof ModoHostingDB]


export const RolUsuario: {
  ADMIN_EMPRESA: 'ADMIN_EMPRESA',
  EMPLEADO: 'EMPLEADO'
};

export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario]

}

export type ModoHostingDB = $Enums.ModoHostingDB

export const ModoHostingDB: typeof $Enums.ModoHostingDB

export type RolUsuario = $Enums.RolUsuario

export const RolUsuario: typeof $Enums.RolUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
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
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
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
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inboundChannelRoute`: Exposes CRUD operations for the **InboundChannelRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InboundChannelRoutes
    * const inboundChannelRoutes = await prisma.inboundChannelRoute.findMany()
    * ```
    */
  get inboundChannelRoute(): Prisma.InboundChannelRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;
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
    Empresa: 'Empresa',
    InboundChannelRoute: 'InboundChannelRoute',
    Usuario: 'Usuario'
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
      modelProps: "empresa" | "inboundChannelRoute" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      InboundChannelRoute: {
        payload: Prisma.$InboundChannelRoutePayload<ExtArgs>
        fields: Prisma.InboundChannelRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboundChannelRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboundChannelRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>
          }
          findFirst: {
            args: Prisma.InboundChannelRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboundChannelRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>
          }
          findMany: {
            args: Prisma.InboundChannelRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>[]
          }
          create: {
            args: Prisma.InboundChannelRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>
          }
          createMany: {
            args: Prisma.InboundChannelRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboundChannelRouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>[]
          }
          delete: {
            args: Prisma.InboundChannelRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>
          }
          update: {
            args: Prisma.InboundChannelRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>
          }
          deleteMany: {
            args: Prisma.InboundChannelRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboundChannelRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboundChannelRouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>[]
          }
          upsert: {
            args: Prisma.InboundChannelRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundChannelRoutePayload>
          }
          aggregate: {
            args: Prisma.InboundChannelRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInboundChannelRoute>
          }
          groupBy: {
            args: Prisma.InboundChannelRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboundChannelRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboundChannelRouteCountArgs<ExtArgs>
            result: $Utils.Optional<InboundChannelRouteCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
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
    empresa?: EmpresaOmit
    inboundChannelRoute?: InboundChannelRouteOmit
    usuario?: UsuarioOmit
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    usuarios: number
    inboundRoutes: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | EmpresaCountOutputTypeCountUsuariosArgs
    inboundRoutes?: boolean | EmpresaCountOutputTypeCountInboundRoutesArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountInboundRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundChannelRouteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    logoUrl: string | null
    modoHostingDB: $Enums.ModoHostingDB | null
    conexionCifrada: string | null
    schemaTenant: string | null
    creadoEn: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    logoUrl: string | null
    modoHostingDB: $Enums.ModoHostingDB | null
    conexionCifrada: string | null
    schemaTenant: string | null
    creadoEn: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nombre: number
    logoUrl: number
    modoHostingDB: number
    conexionCifrada: number
    schemaTenant: number
    creadoEn: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
    nombre?: true
    logoUrl?: true
    modoHostingDB?: true
    conexionCifrada?: true
    schemaTenant?: true
    creadoEn?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nombre?: true
    logoUrl?: true
    modoHostingDB?: true
    conexionCifrada?: true
    schemaTenant?: true
    creadoEn?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nombre?: true
    logoUrl?: true
    modoHostingDB?: true
    conexionCifrada?: true
    schemaTenant?: true
    creadoEn?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    nombre: string
    logoUrl: string | null
    modoHostingDB: $Enums.ModoHostingDB
    conexionCifrada: string | null
    schemaTenant: string | null
    creadoEn: Date
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    logoUrl?: boolean
    modoHostingDB?: boolean
    conexionCifrada?: boolean
    schemaTenant?: boolean
    creadoEn?: boolean
    usuarios?: boolean | Empresa$usuariosArgs<ExtArgs>
    inboundRoutes?: boolean | Empresa$inboundRoutesArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    logoUrl?: boolean
    modoHostingDB?: boolean
    conexionCifrada?: boolean
    schemaTenant?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    logoUrl?: boolean
    modoHostingDB?: boolean
    conexionCifrada?: boolean
    schemaTenant?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nombre?: boolean
    logoUrl?: boolean
    modoHostingDB?: boolean
    conexionCifrada?: boolean
    schemaTenant?: boolean
    creadoEn?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "logoUrl" | "modoHostingDB" | "conexionCifrada" | "schemaTenant" | "creadoEn", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Empresa$usuariosArgs<ExtArgs>
    inboundRoutes?: boolean | Empresa$inboundRoutesArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      inboundRoutes: Prisma.$InboundChannelRoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      logoUrl: string | null
      modoHostingDB: $Enums.ModoHostingDB
      conexionCifrada: string | null
      schemaTenant: string | null
      creadoEn: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Empresa$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inboundRoutes<T extends Empresa$inboundRoutesArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$inboundRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly nombre: FieldRef<"Empresa", 'String'>
    readonly logoUrl: FieldRef<"Empresa", 'String'>
    readonly modoHostingDB: FieldRef<"Empresa", 'ModoHostingDB'>
    readonly conexionCifrada: FieldRef<"Empresa", 'String'>
    readonly schemaTenant: FieldRef<"Empresa", 'String'>
    readonly creadoEn: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.usuarios
   */
  export type Empresa$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Empresa.inboundRoutes
   */
  export type Empresa$inboundRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    where?: InboundChannelRouteWhereInput
    orderBy?: InboundChannelRouteOrderByWithRelationInput | InboundChannelRouteOrderByWithRelationInput[]
    cursor?: InboundChannelRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InboundChannelRouteScalarFieldEnum | InboundChannelRouteScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model InboundChannelRoute
   */

  export type AggregateInboundChannelRoute = {
    _count: InboundChannelRouteCountAggregateOutputType | null
    _min: InboundChannelRouteMinAggregateOutputType | null
    _max: InboundChannelRouteMaxAggregateOutputType | null
  }

  export type InboundChannelRouteMinAggregateOutputType = {
    id: string | null
    empresaId: string | null
    channelId: string | null
    tokenHash: string | null
    isActive: boolean | null
    creadoEn: Date | null
  }

  export type InboundChannelRouteMaxAggregateOutputType = {
    id: string | null
    empresaId: string | null
    channelId: string | null
    tokenHash: string | null
    isActive: boolean | null
    creadoEn: Date | null
  }

  export type InboundChannelRouteCountAggregateOutputType = {
    id: number
    empresaId: number
    channelId: number
    tokenHash: number
    isActive: number
    creadoEn: number
    _all: number
  }


  export type InboundChannelRouteMinAggregateInputType = {
    id?: true
    empresaId?: true
    channelId?: true
    tokenHash?: true
    isActive?: true
    creadoEn?: true
  }

  export type InboundChannelRouteMaxAggregateInputType = {
    id?: true
    empresaId?: true
    channelId?: true
    tokenHash?: true
    isActive?: true
    creadoEn?: true
  }

  export type InboundChannelRouteCountAggregateInputType = {
    id?: true
    empresaId?: true
    channelId?: true
    tokenHash?: true
    isActive?: true
    creadoEn?: true
    _all?: true
  }

  export type InboundChannelRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundChannelRoute to aggregate.
     */
    where?: InboundChannelRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundChannelRoutes to fetch.
     */
    orderBy?: InboundChannelRouteOrderByWithRelationInput | InboundChannelRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboundChannelRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundChannelRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundChannelRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InboundChannelRoutes
    **/
    _count?: true | InboundChannelRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboundChannelRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboundChannelRouteMaxAggregateInputType
  }

  export type GetInboundChannelRouteAggregateType<T extends InboundChannelRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateInboundChannelRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInboundChannelRoute[P]>
      : GetScalarType<T[P], AggregateInboundChannelRoute[P]>
  }




  export type InboundChannelRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundChannelRouteWhereInput
    orderBy?: InboundChannelRouteOrderByWithAggregationInput | InboundChannelRouteOrderByWithAggregationInput[]
    by: InboundChannelRouteScalarFieldEnum[] | InboundChannelRouteScalarFieldEnum
    having?: InboundChannelRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboundChannelRouteCountAggregateInputType | true
    _min?: InboundChannelRouteMinAggregateInputType
    _max?: InboundChannelRouteMaxAggregateInputType
  }

  export type InboundChannelRouteGroupByOutputType = {
    id: string
    empresaId: string
    channelId: string
    tokenHash: string
    isActive: boolean
    creadoEn: Date
    _count: InboundChannelRouteCountAggregateOutputType | null
    _min: InboundChannelRouteMinAggregateOutputType | null
    _max: InboundChannelRouteMaxAggregateOutputType | null
  }

  type GetInboundChannelRouteGroupByPayload<T extends InboundChannelRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboundChannelRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboundChannelRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboundChannelRouteGroupByOutputType[P]>
            : GetScalarType<T[P], InboundChannelRouteGroupByOutputType[P]>
        }
      >
    >


  export type InboundChannelRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    channelId?: boolean
    tokenHash?: boolean
    isActive?: boolean
    creadoEn?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundChannelRoute"]>

  export type InboundChannelRouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    channelId?: boolean
    tokenHash?: boolean
    isActive?: boolean
    creadoEn?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundChannelRoute"]>

  export type InboundChannelRouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    channelId?: boolean
    tokenHash?: boolean
    isActive?: boolean
    creadoEn?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundChannelRoute"]>

  export type InboundChannelRouteSelectScalar = {
    id?: boolean
    empresaId?: boolean
    channelId?: boolean
    tokenHash?: boolean
    isActive?: boolean
    creadoEn?: boolean
  }

  export type InboundChannelRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "channelId" | "tokenHash" | "isActive" | "creadoEn", ExtArgs["result"]["inboundChannelRoute"]>
  export type InboundChannelRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type InboundChannelRouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type InboundChannelRouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $InboundChannelRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InboundChannelRoute"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empresaId: string
      channelId: string
      tokenHash: string
      isActive: boolean
      creadoEn: Date
    }, ExtArgs["result"]["inboundChannelRoute"]>
    composites: {}
  }

  type InboundChannelRouteGetPayload<S extends boolean | null | undefined | InboundChannelRouteDefaultArgs> = $Result.GetResult<Prisma.$InboundChannelRoutePayload, S>

  type InboundChannelRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboundChannelRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboundChannelRouteCountAggregateInputType | true
    }

  export interface InboundChannelRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InboundChannelRoute'], meta: { name: 'InboundChannelRoute' } }
    /**
     * Find zero or one InboundChannelRoute that matches the filter.
     * @param {InboundChannelRouteFindUniqueArgs} args - Arguments to find a InboundChannelRoute
     * @example
     * // Get one InboundChannelRoute
     * const inboundChannelRoute = await prisma.inboundChannelRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboundChannelRouteFindUniqueArgs>(args: SelectSubset<T, InboundChannelRouteFindUniqueArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InboundChannelRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboundChannelRouteFindUniqueOrThrowArgs} args - Arguments to find a InboundChannelRoute
     * @example
     * // Get one InboundChannelRoute
     * const inboundChannelRoute = await prisma.inboundChannelRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboundChannelRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, InboundChannelRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundChannelRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteFindFirstArgs} args - Arguments to find a InboundChannelRoute
     * @example
     * // Get one InboundChannelRoute
     * const inboundChannelRoute = await prisma.inboundChannelRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboundChannelRouteFindFirstArgs>(args?: SelectSubset<T, InboundChannelRouteFindFirstArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundChannelRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteFindFirstOrThrowArgs} args - Arguments to find a InboundChannelRoute
     * @example
     * // Get one InboundChannelRoute
     * const inboundChannelRoute = await prisma.inboundChannelRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboundChannelRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, InboundChannelRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InboundChannelRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InboundChannelRoutes
     * const inboundChannelRoutes = await prisma.inboundChannelRoute.findMany()
     * 
     * // Get first 10 InboundChannelRoutes
     * const inboundChannelRoutes = await prisma.inboundChannelRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboundChannelRouteWithIdOnly = await prisma.inboundChannelRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboundChannelRouteFindManyArgs>(args?: SelectSubset<T, InboundChannelRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InboundChannelRoute.
     * @param {InboundChannelRouteCreateArgs} args - Arguments to create a InboundChannelRoute.
     * @example
     * // Create one InboundChannelRoute
     * const InboundChannelRoute = await prisma.inboundChannelRoute.create({
     *   data: {
     *     // ... data to create a InboundChannelRoute
     *   }
     * })
     * 
     */
    create<T extends InboundChannelRouteCreateArgs>(args: SelectSubset<T, InboundChannelRouteCreateArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InboundChannelRoutes.
     * @param {InboundChannelRouteCreateManyArgs} args - Arguments to create many InboundChannelRoutes.
     * @example
     * // Create many InboundChannelRoutes
     * const inboundChannelRoute = await prisma.inboundChannelRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboundChannelRouteCreateManyArgs>(args?: SelectSubset<T, InboundChannelRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InboundChannelRoutes and returns the data saved in the database.
     * @param {InboundChannelRouteCreateManyAndReturnArgs} args - Arguments to create many InboundChannelRoutes.
     * @example
     * // Create many InboundChannelRoutes
     * const inboundChannelRoute = await prisma.inboundChannelRoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InboundChannelRoutes and only return the `id`
     * const inboundChannelRouteWithIdOnly = await prisma.inboundChannelRoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboundChannelRouteCreateManyAndReturnArgs>(args?: SelectSubset<T, InboundChannelRouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InboundChannelRoute.
     * @param {InboundChannelRouteDeleteArgs} args - Arguments to delete one InboundChannelRoute.
     * @example
     * // Delete one InboundChannelRoute
     * const InboundChannelRoute = await prisma.inboundChannelRoute.delete({
     *   where: {
     *     // ... filter to delete one InboundChannelRoute
     *   }
     * })
     * 
     */
    delete<T extends InboundChannelRouteDeleteArgs>(args: SelectSubset<T, InboundChannelRouteDeleteArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InboundChannelRoute.
     * @param {InboundChannelRouteUpdateArgs} args - Arguments to update one InboundChannelRoute.
     * @example
     * // Update one InboundChannelRoute
     * const inboundChannelRoute = await prisma.inboundChannelRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboundChannelRouteUpdateArgs>(args: SelectSubset<T, InboundChannelRouteUpdateArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InboundChannelRoutes.
     * @param {InboundChannelRouteDeleteManyArgs} args - Arguments to filter InboundChannelRoutes to delete.
     * @example
     * // Delete a few InboundChannelRoutes
     * const { count } = await prisma.inboundChannelRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboundChannelRouteDeleteManyArgs>(args?: SelectSubset<T, InboundChannelRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundChannelRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InboundChannelRoutes
     * const inboundChannelRoute = await prisma.inboundChannelRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboundChannelRouteUpdateManyArgs>(args: SelectSubset<T, InboundChannelRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundChannelRoutes and returns the data updated in the database.
     * @param {InboundChannelRouteUpdateManyAndReturnArgs} args - Arguments to update many InboundChannelRoutes.
     * @example
     * // Update many InboundChannelRoutes
     * const inboundChannelRoute = await prisma.inboundChannelRoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InboundChannelRoutes and only return the `id`
     * const inboundChannelRouteWithIdOnly = await prisma.inboundChannelRoute.updateManyAndReturn({
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
    updateManyAndReturn<T extends InboundChannelRouteUpdateManyAndReturnArgs>(args: SelectSubset<T, InboundChannelRouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InboundChannelRoute.
     * @param {InboundChannelRouteUpsertArgs} args - Arguments to update or create a InboundChannelRoute.
     * @example
     * // Update or create a InboundChannelRoute
     * const inboundChannelRoute = await prisma.inboundChannelRoute.upsert({
     *   create: {
     *     // ... data to create a InboundChannelRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InboundChannelRoute we want to update
     *   }
     * })
     */
    upsert<T extends InboundChannelRouteUpsertArgs>(args: SelectSubset<T, InboundChannelRouteUpsertArgs<ExtArgs>>): Prisma__InboundChannelRouteClient<$Result.GetResult<Prisma.$InboundChannelRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InboundChannelRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteCountArgs} args - Arguments to filter InboundChannelRoutes to count.
     * @example
     * // Count the number of InboundChannelRoutes
     * const count = await prisma.inboundChannelRoute.count({
     *   where: {
     *     // ... the filter for the InboundChannelRoutes we want to count
     *   }
     * })
    **/
    count<T extends InboundChannelRouteCountArgs>(
      args?: Subset<T, InboundChannelRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboundChannelRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InboundChannelRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InboundChannelRouteAggregateArgs>(args: Subset<T, InboundChannelRouteAggregateArgs>): Prisma.PrismaPromise<GetInboundChannelRouteAggregateType<T>>

    /**
     * Group by InboundChannelRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundChannelRouteGroupByArgs} args - Group by arguments.
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
      T extends InboundChannelRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboundChannelRouteGroupByArgs['orderBy'] }
        : { orderBy?: InboundChannelRouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InboundChannelRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboundChannelRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InboundChannelRoute model
   */
  readonly fields: InboundChannelRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InboundChannelRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboundChannelRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InboundChannelRoute model
   */
  interface InboundChannelRouteFieldRefs {
    readonly id: FieldRef<"InboundChannelRoute", 'String'>
    readonly empresaId: FieldRef<"InboundChannelRoute", 'String'>
    readonly channelId: FieldRef<"InboundChannelRoute", 'String'>
    readonly tokenHash: FieldRef<"InboundChannelRoute", 'String'>
    readonly isActive: FieldRef<"InboundChannelRoute", 'Boolean'>
    readonly creadoEn: FieldRef<"InboundChannelRoute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InboundChannelRoute findUnique
   */
  export type InboundChannelRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * Filter, which InboundChannelRoute to fetch.
     */
    where: InboundChannelRouteWhereUniqueInput
  }

  /**
   * InboundChannelRoute findUniqueOrThrow
   */
  export type InboundChannelRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * Filter, which InboundChannelRoute to fetch.
     */
    where: InboundChannelRouteWhereUniqueInput
  }

  /**
   * InboundChannelRoute findFirst
   */
  export type InboundChannelRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * Filter, which InboundChannelRoute to fetch.
     */
    where?: InboundChannelRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundChannelRoutes to fetch.
     */
    orderBy?: InboundChannelRouteOrderByWithRelationInput | InboundChannelRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundChannelRoutes.
     */
    cursor?: InboundChannelRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundChannelRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundChannelRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundChannelRoutes.
     */
    distinct?: InboundChannelRouteScalarFieldEnum | InboundChannelRouteScalarFieldEnum[]
  }

  /**
   * InboundChannelRoute findFirstOrThrow
   */
  export type InboundChannelRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * Filter, which InboundChannelRoute to fetch.
     */
    where?: InboundChannelRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundChannelRoutes to fetch.
     */
    orderBy?: InboundChannelRouteOrderByWithRelationInput | InboundChannelRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundChannelRoutes.
     */
    cursor?: InboundChannelRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundChannelRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundChannelRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundChannelRoutes.
     */
    distinct?: InboundChannelRouteScalarFieldEnum | InboundChannelRouteScalarFieldEnum[]
  }

  /**
   * InboundChannelRoute findMany
   */
  export type InboundChannelRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * Filter, which InboundChannelRoutes to fetch.
     */
    where?: InboundChannelRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundChannelRoutes to fetch.
     */
    orderBy?: InboundChannelRouteOrderByWithRelationInput | InboundChannelRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InboundChannelRoutes.
     */
    cursor?: InboundChannelRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundChannelRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundChannelRoutes.
     */
    skip?: number
    distinct?: InboundChannelRouteScalarFieldEnum | InboundChannelRouteScalarFieldEnum[]
  }

  /**
   * InboundChannelRoute create
   */
  export type InboundChannelRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a InboundChannelRoute.
     */
    data: XOR<InboundChannelRouteCreateInput, InboundChannelRouteUncheckedCreateInput>
  }

  /**
   * InboundChannelRoute createMany
   */
  export type InboundChannelRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InboundChannelRoutes.
     */
    data: InboundChannelRouteCreateManyInput | InboundChannelRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboundChannelRoute createManyAndReturn
   */
  export type InboundChannelRouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * The data used to create many InboundChannelRoutes.
     */
    data: InboundChannelRouteCreateManyInput | InboundChannelRouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InboundChannelRoute update
   */
  export type InboundChannelRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a InboundChannelRoute.
     */
    data: XOR<InboundChannelRouteUpdateInput, InboundChannelRouteUncheckedUpdateInput>
    /**
     * Choose, which InboundChannelRoute to update.
     */
    where: InboundChannelRouteWhereUniqueInput
  }

  /**
   * InboundChannelRoute updateMany
   */
  export type InboundChannelRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InboundChannelRoutes.
     */
    data: XOR<InboundChannelRouteUpdateManyMutationInput, InboundChannelRouteUncheckedUpdateManyInput>
    /**
     * Filter which InboundChannelRoutes to update
     */
    where?: InboundChannelRouteWhereInput
    /**
     * Limit how many InboundChannelRoutes to update.
     */
    limit?: number
  }

  /**
   * InboundChannelRoute updateManyAndReturn
   */
  export type InboundChannelRouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * The data used to update InboundChannelRoutes.
     */
    data: XOR<InboundChannelRouteUpdateManyMutationInput, InboundChannelRouteUncheckedUpdateManyInput>
    /**
     * Filter which InboundChannelRoutes to update
     */
    where?: InboundChannelRouteWhereInput
    /**
     * Limit how many InboundChannelRoutes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InboundChannelRoute upsert
   */
  export type InboundChannelRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the InboundChannelRoute to update in case it exists.
     */
    where: InboundChannelRouteWhereUniqueInput
    /**
     * In case the InboundChannelRoute found by the `where` argument doesn't exist, create a new InboundChannelRoute with this data.
     */
    create: XOR<InboundChannelRouteCreateInput, InboundChannelRouteUncheckedCreateInput>
    /**
     * In case the InboundChannelRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboundChannelRouteUpdateInput, InboundChannelRouteUncheckedUpdateInput>
  }

  /**
   * InboundChannelRoute delete
   */
  export type InboundChannelRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
    /**
     * Filter which InboundChannelRoute to delete.
     */
    where: InboundChannelRouteWhereUniqueInput
  }

  /**
   * InboundChannelRoute deleteMany
   */
  export type InboundChannelRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundChannelRoutes to delete
     */
    where?: InboundChannelRouteWhereInput
    /**
     * Limit how many InboundChannelRoutes to delete.
     */
    limit?: number
  }

  /**
   * InboundChannelRoute without action
   */
  export type InboundChannelRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundChannelRoute
     */
    select?: InboundChannelRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundChannelRoute
     */
    omit?: InboundChannelRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundChannelRouteInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    tokenVersion: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    empresaId: string | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    rol: $Enums.RolUsuario | null
    activo: boolean | null
    tokenVersion: number | null
    creadoEn: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    empresaId: string | null
    nombre: string | null
    email: string | null
    passwordHash: string | null
    rol: $Enums.RolUsuario | null
    activo: boolean | null
    tokenVersion: number | null
    creadoEn: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    empresaId: number
    nombre: number
    email: number
    passwordHash: number
    rol: number
    activo: number
    tokenVersion: number
    creadoEn: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    tokenVersion?: true
  }

  export type UsuarioSumAggregateInputType = {
    tokenVersion?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    empresaId?: true
    nombre?: true
    email?: true
    passwordHash?: true
    rol?: true
    activo?: true
    tokenVersion?: true
    creadoEn?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    empresaId?: true
    nombre?: true
    email?: true
    passwordHash?: true
    rol?: true
    activo?: true
    tokenVersion?: true
    creadoEn?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    empresaId?: true
    nombre?: true
    email?: true
    passwordHash?: true
    rol?: true
    activo?: true
    tokenVersion?: true
    creadoEn?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    empresaId: string
    nombre: string
    email: string
    passwordHash: string
    rol: $Enums.RolUsuario
    activo: boolean
    tokenVersion: number
    creadoEn: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    activo?: boolean
    tokenVersion?: boolean
    creadoEn?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    activo?: boolean
    tokenVersion?: boolean
    creadoEn?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empresaId?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    activo?: boolean
    tokenVersion?: boolean
    creadoEn?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    empresaId?: boolean
    nombre?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    activo?: boolean
    tokenVersion?: boolean
    creadoEn?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empresaId" | "nombre" | "email" | "passwordHash" | "rol" | "activo" | "tokenVersion" | "creadoEn", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empresaId: string
      nombre: string
      email: string
      passwordHash: string
      rol: $Enums.RolUsuario
      activo: boolean
      tokenVersion: number
      creadoEn: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly empresaId: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'RolUsuario'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly tokenVersion: FieldRef<"Usuario", 'Int'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    logoUrl: 'logoUrl',
    modoHostingDB: 'modoHostingDB',
    conexionCifrada: 'conexionCifrada',
    schemaTenant: 'schemaTenant',
    creadoEn: 'creadoEn'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const InboundChannelRouteScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    channelId: 'channelId',
    tokenHash: 'tokenHash',
    isActive: 'isActive',
    creadoEn: 'creadoEn'
  };

  export type InboundChannelRouteScalarFieldEnum = (typeof InboundChannelRouteScalarFieldEnum)[keyof typeof InboundChannelRouteScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    empresaId: 'empresaId',
    nombre: 'nombre',
    email: 'email',
    passwordHash: 'passwordHash',
    rol: 'rol',
    activo: 'activo',
    tokenVersion: 'tokenVersion',
    creadoEn: 'creadoEn'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'ModoHostingDB'
   */
  export type EnumModoHostingDBFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModoHostingDB'>
    


  /**
   * Reference to a field of type 'ModoHostingDB[]'
   */
  export type ListEnumModoHostingDBFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModoHostingDB[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RolUsuario'
   */
  export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>
    


  /**
   * Reference to a field of type 'RolUsuario[]'
   */
  export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    nombre?: StringFilter<"Empresa"> | string
    logoUrl?: StringNullableFilter<"Empresa"> | string | null
    modoHostingDB?: EnumModoHostingDBFilter<"Empresa"> | $Enums.ModoHostingDB
    conexionCifrada?: StringNullableFilter<"Empresa"> | string | null
    schemaTenant?: StringNullableFilter<"Empresa"> | string | null
    creadoEn?: DateTimeFilter<"Empresa"> | Date | string
    usuarios?: UsuarioListRelationFilter
    inboundRoutes?: InboundChannelRouteListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    modoHostingDB?: SortOrder
    conexionCifrada?: SortOrderInput | SortOrder
    schemaTenant?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    inboundRoutes?: InboundChannelRouteOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schemaTenant?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nombre?: StringFilter<"Empresa"> | string
    logoUrl?: StringNullableFilter<"Empresa"> | string | null
    modoHostingDB?: EnumModoHostingDBFilter<"Empresa"> | $Enums.ModoHostingDB
    conexionCifrada?: StringNullableFilter<"Empresa"> | string | null
    creadoEn?: DateTimeFilter<"Empresa"> | Date | string
    usuarios?: UsuarioListRelationFilter
    inboundRoutes?: InboundChannelRouteListRelationFilter
  }, "id" | "schemaTenant">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    modoHostingDB?: SortOrder
    conexionCifrada?: SortOrderInput | SortOrder
    schemaTenant?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    nombre?: StringWithAggregatesFilter<"Empresa"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    modoHostingDB?: EnumModoHostingDBWithAggregatesFilter<"Empresa"> | $Enums.ModoHostingDB
    conexionCifrada?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    schemaTenant?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    creadoEn?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type InboundChannelRouteWhereInput = {
    AND?: InboundChannelRouteWhereInput | InboundChannelRouteWhereInput[]
    OR?: InboundChannelRouteWhereInput[]
    NOT?: InboundChannelRouteWhereInput | InboundChannelRouteWhereInput[]
    id?: UuidFilter<"InboundChannelRoute"> | string
    empresaId?: StringFilter<"InboundChannelRoute"> | string
    channelId?: UuidFilter<"InboundChannelRoute"> | string
    tokenHash?: StringFilter<"InboundChannelRoute"> | string
    isActive?: BoolFilter<"InboundChannelRoute"> | boolean
    creadoEn?: DateTimeFilter<"InboundChannelRoute"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type InboundChannelRouteOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    channelId?: SortOrder
    tokenHash?: SortOrder
    isActive?: SortOrder
    creadoEn?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type InboundChannelRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    empresaId_channelId?: InboundChannelRouteEmpresaIdChannelIdCompoundUniqueInput
    AND?: InboundChannelRouteWhereInput | InboundChannelRouteWhereInput[]
    OR?: InboundChannelRouteWhereInput[]
    NOT?: InboundChannelRouteWhereInput | InboundChannelRouteWhereInput[]
    empresaId?: StringFilter<"InboundChannelRoute"> | string
    channelId?: UuidFilter<"InboundChannelRoute"> | string
    isActive?: BoolFilter<"InboundChannelRoute"> | boolean
    creadoEn?: DateTimeFilter<"InboundChannelRoute"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id" | "tokenHash" | "empresaId_channelId">

  export type InboundChannelRouteOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    channelId?: SortOrder
    tokenHash?: SortOrder
    isActive?: SortOrder
    creadoEn?: SortOrder
    _count?: InboundChannelRouteCountOrderByAggregateInput
    _max?: InboundChannelRouteMaxOrderByAggregateInput
    _min?: InboundChannelRouteMinOrderByAggregateInput
  }

  export type InboundChannelRouteScalarWhereWithAggregatesInput = {
    AND?: InboundChannelRouteScalarWhereWithAggregatesInput | InboundChannelRouteScalarWhereWithAggregatesInput[]
    OR?: InboundChannelRouteScalarWhereWithAggregatesInput[]
    NOT?: InboundChannelRouteScalarWhereWithAggregatesInput | InboundChannelRouteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InboundChannelRoute"> | string
    empresaId?: StringWithAggregatesFilter<"InboundChannelRoute"> | string
    channelId?: UuidWithAggregatesFilter<"InboundChannelRoute"> | string
    tokenHash?: StringWithAggregatesFilter<"InboundChannelRoute"> | string
    isActive?: BoolWithAggregatesFilter<"InboundChannelRoute"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"InboundChannelRoute"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    empresaId?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    activo?: BoolFilter<"Usuario"> | boolean
    tokenVersion?: IntFilter<"Usuario"> | number
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    tokenVersion?: SortOrder
    creadoEn?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    empresaId?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    activo?: BoolFilter<"Usuario"> | boolean
    tokenVersion?: IntFilter<"Usuario"> | number
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    tokenVersion?: SortOrder
    creadoEn?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    empresaId?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    tokenVersion?: IntWithAggregatesFilter<"Usuario"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EmpresaCreateInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutEmpresaInput
    inboundRoutes?: InboundChannelRouteCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEmpresaInput
    inboundRoutes?: InboundChannelRouteUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutEmpresaNestedInput
    inboundRoutes?: InboundChannelRouteUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutEmpresaNestedInput
    inboundRoutes?: InboundChannelRouteUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundChannelRouteCreateInput = {
    id?: string
    channelId: string
    tokenHash: string
    isActive?: boolean
    creadoEn?: Date | string
    empresa: EmpresaCreateNestedOneWithoutInboundRoutesInput
  }

  export type InboundChannelRouteUncheckedCreateInput = {
    id?: string
    empresaId: string
    channelId: string
    tokenHash: string
    isActive?: boolean
    creadoEn?: Date | string
  }

  export type InboundChannelRouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutInboundRoutesNestedInput
  }

  export type InboundChannelRouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundChannelRouteCreateManyInput = {
    id?: string
    empresaId: string
    channelId: string
    tokenHash: string
    isActive?: boolean
    creadoEn?: Date | string
  }

  export type InboundChannelRouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundChannelRouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nombre: string
    email: string
    passwordHash: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    tokenVersion?: number
    creadoEn?: Date | string
    empresa: EmpresaCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    empresaId: string
    nombre: string
    email: string
    passwordHash: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    tokenVersion?: number
    creadoEn?: Date | string
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: string
    empresaId: string
    nombre: string
    email: string
    passwordHash: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    tokenVersion?: number
    creadoEn?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
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

  export type EnumModoHostingDBFilter<$PrismaModel = never> = {
    equals?: $Enums.ModoHostingDB | EnumModoHostingDBFieldRefInput<$PrismaModel>
    in?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    not?: NestedEnumModoHostingDBFilter<$PrismaModel> | $Enums.ModoHostingDB
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type InboundChannelRouteListRelationFilter = {
    every?: InboundChannelRouteWhereInput
    some?: InboundChannelRouteWhereInput
    none?: InboundChannelRouteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InboundChannelRouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    logoUrl?: SortOrder
    modoHostingDB?: SortOrder
    conexionCifrada?: SortOrder
    schemaTenant?: SortOrder
    creadoEn?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    logoUrl?: SortOrder
    modoHostingDB?: SortOrder
    conexionCifrada?: SortOrder
    schemaTenant?: SortOrder
    creadoEn?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    logoUrl?: SortOrder
    modoHostingDB?: SortOrder
    conexionCifrada?: SortOrder
    schemaTenant?: SortOrder
    creadoEn?: SortOrder
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

  export type EnumModoHostingDBWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModoHostingDB | EnumModoHostingDBFieldRefInput<$PrismaModel>
    in?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    not?: NestedEnumModoHostingDBWithAggregatesFilter<$PrismaModel> | $Enums.ModoHostingDB
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModoHostingDBFilter<$PrismaModel>
    _max?: NestedEnumModoHostingDBFilter<$PrismaModel>
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

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type InboundChannelRouteEmpresaIdChannelIdCompoundUniqueInput = {
    empresaId: string
    channelId: string
  }

  export type InboundChannelRouteCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    channelId?: SortOrder
    tokenHash?: SortOrder
    isActive?: SortOrder
    creadoEn?: SortOrder
  }

  export type InboundChannelRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    channelId?: SortOrder
    tokenHash?: SortOrder
    isActive?: SortOrder
    creadoEn?: SortOrder
  }

  export type InboundChannelRouteMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    channelId?: SortOrder
    tokenHash?: SortOrder
    isActive?: SortOrder
    creadoEn?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    tokenVersion?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    tokenVersion?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    empresaId?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    activo?: SortOrder
    tokenVersion?: SortOrder
    creadoEn?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    tokenVersion?: SortOrder
  }

  export type EnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput> | UsuarioCreateWithoutEmpresaInput[] | UsuarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput | UsuarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: UsuarioCreateManyEmpresaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type InboundChannelRouteCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<InboundChannelRouteCreateWithoutEmpresaInput, InboundChannelRouteUncheckedCreateWithoutEmpresaInput> | InboundChannelRouteCreateWithoutEmpresaInput[] | InboundChannelRouteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InboundChannelRouteCreateOrConnectWithoutEmpresaInput | InboundChannelRouteCreateOrConnectWithoutEmpresaInput[]
    createMany?: InboundChannelRouteCreateManyEmpresaInputEnvelope
    connect?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput> | UsuarioCreateWithoutEmpresaInput[] | UsuarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput | UsuarioCreateOrConnectWithoutEmpresaInput[]
    createMany?: UsuarioCreateManyEmpresaInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type InboundChannelRouteUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<InboundChannelRouteCreateWithoutEmpresaInput, InboundChannelRouteUncheckedCreateWithoutEmpresaInput> | InboundChannelRouteCreateWithoutEmpresaInput[] | InboundChannelRouteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InboundChannelRouteCreateOrConnectWithoutEmpresaInput | InboundChannelRouteCreateOrConnectWithoutEmpresaInput[]
    createMany?: InboundChannelRouteCreateManyEmpresaInputEnvelope
    connect?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumModoHostingDBFieldUpdateOperationsInput = {
    set?: $Enums.ModoHostingDB
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput> | UsuarioCreateWithoutEmpresaInput[] | UsuarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput | UsuarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutEmpresaInput | UsuarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: UsuarioCreateManyEmpresaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutEmpresaInput | UsuarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutEmpresaInput | UsuarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type InboundChannelRouteUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<InboundChannelRouteCreateWithoutEmpresaInput, InboundChannelRouteUncheckedCreateWithoutEmpresaInput> | InboundChannelRouteCreateWithoutEmpresaInput[] | InboundChannelRouteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InboundChannelRouteCreateOrConnectWithoutEmpresaInput | InboundChannelRouteCreateOrConnectWithoutEmpresaInput[]
    upsert?: InboundChannelRouteUpsertWithWhereUniqueWithoutEmpresaInput | InboundChannelRouteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: InboundChannelRouteCreateManyEmpresaInputEnvelope
    set?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    disconnect?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    delete?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    connect?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    update?: InboundChannelRouteUpdateWithWhereUniqueWithoutEmpresaInput | InboundChannelRouteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: InboundChannelRouteUpdateManyWithWhereWithoutEmpresaInput | InboundChannelRouteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: InboundChannelRouteScalarWhereInput | InboundChannelRouteScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput> | UsuarioCreateWithoutEmpresaInput[] | UsuarioUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresaInput | UsuarioCreateOrConnectWithoutEmpresaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutEmpresaInput | UsuarioUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: UsuarioCreateManyEmpresaInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutEmpresaInput | UsuarioUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutEmpresaInput | UsuarioUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type InboundChannelRouteUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<InboundChannelRouteCreateWithoutEmpresaInput, InboundChannelRouteUncheckedCreateWithoutEmpresaInput> | InboundChannelRouteCreateWithoutEmpresaInput[] | InboundChannelRouteUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: InboundChannelRouteCreateOrConnectWithoutEmpresaInput | InboundChannelRouteCreateOrConnectWithoutEmpresaInput[]
    upsert?: InboundChannelRouteUpsertWithWhereUniqueWithoutEmpresaInput | InboundChannelRouteUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: InboundChannelRouteCreateManyEmpresaInputEnvelope
    set?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    disconnect?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    delete?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    connect?: InboundChannelRouteWhereUniqueInput | InboundChannelRouteWhereUniqueInput[]
    update?: InboundChannelRouteUpdateWithWhereUniqueWithoutEmpresaInput | InboundChannelRouteUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: InboundChannelRouteUpdateManyWithWhereWithoutEmpresaInput | InboundChannelRouteUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: InboundChannelRouteScalarWhereInput | InboundChannelRouteScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutInboundRoutesInput = {
    create?: XOR<EmpresaCreateWithoutInboundRoutesInput, EmpresaUncheckedCreateWithoutInboundRoutesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutInboundRoutesInput
    connect?: EmpresaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmpresaUpdateOneRequiredWithoutInboundRoutesNestedInput = {
    create?: XOR<EmpresaCreateWithoutInboundRoutesInput, EmpresaUncheckedCreateWithoutInboundRoutesInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutInboundRoutesInput
    upsert?: EmpresaUpsertWithoutInboundRoutesInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutInboundRoutesInput, EmpresaUpdateWithoutInboundRoutesInput>, EmpresaUncheckedUpdateWithoutInboundRoutesInput>
  }

  export type EmpresaCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuariosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmpresaUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuariosInput
    upsert?: EmpresaUpsertWithoutUsuariosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutUsuariosInput, EmpresaUpdateWithoutUsuariosInput>, EmpresaUncheckedUpdateWithoutUsuariosInput>
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

  export type NestedEnumModoHostingDBFilter<$PrismaModel = never> = {
    equals?: $Enums.ModoHostingDB | EnumModoHostingDBFieldRefInput<$PrismaModel>
    in?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    not?: NestedEnumModoHostingDBFilter<$PrismaModel> | $Enums.ModoHostingDB
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

  export type NestedEnumModoHostingDBWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModoHostingDB | EnumModoHostingDBFieldRefInput<$PrismaModel>
    in?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModoHostingDB[] | ListEnumModoHostingDBFieldRefInput<$PrismaModel>
    not?: NestedEnumModoHostingDBWithAggregatesFilter<$PrismaModel> | $Enums.ModoHostingDB
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModoHostingDBFilter<$PrismaModel>
    _max?: NestedEnumModoHostingDBFilter<$PrismaModel>
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UsuarioCreateWithoutEmpresaInput = {
    id?: string
    nombre: string
    email: string
    passwordHash: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    tokenVersion?: number
    creadoEn?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nombre: string
    email: string
    passwordHash: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    tokenVersion?: number
    creadoEn?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutEmpresaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
  }

  export type UsuarioCreateManyEmpresaInputEnvelope = {
    data: UsuarioCreateManyEmpresaInput | UsuarioCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type InboundChannelRouteCreateWithoutEmpresaInput = {
    id?: string
    channelId: string
    tokenHash: string
    isActive?: boolean
    creadoEn?: Date | string
  }

  export type InboundChannelRouteUncheckedCreateWithoutEmpresaInput = {
    id?: string
    channelId: string
    tokenHash: string
    isActive?: boolean
    creadoEn?: Date | string
  }

  export type InboundChannelRouteCreateOrConnectWithoutEmpresaInput = {
    where: InboundChannelRouteWhereUniqueInput
    create: XOR<InboundChannelRouteCreateWithoutEmpresaInput, InboundChannelRouteUncheckedCreateWithoutEmpresaInput>
  }

  export type InboundChannelRouteCreateManyEmpresaInputEnvelope = {
    data: InboundChannelRouteCreateManyEmpresaInput | InboundChannelRouteCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutEmpresaInput, UsuarioUncheckedUpdateWithoutEmpresaInput>
    create: XOR<UsuarioCreateWithoutEmpresaInput, UsuarioUncheckedCreateWithoutEmpresaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutEmpresaInput, UsuarioUncheckedUpdateWithoutEmpresaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutEmpresaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: StringFilter<"Usuario"> | string
    empresaId?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    activo?: BoolFilter<"Usuario"> | boolean
    tokenVersion?: IntFilter<"Usuario"> | number
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type InboundChannelRouteUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: InboundChannelRouteWhereUniqueInput
    update: XOR<InboundChannelRouteUpdateWithoutEmpresaInput, InboundChannelRouteUncheckedUpdateWithoutEmpresaInput>
    create: XOR<InboundChannelRouteCreateWithoutEmpresaInput, InboundChannelRouteUncheckedCreateWithoutEmpresaInput>
  }

  export type InboundChannelRouteUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: InboundChannelRouteWhereUniqueInput
    data: XOR<InboundChannelRouteUpdateWithoutEmpresaInput, InboundChannelRouteUncheckedUpdateWithoutEmpresaInput>
  }

  export type InboundChannelRouteUpdateManyWithWhereWithoutEmpresaInput = {
    where: InboundChannelRouteScalarWhereInput
    data: XOR<InboundChannelRouteUpdateManyMutationInput, InboundChannelRouteUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type InboundChannelRouteScalarWhereInput = {
    AND?: InboundChannelRouteScalarWhereInput | InboundChannelRouteScalarWhereInput[]
    OR?: InboundChannelRouteScalarWhereInput[]
    NOT?: InboundChannelRouteScalarWhereInput | InboundChannelRouteScalarWhereInput[]
    id?: UuidFilter<"InboundChannelRoute"> | string
    empresaId?: StringFilter<"InboundChannelRoute"> | string
    channelId?: UuidFilter<"InboundChannelRoute"> | string
    tokenHash?: StringFilter<"InboundChannelRoute"> | string
    isActive?: BoolFilter<"InboundChannelRoute"> | boolean
    creadoEn?: DateTimeFilter<"InboundChannelRoute"> | Date | string
  }

  export type EmpresaCreateWithoutInboundRoutesInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
    usuarios?: UsuarioCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutInboundRoutesInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutInboundRoutesInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutInboundRoutesInput, EmpresaUncheckedCreateWithoutInboundRoutesInput>
  }

  export type EmpresaUpsertWithoutInboundRoutesInput = {
    update: XOR<EmpresaUpdateWithoutInboundRoutesInput, EmpresaUncheckedUpdateWithoutInboundRoutesInput>
    create: XOR<EmpresaCreateWithoutInboundRoutesInput, EmpresaUncheckedCreateWithoutInboundRoutesInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutInboundRoutesInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutInboundRoutesInput, EmpresaUncheckedUpdateWithoutInboundRoutesInput>
  }

  export type EmpresaUpdateWithoutInboundRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutInboundRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
    inboundRoutes?: InboundChannelRouteCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutUsuariosInput = {
    id?: string
    nombre: string
    logoUrl?: string | null
    modoHostingDB?: $Enums.ModoHostingDB
    conexionCifrada?: string | null
    schemaTenant?: string | null
    creadoEn?: Date | string
    inboundRoutes?: InboundChannelRouteUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutUsuariosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
  }

  export type EmpresaUpsertWithoutUsuariosInput = {
    update: XOR<EmpresaUpdateWithoutUsuariosInput, EmpresaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<EmpresaCreateWithoutUsuariosInput, EmpresaUncheckedCreateWithoutUsuariosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutUsuariosInput, EmpresaUncheckedUpdateWithoutUsuariosInput>
  }

  export type EmpresaUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    inboundRoutes?: InboundChannelRouteUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    modoHostingDB?: EnumModoHostingDBFieldUpdateOperationsInput | $Enums.ModoHostingDB
    conexionCifrada?: NullableStringFieldUpdateOperationsInput | string | null
    schemaTenant?: NullableStringFieldUpdateOperationsInput | string | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    inboundRoutes?: InboundChannelRouteUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type UsuarioCreateManyEmpresaInput = {
    id?: string
    nombre: string
    email: string
    passwordHash: string
    rol?: $Enums.RolUsuario
    activo?: boolean
    tokenVersion?: number
    creadoEn?: Date | string
  }

  export type InboundChannelRouteCreateManyEmpresaInput = {
    id?: string
    channelId: string
    tokenHash: string
    isActive?: boolean
    creadoEn?: Date | string
  }

  export type UsuarioUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    activo?: BoolFieldUpdateOperationsInput | boolean
    tokenVersion?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundChannelRouteUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundChannelRouteUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundChannelRouteUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
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