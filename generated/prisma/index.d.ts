
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ImageGeneration
 * 
 */
export type ImageGeneration = $Result.DefaultSelection<Prisma.$ImageGenerationPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Subcategory
 * 
 */
export type Subcategory = $Result.DefaultSelection<Prisma.$SubcategoryPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model WorkLog
 * 
 */
export type WorkLog = $Result.DefaultSelection<Prisma.$WorkLogPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model Customlog
 * 
 */
export type Customlog = $Result.DefaultSelection<Prisma.$CustomlogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  executive: 'executive',
  manager: 'manager',
  employee: 'employee',
  accountant: 'accountant'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const AnnouncementType: {
  PROJECT_ASSIGNMENT: 'PROJECT_ASSIGNMENT',
  EXECUTIVE_MESSAGE: 'EXECUTIVE_MESSAGE',
  GENERAL: 'GENERAL'
};

export type AnnouncementType = (typeof AnnouncementType)[keyof typeof AnnouncementType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type AnnouncementType = $Enums.AnnouncementType

export const AnnouncementType: typeof $Enums.AnnouncementType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageGeneration`: Exposes CRUD operations for the **ImageGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageGenerations
    * const imageGenerations = await prisma.imageGeneration.findMany()
    * ```
    */
  get imageGeneration(): Prisma.ImageGenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subcategory`: Exposes CRUD operations for the **Subcategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcategories
    * const subcategories = await prisma.subcategory.findMany()
    * ```
    */
  get subcategory(): Prisma.SubcategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workLog`: Exposes CRUD operations for the **WorkLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkLogs
    * const workLogs = await prisma.workLog.findMany()
    * ```
    */
  get workLog(): Prisma.WorkLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customlog`: Exposes CRUD operations for the **Customlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customlogs
    * const customlogs = await prisma.customlog.findMany()
    * ```
    */
  get customlog(): Prisma.CustomlogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    ImageGeneration: 'ImageGeneration',
    Announcement: 'Announcement',
    Project: 'Project',
    Category: 'Category',
    Subcategory: 'Subcategory',
    Task: 'Task',
    WorkLog: 'WorkLog',
    Step: 'Step',
    Reminder: 'Reminder',
    Customlog: 'Customlog'
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
      modelProps: "user" | "imageGeneration" | "announcement" | "project" | "category" | "subcategory" | "task" | "workLog" | "step" | "reminder" | "customlog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ImageGeneration: {
        payload: Prisma.$ImageGenerationPayload<ExtArgs>
        fields: Prisma.ImageGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>
          }
          findFirst: {
            args: Prisma.ImageGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>
          }
          findMany: {
            args: Prisma.ImageGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>[]
          }
          create: {
            args: Prisma.ImageGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>
          }
          createMany: {
            args: Prisma.ImageGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>[]
          }
          delete: {
            args: Prisma.ImageGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>
          }
          update: {
            args: Prisma.ImageGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>
          }
          deleteMany: {
            args: Prisma.ImageGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>[]
          }
          upsert: {
            args: Prisma.ImageGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageGenerationPayload>
          }
          aggregate: {
            args: Prisma.ImageGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageGeneration>
          }
          groupBy: {
            args: Prisma.ImageGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<ImageGenerationCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Subcategory: {
        payload: Prisma.$SubcategoryPayload<ExtArgs>
        fields: Prisma.SubcategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findFirst: {
            args: Prisma.SubcategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          findMany: {
            args: Prisma.SubcategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          create: {
            args: Prisma.SubcategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          createMany: {
            args: Prisma.SubcategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubcategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          delete: {
            args: Prisma.SubcategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          update: {
            args: Prisma.SubcategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubcategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubcategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubcategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcategoryPayload>
          }
          aggregate: {
            args: Prisma.SubcategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcategory>
          }
          groupBy: {
            args: Prisma.SubcategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubcategoryCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      WorkLog: {
        payload: Prisma.$WorkLogPayload<ExtArgs>
        fields: Prisma.WorkLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          findFirst: {
            args: Prisma.WorkLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          findMany: {
            args: Prisma.WorkLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>[]
          }
          create: {
            args: Prisma.WorkLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          createMany: {
            args: Prisma.WorkLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>[]
          }
          delete: {
            args: Prisma.WorkLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          update: {
            args: Prisma.WorkLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>[]
          }
          upsert: {
            args: Prisma.WorkLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkLogPayload>
          }
          aggregate: {
            args: Prisma.WorkLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkLog>
          }
          groupBy: {
            args: Prisma.WorkLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkLogCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      Customlog: {
        payload: Prisma.$CustomlogPayload<ExtArgs>
        fields: Prisma.CustomlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>
          }
          findFirst: {
            args: Prisma.CustomlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>
          }
          findMany: {
            args: Prisma.CustomlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>[]
          }
          create: {
            args: Prisma.CustomlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>
          }
          createMany: {
            args: Prisma.CustomlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>[]
          }
          delete: {
            args: Prisma.CustomlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>
          }
          update: {
            args: Prisma.CustomlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>
          }
          deleteMany: {
            args: Prisma.CustomlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>[]
          }
          upsert: {
            args: Prisma.CustomlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomlogPayload>
          }
          aggregate: {
            args: Prisma.CustomlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomlog>
          }
          groupBy: {
            args: Prisma.CustomlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomlogCountArgs<ExtArgs>
            result: $Utils.Optional<CustomlogCountAggregateOutputType> | number
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
    user?: UserOmit
    imageGeneration?: ImageGenerationOmit
    announcement?: AnnouncementOmit
    project?: ProjectOmit
    category?: CategoryOmit
    subcategory?: SubcategoryOmit
    task?: TaskOmit
    workLog?: WorkLogOmit
    step?: StepOmit
    reminder?: ReminderOmit
    customlog?: CustomlogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    employees: number
    tasksAssigned: number
    tasksReceived: number
    workLogs: number
    announcementsReceived: number
    announcementsCreated: number
    Reminder: number
    customLogs: number
    imageGenerations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | UserCountOutputTypeCountEmployeesArgs
    tasksAssigned?: boolean | UserCountOutputTypeCountTasksAssignedArgs
    tasksReceived?: boolean | UserCountOutputTypeCountTasksReceivedArgs
    workLogs?: boolean | UserCountOutputTypeCountWorkLogsArgs
    announcementsReceived?: boolean | UserCountOutputTypeCountAnnouncementsReceivedArgs
    announcementsCreated?: boolean | UserCountOutputTypeCountAnnouncementsCreatedArgs
    Reminder?: boolean | UserCountOutputTypeCountReminderArgs
    customLogs?: boolean | UserCountOutputTypeCountCustomLogsArgs
    imageGenerations?: boolean | UserCountOutputTypeCountImageGenerationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImageGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageGenerationWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    categories: number
    Announcement: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ProjectCountOutputTypeCountCategoriesArgs
    Announcement?: boolean | ProjectCountOutputTypeCountAnnouncementArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcats: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcats?: boolean | CategoryCountOutputTypeCountSubcatsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
  }


  /**
   * Count Type SubcategoryCountOutputType
   */

  export type SubcategoryCountOutputType = {
    tasks: number
  }

  export type SubcategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | SubcategoryCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubcategoryCountOutputType
     */
    select?: SubcategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubcategoryCountOutputType without action
   */
  export type SubcategoryCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    workLogs: number
    steps: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workLogs?: boolean | TaskCountOutputTypeCountWorkLogsArgs
    steps?: boolean | TaskCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountWorkLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLogWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }


  /**
   * Count Type StepCountOutputType
   */

  export type StepCountOutputType = {
    WorkLog: number
  }

  export type StepCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkLog?: boolean | StepCountOutputTypeCountWorkLogArgs
  }

  // Custom InputTypes
  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepCountOutputType
     */
    select?: StepCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StepCountOutputType without action
   */
  export type StepCountOutputTypeCountWorkLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    managerId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    managerId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    managerId: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    managerId: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    phone: number
    role: number
    managerId: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    managerId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    managerId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    phone?: true
    role?: true
    managerId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    phone?: true
    role?: true
    managerId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    phone?: true
    role?: true
    managerId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    password: string
    phone: string | null
    role: $Enums.Role
    managerId: number | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
    manager?: boolean | User$managerArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    tasksAssigned?: boolean | User$tasksAssignedArgs<ExtArgs>
    tasksReceived?: boolean | User$tasksReceivedArgs<ExtArgs>
    workLogs?: boolean | User$workLogsArgs<ExtArgs>
    announcementsReceived?: boolean | User$announcementsReceivedArgs<ExtArgs>
    announcementsCreated?: boolean | User$announcementsCreatedArgs<ExtArgs>
    Reminder?: boolean | User$ReminderArgs<ExtArgs>
    customLogs?: boolean | User$customLogsArgs<ExtArgs>
    imageGenerations?: boolean | User$imageGenerationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
    manager?: boolean | User$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    managerId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "phone" | "role" | "managerId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | User$managerArgs<ExtArgs>
    employees?: boolean | User$employeesArgs<ExtArgs>
    tasksAssigned?: boolean | User$tasksAssignedArgs<ExtArgs>
    tasksReceived?: boolean | User$tasksReceivedArgs<ExtArgs>
    workLogs?: boolean | User$workLogsArgs<ExtArgs>
    announcementsReceived?: boolean | User$announcementsReceivedArgs<ExtArgs>
    announcementsCreated?: boolean | User$announcementsCreatedArgs<ExtArgs>
    Reminder?: boolean | User$ReminderArgs<ExtArgs>
    customLogs?: boolean | User$customLogsArgs<ExtArgs>
    imageGenerations?: boolean | User$imageGenerationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | User$managerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | User$managerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs> | null
      employees: Prisma.$UserPayload<ExtArgs>[]
      tasksAssigned: Prisma.$TaskPayload<ExtArgs>[]
      tasksReceived: Prisma.$TaskPayload<ExtArgs>[]
      workLogs: Prisma.$WorkLogPayload<ExtArgs>[]
      announcementsReceived: Prisma.$AnnouncementPayload<ExtArgs>[]
      announcementsCreated: Prisma.$AnnouncementPayload<ExtArgs>[]
      Reminder: Prisma.$ReminderPayload<ExtArgs>[]
      customLogs: Prisma.$CustomlogPayload<ExtArgs>[]
      imageGenerations: Prisma.$ImageGenerationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      password: string
      phone: string | null
      role: $Enums.Role
      managerId: number | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employees<T extends User$employeesArgs<ExtArgs> = {}>(args?: Subset<T, User$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasksAssigned<T extends User$tasksAssignedArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasksReceived<T extends User$tasksReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workLogs<T extends User$workLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$workLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcementsReceived<T extends User$announcementsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcementsCreated<T extends User$announcementsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reminder<T extends User$ReminderArgs<ExtArgs> = {}>(args?: Subset<T, User$ReminderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customLogs<T extends User$customLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$customLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imageGenerations<T extends User$imageGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$imageGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly managerId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.employees
   */
  export type User$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.tasksAssigned
   */
  export type User$tasksAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.tasksReceived
   */
  export type User$tasksReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.workLogs
   */
  export type User$workLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    where?: WorkLogWhereInput
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    cursor?: WorkLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * User.announcementsReceived
   */
  export type User$announcementsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.announcementsCreated
   */
  export type User$announcementsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.Reminder
   */
  export type User$ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * User.customLogs
   */
  export type User$customLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    where?: CustomlogWhereInput
    orderBy?: CustomlogOrderByWithRelationInput | CustomlogOrderByWithRelationInput[]
    cursor?: CustomlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomlogScalarFieldEnum | CustomlogScalarFieldEnum[]
  }

  /**
   * User.imageGenerations
   */
  export type User$imageGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    where?: ImageGenerationWhereInput
    orderBy?: ImageGenerationOrderByWithRelationInput | ImageGenerationOrderByWithRelationInput[]
    cursor?: ImageGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageGenerationScalarFieldEnum | ImageGenerationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ImageGeneration
   */

  export type AggregateImageGeneration = {
    _count: ImageGenerationCountAggregateOutputType | null
    _avg: ImageGenerationAvgAggregateOutputType | null
    _sum: ImageGenerationSumAggregateOutputType | null
    _min: ImageGenerationMinAggregateOutputType | null
    _max: ImageGenerationMaxAggregateOutputType | null
  }

  export type ImageGenerationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImageGenerationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ImageGenerationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    style: string | null
    createdAt: Date | null
  }

  export type ImageGenerationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    style: string | null
    createdAt: Date | null
  }

  export type ImageGenerationCountAggregateOutputType = {
    id: number
    userId: number
    style: number
    createdAt: number
    _all: number
  }


  export type ImageGenerationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImageGenerationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ImageGenerationMinAggregateInputType = {
    id?: true
    userId?: true
    style?: true
    createdAt?: true
  }

  export type ImageGenerationMaxAggregateInputType = {
    id?: true
    userId?: true
    style?: true
    createdAt?: true
  }

  export type ImageGenerationCountAggregateInputType = {
    id?: true
    userId?: true
    style?: true
    createdAt?: true
    _all?: true
  }

  export type ImageGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageGeneration to aggregate.
     */
    where?: ImageGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageGenerations to fetch.
     */
    orderBy?: ImageGenerationOrderByWithRelationInput | ImageGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageGenerations
    **/
    _count?: true | ImageGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageGenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageGenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageGenerationMaxAggregateInputType
  }

  export type GetImageGenerationAggregateType<T extends ImageGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateImageGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageGeneration[P]>
      : GetScalarType<T[P], AggregateImageGeneration[P]>
  }




  export type ImageGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageGenerationWhereInput
    orderBy?: ImageGenerationOrderByWithAggregationInput | ImageGenerationOrderByWithAggregationInput[]
    by: ImageGenerationScalarFieldEnum[] | ImageGenerationScalarFieldEnum
    having?: ImageGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageGenerationCountAggregateInputType | true
    _avg?: ImageGenerationAvgAggregateInputType
    _sum?: ImageGenerationSumAggregateInputType
    _min?: ImageGenerationMinAggregateInputType
    _max?: ImageGenerationMaxAggregateInputType
  }

  export type ImageGenerationGroupByOutputType = {
    id: number
    userId: number
    style: string
    createdAt: Date
    _count: ImageGenerationCountAggregateOutputType | null
    _avg: ImageGenerationAvgAggregateOutputType | null
    _sum: ImageGenerationSumAggregateOutputType | null
    _min: ImageGenerationMinAggregateOutputType | null
    _max: ImageGenerationMaxAggregateOutputType | null
  }

  type GetImageGenerationGroupByPayload<T extends ImageGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGenerationGroupByOutputType[P]>
        }
      >
    >


  export type ImageGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    style?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageGeneration"]>

  export type ImageGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    style?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageGeneration"]>

  export type ImageGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    style?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageGeneration"]>

  export type ImageGenerationSelectScalar = {
    id?: boolean
    userId?: boolean
    style?: boolean
    createdAt?: boolean
  }

  export type ImageGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "style" | "createdAt", ExtArgs["result"]["imageGeneration"]>
  export type ImageGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImageGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImageGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImageGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageGeneration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      style: string
      createdAt: Date
    }, ExtArgs["result"]["imageGeneration"]>
    composites: {}
  }

  type ImageGenerationGetPayload<S extends boolean | null | undefined | ImageGenerationDefaultArgs> = $Result.GetResult<Prisma.$ImageGenerationPayload, S>

  type ImageGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageGenerationCountAggregateInputType | true
    }

  export interface ImageGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageGeneration'], meta: { name: 'ImageGeneration' } }
    /**
     * Find zero or one ImageGeneration that matches the filter.
     * @param {ImageGenerationFindUniqueArgs} args - Arguments to find a ImageGeneration
     * @example
     * // Get one ImageGeneration
     * const imageGeneration = await prisma.imageGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageGenerationFindUniqueArgs>(args: SelectSubset<T, ImageGenerationFindUniqueArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageGenerationFindUniqueOrThrowArgs} args - Arguments to find a ImageGeneration
     * @example
     * // Get one ImageGeneration
     * const imageGeneration = await prisma.imageGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationFindFirstArgs} args - Arguments to find a ImageGeneration
     * @example
     * // Get one ImageGeneration
     * const imageGeneration = await prisma.imageGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageGenerationFindFirstArgs>(args?: SelectSubset<T, ImageGenerationFindFirstArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationFindFirstOrThrowArgs} args - Arguments to find a ImageGeneration
     * @example
     * // Get one ImageGeneration
     * const imageGeneration = await prisma.imageGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageGenerations
     * const imageGenerations = await prisma.imageGeneration.findMany()
     * 
     * // Get first 10 ImageGenerations
     * const imageGenerations = await prisma.imageGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageGenerationWithIdOnly = await prisma.imageGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageGenerationFindManyArgs>(args?: SelectSubset<T, ImageGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageGeneration.
     * @param {ImageGenerationCreateArgs} args - Arguments to create a ImageGeneration.
     * @example
     * // Create one ImageGeneration
     * const ImageGeneration = await prisma.imageGeneration.create({
     *   data: {
     *     // ... data to create a ImageGeneration
     *   }
     * })
     * 
     */
    create<T extends ImageGenerationCreateArgs>(args: SelectSubset<T, ImageGenerationCreateArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageGenerations.
     * @param {ImageGenerationCreateManyArgs} args - Arguments to create many ImageGenerations.
     * @example
     * // Create many ImageGenerations
     * const imageGeneration = await prisma.imageGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageGenerationCreateManyArgs>(args?: SelectSubset<T, ImageGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageGenerations and returns the data saved in the database.
     * @param {ImageGenerationCreateManyAndReturnArgs} args - Arguments to create many ImageGenerations.
     * @example
     * // Create many ImageGenerations
     * const imageGeneration = await prisma.imageGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageGenerations and only return the `id`
     * const imageGenerationWithIdOnly = await prisma.imageGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageGeneration.
     * @param {ImageGenerationDeleteArgs} args - Arguments to delete one ImageGeneration.
     * @example
     * // Delete one ImageGeneration
     * const ImageGeneration = await prisma.imageGeneration.delete({
     *   where: {
     *     // ... filter to delete one ImageGeneration
     *   }
     * })
     * 
     */
    delete<T extends ImageGenerationDeleteArgs>(args: SelectSubset<T, ImageGenerationDeleteArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageGeneration.
     * @param {ImageGenerationUpdateArgs} args - Arguments to update one ImageGeneration.
     * @example
     * // Update one ImageGeneration
     * const imageGeneration = await prisma.imageGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageGenerationUpdateArgs>(args: SelectSubset<T, ImageGenerationUpdateArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageGenerations.
     * @param {ImageGenerationDeleteManyArgs} args - Arguments to filter ImageGenerations to delete.
     * @example
     * // Delete a few ImageGenerations
     * const { count } = await prisma.imageGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageGenerationDeleteManyArgs>(args?: SelectSubset<T, ImageGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageGenerations
     * const imageGeneration = await prisma.imageGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageGenerationUpdateManyArgs>(args: SelectSubset<T, ImageGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageGenerations and returns the data updated in the database.
     * @param {ImageGenerationUpdateManyAndReturnArgs} args - Arguments to update many ImageGenerations.
     * @example
     * // Update many ImageGenerations
     * const imageGeneration = await prisma.imageGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageGenerations and only return the `id`
     * const imageGenerationWithIdOnly = await prisma.imageGeneration.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageGeneration.
     * @param {ImageGenerationUpsertArgs} args - Arguments to update or create a ImageGeneration.
     * @example
     * // Update or create a ImageGeneration
     * const imageGeneration = await prisma.imageGeneration.upsert({
     *   create: {
     *     // ... data to create a ImageGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageGeneration we want to update
     *   }
     * })
     */
    upsert<T extends ImageGenerationUpsertArgs>(args: SelectSubset<T, ImageGenerationUpsertArgs<ExtArgs>>): Prisma__ImageGenerationClient<$Result.GetResult<Prisma.$ImageGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationCountArgs} args - Arguments to filter ImageGenerations to count.
     * @example
     * // Count the number of ImageGenerations
     * const count = await prisma.imageGeneration.count({
     *   where: {
     *     // ... the filter for the ImageGenerations we want to count
     *   }
     * })
    **/
    count<T extends ImageGenerationCountArgs>(
      args?: Subset<T, ImageGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageGenerationAggregateArgs>(args: Subset<T, ImageGenerationAggregateArgs>): Prisma.PrismaPromise<GetImageGenerationAggregateType<T>>

    /**
     * Group by ImageGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGenerationGroupByArgs} args - Group by arguments.
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
      T extends ImageGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGenerationGroupByArgs['orderBy'] }
        : { orderBy?: ImageGenerationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageGeneration model
   */
  readonly fields: ImageGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImageGeneration model
   */
  interface ImageGenerationFieldRefs {
    readonly id: FieldRef<"ImageGeneration", 'Int'>
    readonly userId: FieldRef<"ImageGeneration", 'Int'>
    readonly style: FieldRef<"ImageGeneration", 'String'>
    readonly createdAt: FieldRef<"ImageGeneration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageGeneration findUnique
   */
  export type ImageGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ImageGeneration to fetch.
     */
    where: ImageGenerationWhereUniqueInput
  }

  /**
   * ImageGeneration findUniqueOrThrow
   */
  export type ImageGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ImageGeneration to fetch.
     */
    where: ImageGenerationWhereUniqueInput
  }

  /**
   * ImageGeneration findFirst
   */
  export type ImageGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ImageGeneration to fetch.
     */
    where?: ImageGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageGenerations to fetch.
     */
    orderBy?: ImageGenerationOrderByWithRelationInput | ImageGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageGenerations.
     */
    cursor?: ImageGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageGenerations.
     */
    distinct?: ImageGenerationScalarFieldEnum | ImageGenerationScalarFieldEnum[]
  }

  /**
   * ImageGeneration findFirstOrThrow
   */
  export type ImageGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ImageGeneration to fetch.
     */
    where?: ImageGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageGenerations to fetch.
     */
    orderBy?: ImageGenerationOrderByWithRelationInput | ImageGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageGenerations.
     */
    cursor?: ImageGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageGenerations.
     */
    distinct?: ImageGenerationScalarFieldEnum | ImageGenerationScalarFieldEnum[]
  }

  /**
   * ImageGeneration findMany
   */
  export type ImageGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ImageGenerations to fetch.
     */
    where?: ImageGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageGenerations to fetch.
     */
    orderBy?: ImageGenerationOrderByWithRelationInput | ImageGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageGenerations.
     */
    cursor?: ImageGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageGenerations.
     */
    skip?: number
    distinct?: ImageGenerationScalarFieldEnum | ImageGenerationScalarFieldEnum[]
  }

  /**
   * ImageGeneration create
   */
  export type ImageGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageGeneration.
     */
    data: XOR<ImageGenerationCreateInput, ImageGenerationUncheckedCreateInput>
  }

  /**
   * ImageGeneration createMany
   */
  export type ImageGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageGenerations.
     */
    data: ImageGenerationCreateManyInput | ImageGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageGeneration createManyAndReturn
   */
  export type ImageGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many ImageGenerations.
     */
    data: ImageGenerationCreateManyInput | ImageGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageGeneration update
   */
  export type ImageGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageGeneration.
     */
    data: XOR<ImageGenerationUpdateInput, ImageGenerationUncheckedUpdateInput>
    /**
     * Choose, which ImageGeneration to update.
     */
    where: ImageGenerationWhereUniqueInput
  }

  /**
   * ImageGeneration updateMany
   */
  export type ImageGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageGenerations.
     */
    data: XOR<ImageGenerationUpdateManyMutationInput, ImageGenerationUncheckedUpdateManyInput>
    /**
     * Filter which ImageGenerations to update
     */
    where?: ImageGenerationWhereInput
    /**
     * Limit how many ImageGenerations to update.
     */
    limit?: number
  }

  /**
   * ImageGeneration updateManyAndReturn
   */
  export type ImageGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * The data used to update ImageGenerations.
     */
    data: XOR<ImageGenerationUpdateManyMutationInput, ImageGenerationUncheckedUpdateManyInput>
    /**
     * Filter which ImageGenerations to update
     */
    where?: ImageGenerationWhereInput
    /**
     * Limit how many ImageGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageGeneration upsert
   */
  export type ImageGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageGeneration to update in case it exists.
     */
    where: ImageGenerationWhereUniqueInput
    /**
     * In case the ImageGeneration found by the `where` argument doesn't exist, create a new ImageGeneration with this data.
     */
    create: XOR<ImageGenerationCreateInput, ImageGenerationUncheckedCreateInput>
    /**
     * In case the ImageGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageGenerationUpdateInput, ImageGenerationUncheckedUpdateInput>
  }

  /**
   * ImageGeneration delete
   */
  export type ImageGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
    /**
     * Filter which ImageGeneration to delete.
     */
    where: ImageGenerationWhereUniqueInput
  }

  /**
   * ImageGeneration deleteMany
   */
  export type ImageGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageGenerations to delete
     */
    where?: ImageGenerationWhereInput
    /**
     * Limit how many ImageGenerations to delete.
     */
    limit?: number
  }

  /**
   * ImageGeneration without action
   */
  export type ImageGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageGeneration
     */
    select?: ImageGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageGeneration
     */
    omit?: ImageGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageGenerationInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
    createdById: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    assignedToId: number | null
    createdById: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    type: $Enums.AnnouncementType | null
    projectId: number | null
    assignedToId: number | null
    createdById: number | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    type: $Enums.AnnouncementType | null
    projectId: number | null
    assignedToId: number | null
    createdById: number | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    message: number
    type: number
    projectId: number
    assignedToId: number
    createdById: number
    createdAt: number
    isRead: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
    createdById?: true
  }

  export type AnnouncementSumAggregateInputType = {
    id?: true
    projectId?: true
    assignedToId?: true
    createdById?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    projectId?: true
    assignedToId?: true
    createdById?: true
    createdAt?: true
    isRead?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    projectId?: true
    assignedToId?: true
    createdById?: true
    createdAt?: true
    isRead?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    projectId?: true
    assignedToId?: true
    createdById?: true
    createdAt?: true
    isRead?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: number
    title: string
    message: string
    type: $Enums.AnnouncementType
    projectId: number | null
    assignedToId: number | null
    createdById: number | null
    createdAt: Date
    isRead: boolean
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    createdAt?: boolean
    isRead?: boolean
    project?: boolean | Announcement$projectArgs<ExtArgs>
    assignedTo?: boolean | Announcement$assignedToArgs<ExtArgs>
    createdBy?: boolean | Announcement$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    createdAt?: boolean
    isRead?: boolean
    project?: boolean | Announcement$projectArgs<ExtArgs>
    assignedTo?: boolean | Announcement$assignedToArgs<ExtArgs>
    createdBy?: boolean | Announcement$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    createdAt?: boolean
    isRead?: boolean
    project?: boolean | Announcement$projectArgs<ExtArgs>
    assignedTo?: boolean | Announcement$assignedToArgs<ExtArgs>
    createdBy?: boolean | Announcement$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    projectId?: boolean
    assignedToId?: boolean
    createdById?: boolean
    createdAt?: boolean
    isRead?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "type" | "projectId" | "assignedToId" | "createdById" | "createdAt" | "isRead", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Announcement$projectArgs<ExtArgs>
    assignedTo?: boolean | Announcement$assignedToArgs<ExtArgs>
    createdBy?: boolean | Announcement$createdByArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Announcement$projectArgs<ExtArgs>
    assignedTo?: boolean | Announcement$assignedToArgs<ExtArgs>
    createdBy?: boolean | Announcement$createdByArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Announcement$projectArgs<ExtArgs>
    assignedTo?: boolean | Announcement$assignedToArgs<ExtArgs>
    createdBy?: boolean | Announcement$createdByArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      message: string
      type: $Enums.AnnouncementType
      projectId: number | null
      assignedToId: number | null
      createdById: number | null
      createdAt: Date
      isRead: boolean
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Announcement$projectArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends Announcement$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Announcement$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'Int'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly message: FieldRef<"Announcement", 'String'>
    readonly type: FieldRef<"Announcement", 'AnnouncementType'>
    readonly projectId: FieldRef<"Announcement", 'Int'>
    readonly assignedToId: FieldRef<"Announcement", 'Int'>
    readonly createdById: FieldRef<"Announcement", 'Int'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly isRead: FieldRef<"Announcement", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement.project
   */
  export type Announcement$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Announcement.assignedTo
   */
  export type Announcement$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Announcement.createdBy
   */
  export type Announcement$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    paymentProgress: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    paymentProgress: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    paymentProgress: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    paymentProgress: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    paymentProgress: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    paymentProgress?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    paymentProgress?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    paymentProgress?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    paymentProgress?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    paymentProgress?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    status: string
    createdAt: Date
    paymentProgress: number | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    paymentProgress?: boolean
    categories?: boolean | Project$categoriesArgs<ExtArgs>
    Announcement?: boolean | Project$AnnouncementArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    paymentProgress?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    paymentProgress?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    paymentProgress?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "paymentProgress", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Project$categoriesArgs<ExtArgs>
    Announcement?: boolean | Project$AnnouncementArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      Announcement: Prisma.$AnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      status: string
      createdAt: Date
      paymentProgress: number | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Project$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Project$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Announcement<T extends Project$AnnouncementArgs<ExtArgs> = {}>(args?: Subset<T, Project$AnnouncementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly paymentProgress: FieldRef<"Project", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.categories
   */
  export type Project$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Project.Announcement
   */
  export type Project$AnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    projectId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    projectId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    projectId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    projectId: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subcats?: boolean | Category$subcatsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    projectId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    subcats?: boolean | Category$subcatsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      subcats: Prisma.$SubcategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      projectId: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subcats<T extends Category$subcatsArgs<ExtArgs> = {}>(args?: Subset<T, Category$subcatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly projectId: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.subcats
   */
  export type Category$subcatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    cursor?: SubcategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Subcategory
   */

  export type AggregateSubcategory = {
    _count: SubcategoryCountAggregateOutputType | null
    _avg: SubcategoryAvgAggregateOutputType | null
    _sum: SubcategorySumAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  export type SubcategoryAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubcategorySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type SubcategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type SubcategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type SubcategoryCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    _all: number
  }


  export type SubcategoryAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubcategorySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type SubcategoryMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type SubcategoryMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type SubcategoryCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    _all?: true
  }

  export type SubcategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategory to aggregate.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcategories
    **/
    _count?: true | SubcategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubcategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubcategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcategoryMaxAggregateInputType
  }

  export type GetSubcategoryAggregateType<T extends SubcategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcategory[P]>
      : GetScalarType<T[P], AggregateSubcategory[P]>
  }




  export type SubcategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcategoryWhereInput
    orderBy?: SubcategoryOrderByWithAggregationInput | SubcategoryOrderByWithAggregationInput[]
    by: SubcategoryScalarFieldEnum[] | SubcategoryScalarFieldEnum
    having?: SubcategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcategoryCountAggregateInputType | true
    _avg?: SubcategoryAvgAggregateInputType
    _sum?: SubcategorySumAggregateInputType
    _min?: SubcategoryMinAggregateInputType
    _max?: SubcategoryMaxAggregateInputType
  }

  export type SubcategoryGroupByOutputType = {
    id: number
    name: string
    categoryId: number
    _count: SubcategoryCountAggregateOutputType | null
    _avg: SubcategoryAvgAggregateOutputType | null
    _sum: SubcategorySumAggregateOutputType | null
    _min: SubcategoryMinAggregateOutputType | null
    _max: SubcategoryMaxAggregateOutputType | null
  }

  type GetSubcategoryGroupByPayload<T extends SubcategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubcategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubcategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tasks?: boolean | Subcategory$tasksArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subcategory"]>

  export type SubcategorySelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
  }

  export type SubcategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId", ExtArgs["result"]["subcategory"]>
  export type SubcategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    tasks?: boolean | Subcategory$tasksArgs<ExtArgs>
    _count?: boolean | SubcategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SubcategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SubcategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categoryId: number
    }, ExtArgs["result"]["subcategory"]>
    composites: {}
  }

  type SubcategoryGetPayload<S extends boolean | null | undefined | SubcategoryDefaultArgs> = $Result.GetResult<Prisma.$SubcategoryPayload, S>

  type SubcategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcategoryCountAggregateInputType | true
    }

  export interface SubcategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcategory'], meta: { name: 'Subcategory' } }
    /**
     * Find zero or one Subcategory that matches the filter.
     * @param {SubcategoryFindUniqueArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcategoryFindUniqueArgs>(args: SelectSubset<T, SubcategoryFindUniqueArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcategoryFindUniqueOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcategoryFindFirstArgs>(args?: SelectSubset<T, SubcategoryFindFirstArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindFirstOrThrowArgs} args - Arguments to find a Subcategory
     * @example
     * // Get one Subcategory
     * const subcategory = await prisma.subcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcategories
     * const subcategories = await prisma.subcategory.findMany()
     * 
     * // Get first 10 Subcategories
     * const subcategories = await prisma.subcategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcategoryFindManyArgs>(args?: SelectSubset<T, SubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcategory.
     * @param {SubcategoryCreateArgs} args - Arguments to create a Subcategory.
     * @example
     * // Create one Subcategory
     * const Subcategory = await prisma.subcategory.create({
     *   data: {
     *     // ... data to create a Subcategory
     *   }
     * })
     * 
     */
    create<T extends SubcategoryCreateArgs>(args: SelectSubset<T, SubcategoryCreateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcategories.
     * @param {SubcategoryCreateManyArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcategoryCreateManyArgs>(args?: SelectSubset<T, SubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subcategories and returns the data saved in the database.
     * @param {SubcategoryCreateManyAndReturnArgs} args - Arguments to create many Subcategories.
     * @example
     * // Create many Subcategories
     * const subcategory = await prisma.subcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubcategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subcategory.
     * @param {SubcategoryDeleteArgs} args - Arguments to delete one Subcategory.
     * @example
     * // Delete one Subcategory
     * const Subcategory = await prisma.subcategory.delete({
     *   where: {
     *     // ... filter to delete one Subcategory
     *   }
     * })
     * 
     */
    delete<T extends SubcategoryDeleteArgs>(args: SelectSubset<T, SubcategoryDeleteArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcategory.
     * @param {SubcategoryUpdateArgs} args - Arguments to update one Subcategory.
     * @example
     * // Update one Subcategory
     * const subcategory = await prisma.subcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcategoryUpdateArgs>(args: SelectSubset<T, SubcategoryUpdateArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcategories.
     * @param {SubcategoryDeleteManyArgs} args - Arguments to filter Subcategories to delete.
     * @example
     * // Delete a few Subcategories
     * const { count } = await prisma.subcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcategoryDeleteManyArgs>(args?: SelectSubset<T, SubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcategoryUpdateManyArgs>(args: SelectSubset<T, SubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcategories and returns the data updated in the database.
     * @param {SubcategoryUpdateManyAndReturnArgs} args - Arguments to update many Subcategories.
     * @example
     * // Update many Subcategories
     * const subcategory = await prisma.subcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subcategories and only return the `id`
     * const subcategoryWithIdOnly = await prisma.subcategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubcategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subcategory.
     * @param {SubcategoryUpsertArgs} args - Arguments to update or create a Subcategory.
     * @example
     * // Update or create a Subcategory
     * const subcategory = await prisma.subcategory.upsert({
     *   create: {
     *     // ... data to create a Subcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcategory we want to update
     *   }
     * })
     */
    upsert<T extends SubcategoryUpsertArgs>(args: SelectSubset<T, SubcategoryUpsertArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryCountArgs} args - Arguments to filter Subcategories to count.
     * @example
     * // Count the number of Subcategories
     * const count = await prisma.subcategory.count({
     *   where: {
     *     // ... the filter for the Subcategories we want to count
     *   }
     * })
    **/
    count<T extends SubcategoryCountArgs>(
      args?: Subset<T, SubcategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcategoryAggregateArgs>(args: Subset<T, SubcategoryAggregateArgs>): Prisma.PrismaPromise<GetSubcategoryAggregateType<T>>

    /**
     * Group by Subcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcategoryGroupByArgs} args - Group by arguments.
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
      T extends SubcategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubcategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcategory model
   */
  readonly fields: SubcategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Subcategory$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Subcategory$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subcategory model
   */
  interface SubcategoryFieldRefs {
    readonly id: FieldRef<"Subcategory", 'Int'>
    readonly name: FieldRef<"Subcategory", 'String'>
    readonly categoryId: FieldRef<"Subcategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subcategory findUnique
   */
  export type SubcategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findUniqueOrThrow
   */
  export type SubcategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory findFirst
   */
  export type SubcategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findFirstOrThrow
   */
  export type SubcategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategory to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcategories.
     */
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory findMany
   */
  export type SubcategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter, which Subcategories to fetch.
     */
    where?: SubcategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcategories to fetch.
     */
    orderBy?: SubcategoryOrderByWithRelationInput | SubcategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcategories.
     */
    cursor?: SubcategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcategories.
     */
    skip?: number
    distinct?: SubcategoryScalarFieldEnum | SubcategoryScalarFieldEnum[]
  }

  /**
   * Subcategory create
   */
  export type SubcategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcategory.
     */
    data: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
  }

  /**
   * Subcategory createMany
   */
  export type SubcategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subcategory createManyAndReturn
   */
  export type SubcategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Subcategories.
     */
    data: SubcategoryCreateManyInput | SubcategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory update
   */
  export type SubcategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcategory.
     */
    data: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
    /**
     * Choose, which Subcategory to update.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory updateMany
   */
  export type SubcategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
  }

  /**
   * Subcategory updateManyAndReturn
   */
  export type SubcategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * The data used to update Subcategories.
     */
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyInput>
    /**
     * Filter which Subcategories to update
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subcategory upsert
   */
  export type SubcategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcategory to update in case it exists.
     */
    where: SubcategoryWhereUniqueInput
    /**
     * In case the Subcategory found by the `where` argument doesn't exist, create a new Subcategory with this data.
     */
    create: XOR<SubcategoryCreateInput, SubcategoryUncheckedCreateInput>
    /**
     * In case the Subcategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcategoryUpdateInput, SubcategoryUncheckedUpdateInput>
  }

  /**
   * Subcategory delete
   */
  export type SubcategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
    /**
     * Filter which Subcategory to delete.
     */
    where: SubcategoryWhereUniqueInput
  }

  /**
   * Subcategory deleteMany
   */
  export type SubcategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcategories to delete
     */
    where?: SubcategoryWhereInput
    /**
     * Limit how many Subcategories to delete.
     */
    limit?: number
  }

  /**
   * Subcategory.tasks
   */
  export type Subcategory$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Subcategory without action
   */
  export type SubcategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcategory
     */
    select?: SubcategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcategory
     */
    omit?: SubcategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcategoryInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    subcategoryId: number | null
    assignedById: number | null
    assignedToId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    subcategoryId: number | null
    assignedById: number | null
    assignedToId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    subcategoryId: number | null
    assignedById: number | null
    assignedToId: number | null
    deadline: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    subcategoryId: number | null
    assignedById: number | null
    assignedToId: number | null
    deadline: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    subcategoryId: number
    assignedById: number
    assignedToId: number
    deadline: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    subcategoryId?: true
    assignedById?: true
    assignedToId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    subcategoryId?: true
    assignedById?: true
    assignedToId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subcategoryId?: true
    assignedById?: true
    assignedToId?: true
    deadline?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subcategoryId?: true
    assignedById?: true
    assignedToId?: true
    deadline?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    subcategoryId?: true
    assignedById?: true
    assignedToId?: true
    deadline?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    subcategoryId: number
    assignedById: number | null
    assignedToId: number
    deadline: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subcategoryId?: boolean
    assignedById?: boolean
    assignedToId?: boolean
    deadline?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    assignedBy?: boolean | Task$assignedByArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    workLogs?: boolean | Task$workLogsArgs<ExtArgs>
    steps?: boolean | Task$stepsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subcategoryId?: boolean
    assignedById?: boolean
    assignedToId?: boolean
    deadline?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    assignedBy?: boolean | Task$assignedByArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    subcategoryId?: boolean
    assignedById?: boolean
    assignedToId?: boolean
    deadline?: boolean
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    assignedBy?: boolean | Task$assignedByArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    subcategoryId?: boolean
    assignedById?: boolean
    assignedToId?: boolean
    deadline?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "subcategoryId" | "assignedById" | "assignedToId" | "deadline", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    assignedBy?: boolean | Task$assignedByArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    workLogs?: boolean | Task$workLogsArgs<ExtArgs>
    steps?: boolean | Task$stepsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    assignedBy?: boolean | Task$assignedByArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | SubcategoryDefaultArgs<ExtArgs>
    assignedBy?: boolean | Task$assignedByArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      subcategory: Prisma.$SubcategoryPayload<ExtArgs>
      assignedBy: Prisma.$UserPayload<ExtArgs> | null
      assignedTo: Prisma.$UserPayload<ExtArgs>
      workLogs: Prisma.$WorkLogPayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      subcategoryId: number
      assignedById: number | null
      assignedToId: number
      deadline: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategory<T extends SubcategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubcategoryDefaultArgs<ExtArgs>>): Prisma__SubcategoryClient<$Result.GetResult<Prisma.$SubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedBy<T extends Task$assignedByArgs<ExtArgs> = {}>(args?: Subset<T, Task$assignedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workLogs<T extends Task$workLogsArgs<ExtArgs> = {}>(args?: Subset<T, Task$workLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends Task$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Task$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly subcategoryId: FieldRef<"Task", 'Int'>
    readonly assignedById: FieldRef<"Task", 'Int'>
    readonly assignedToId: FieldRef<"Task", 'Int'>
    readonly deadline: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.assignedBy
   */
  export type Task$assignedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.workLogs
   */
  export type Task$workLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    where?: WorkLogWhereInput
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    cursor?: WorkLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * Task.steps
   */
  export type Task$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model WorkLog
   */

  export type AggregateWorkLog = {
    _count: WorkLogCountAggregateOutputType | null
    _avg: WorkLogAvgAggregateOutputType | null
    _sum: WorkLogSumAggregateOutputType | null
    _min: WorkLogMinAggregateOutputType | null
    _max: WorkLogMaxAggregateOutputType | null
  }

  export type WorkLogAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    employeeId: number | null
    stepId: number | null
    progress: number | null
  }

  export type WorkLogSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    employeeId: number | null
    stepId: number | null
    progress: number | null
  }

  export type WorkLogMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    employeeId: number | null
    stepId: number | null
    workDate: Date | null
    notes: string | null
    progress: number | null
  }

  export type WorkLogMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    employeeId: number | null
    stepId: number | null
    workDate: Date | null
    notes: string | null
    progress: number | null
  }

  export type WorkLogCountAggregateOutputType = {
    id: number
    taskId: number
    employeeId: number
    stepId: number
    workDate: number
    notes: number
    progress: number
    _all: number
  }


  export type WorkLogAvgAggregateInputType = {
    id?: true
    taskId?: true
    employeeId?: true
    stepId?: true
    progress?: true
  }

  export type WorkLogSumAggregateInputType = {
    id?: true
    taskId?: true
    employeeId?: true
    stepId?: true
    progress?: true
  }

  export type WorkLogMinAggregateInputType = {
    id?: true
    taskId?: true
    employeeId?: true
    stepId?: true
    workDate?: true
    notes?: true
    progress?: true
  }

  export type WorkLogMaxAggregateInputType = {
    id?: true
    taskId?: true
    employeeId?: true
    stepId?: true
    workDate?: true
    notes?: true
    progress?: true
  }

  export type WorkLogCountAggregateInputType = {
    id?: true
    taskId?: true
    employeeId?: true
    stepId?: true
    workDate?: true
    notes?: true
    progress?: true
    _all?: true
  }

  export type WorkLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkLog to aggregate.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkLogs
    **/
    _count?: true | WorkLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkLogMaxAggregateInputType
  }

  export type GetWorkLogAggregateType<T extends WorkLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkLog[P]>
      : GetScalarType<T[P], AggregateWorkLog[P]>
  }




  export type WorkLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkLogWhereInput
    orderBy?: WorkLogOrderByWithAggregationInput | WorkLogOrderByWithAggregationInput[]
    by: WorkLogScalarFieldEnum[] | WorkLogScalarFieldEnum
    having?: WorkLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkLogCountAggregateInputType | true
    _avg?: WorkLogAvgAggregateInputType
    _sum?: WorkLogSumAggregateInputType
    _min?: WorkLogMinAggregateInputType
    _max?: WorkLogMaxAggregateInputType
  }

  export type WorkLogGroupByOutputType = {
    id: number
    taskId: number
    employeeId: number
    stepId: number | null
    workDate: Date
    notes: string | null
    progress: number
    _count: WorkLogCountAggregateOutputType | null
    _avg: WorkLogAvgAggregateOutputType | null
    _sum: WorkLogSumAggregateOutputType | null
    _min: WorkLogMinAggregateOutputType | null
    _max: WorkLogMaxAggregateOutputType | null
  }

  type GetWorkLogGroupByPayload<T extends WorkLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    employeeId?: boolean
    stepId?: boolean
    workDate?: boolean
    notes?: boolean
    progress?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    step?: boolean | WorkLog$stepArgs<ExtArgs>
  }, ExtArgs["result"]["workLog"]>

  export type WorkLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    employeeId?: boolean
    stepId?: boolean
    workDate?: boolean
    notes?: boolean
    progress?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    step?: boolean | WorkLog$stepArgs<ExtArgs>
  }, ExtArgs["result"]["workLog"]>

  export type WorkLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    employeeId?: boolean
    stepId?: boolean
    workDate?: boolean
    notes?: boolean
    progress?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    step?: boolean | WorkLog$stepArgs<ExtArgs>
  }, ExtArgs["result"]["workLog"]>

  export type WorkLogSelectScalar = {
    id?: boolean
    taskId?: boolean
    employeeId?: boolean
    stepId?: boolean
    workDate?: boolean
    notes?: boolean
    progress?: boolean
  }

  export type WorkLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "employeeId" | "stepId" | "workDate" | "notes" | "progress", ExtArgs["result"]["workLog"]>
  export type WorkLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    step?: boolean | WorkLog$stepArgs<ExtArgs>
  }
  export type WorkLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    step?: boolean | WorkLog$stepArgs<ExtArgs>
  }
  export type WorkLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    employee?: boolean | UserDefaultArgs<ExtArgs>
    step?: boolean | WorkLog$stepArgs<ExtArgs>
  }

  export type $WorkLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkLog"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      employee: Prisma.$UserPayload<ExtArgs>
      step: Prisma.$StepPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      employeeId: number
      stepId: number | null
      workDate: Date
      notes: string | null
      progress: number
    }, ExtArgs["result"]["workLog"]>
    composites: {}
  }

  type WorkLogGetPayload<S extends boolean | null | undefined | WorkLogDefaultArgs> = $Result.GetResult<Prisma.$WorkLogPayload, S>

  type WorkLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkLogCountAggregateInputType | true
    }

  export interface WorkLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkLog'], meta: { name: 'WorkLog' } }
    /**
     * Find zero or one WorkLog that matches the filter.
     * @param {WorkLogFindUniqueArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkLogFindUniqueArgs>(args: SelectSubset<T, WorkLogFindUniqueArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkLogFindUniqueOrThrowArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogFindFirstArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkLogFindFirstArgs>(args?: SelectSubset<T, WorkLogFindFirstArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogFindFirstOrThrowArgs} args - Arguments to find a WorkLog
     * @example
     * // Get one WorkLog
     * const workLog = await prisma.workLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkLogs
     * const workLogs = await prisma.workLog.findMany()
     * 
     * // Get first 10 WorkLogs
     * const workLogs = await prisma.workLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workLogWithIdOnly = await prisma.workLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkLogFindManyArgs>(args?: SelectSubset<T, WorkLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkLog.
     * @param {WorkLogCreateArgs} args - Arguments to create a WorkLog.
     * @example
     * // Create one WorkLog
     * const WorkLog = await prisma.workLog.create({
     *   data: {
     *     // ... data to create a WorkLog
     *   }
     * })
     * 
     */
    create<T extends WorkLogCreateArgs>(args: SelectSubset<T, WorkLogCreateArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkLogs.
     * @param {WorkLogCreateManyArgs} args - Arguments to create many WorkLogs.
     * @example
     * // Create many WorkLogs
     * const workLog = await prisma.workLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkLogCreateManyArgs>(args?: SelectSubset<T, WorkLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkLogs and returns the data saved in the database.
     * @param {WorkLogCreateManyAndReturnArgs} args - Arguments to create many WorkLogs.
     * @example
     * // Create many WorkLogs
     * const workLog = await prisma.workLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkLogs and only return the `id`
     * const workLogWithIdOnly = await prisma.workLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkLog.
     * @param {WorkLogDeleteArgs} args - Arguments to delete one WorkLog.
     * @example
     * // Delete one WorkLog
     * const WorkLog = await prisma.workLog.delete({
     *   where: {
     *     // ... filter to delete one WorkLog
     *   }
     * })
     * 
     */
    delete<T extends WorkLogDeleteArgs>(args: SelectSubset<T, WorkLogDeleteArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkLog.
     * @param {WorkLogUpdateArgs} args - Arguments to update one WorkLog.
     * @example
     * // Update one WorkLog
     * const workLog = await prisma.workLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkLogUpdateArgs>(args: SelectSubset<T, WorkLogUpdateArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkLogs.
     * @param {WorkLogDeleteManyArgs} args - Arguments to filter WorkLogs to delete.
     * @example
     * // Delete a few WorkLogs
     * const { count } = await prisma.workLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkLogDeleteManyArgs>(args?: SelectSubset<T, WorkLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkLogs
     * const workLog = await prisma.workLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkLogUpdateManyArgs>(args: SelectSubset<T, WorkLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkLogs and returns the data updated in the database.
     * @param {WorkLogUpdateManyAndReturnArgs} args - Arguments to update many WorkLogs.
     * @example
     * // Update many WorkLogs
     * const workLog = await prisma.workLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkLogs and only return the `id`
     * const workLogWithIdOnly = await prisma.workLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkLog.
     * @param {WorkLogUpsertArgs} args - Arguments to update or create a WorkLog.
     * @example
     * // Update or create a WorkLog
     * const workLog = await prisma.workLog.upsert({
     *   create: {
     *     // ... data to create a WorkLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkLogUpsertArgs>(args: SelectSubset<T, WorkLogUpsertArgs<ExtArgs>>): Prisma__WorkLogClient<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogCountArgs} args - Arguments to filter WorkLogs to count.
     * @example
     * // Count the number of WorkLogs
     * const count = await prisma.workLog.count({
     *   where: {
     *     // ... the filter for the WorkLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkLogCountArgs>(
      args?: Subset<T, WorkLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkLogAggregateArgs>(args: Subset<T, WorkLogAggregateArgs>): Prisma.PrismaPromise<GetWorkLogAggregateType<T>>

    /**
     * Group by WorkLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkLogGroupByArgs} args - Group by arguments.
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
      T extends WorkLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkLog model
   */
  readonly fields: WorkLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    step<T extends WorkLog$stepArgs<ExtArgs> = {}>(args?: Subset<T, WorkLog$stepArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkLog model
   */
  interface WorkLogFieldRefs {
    readonly id: FieldRef<"WorkLog", 'Int'>
    readonly taskId: FieldRef<"WorkLog", 'Int'>
    readonly employeeId: FieldRef<"WorkLog", 'Int'>
    readonly stepId: FieldRef<"WorkLog", 'Int'>
    readonly workDate: FieldRef<"WorkLog", 'DateTime'>
    readonly notes: FieldRef<"WorkLog", 'String'>
    readonly progress: FieldRef<"WorkLog", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * WorkLog findUnique
   */
  export type WorkLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog findUniqueOrThrow
   */
  export type WorkLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog findFirst
   */
  export type WorkLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkLogs.
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLogs.
     */
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkLog findFirstOrThrow
   */
  export type WorkLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLog to fetch.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkLogs.
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkLogs.
     */
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkLog findMany
   */
  export type WorkLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkLogs to fetch.
     */
    where?: WorkLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkLogs to fetch.
     */
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkLogs.
     */
    cursor?: WorkLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkLogs.
     */
    skip?: number
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * WorkLog create
   */
  export type WorkLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkLog.
     */
    data: XOR<WorkLogCreateInput, WorkLogUncheckedCreateInput>
  }

  /**
   * WorkLog createMany
   */
  export type WorkLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkLogs.
     */
    data: WorkLogCreateManyInput | WorkLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkLog createManyAndReturn
   */
  export type WorkLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkLogs.
     */
    data: WorkLogCreateManyInput | WorkLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkLog update
   */
  export type WorkLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkLog.
     */
    data: XOR<WorkLogUpdateInput, WorkLogUncheckedUpdateInput>
    /**
     * Choose, which WorkLog to update.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog updateMany
   */
  export type WorkLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkLogs.
     */
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkLogs to update
     */
    where?: WorkLogWhereInput
    /**
     * Limit how many WorkLogs to update.
     */
    limit?: number
  }

  /**
   * WorkLog updateManyAndReturn
   */
  export type WorkLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * The data used to update WorkLogs.
     */
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkLogs to update
     */
    where?: WorkLogWhereInput
    /**
     * Limit how many WorkLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkLog upsert
   */
  export type WorkLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkLog to update in case it exists.
     */
    where: WorkLogWhereUniqueInput
    /**
     * In case the WorkLog found by the `where` argument doesn't exist, create a new WorkLog with this data.
     */
    create: XOR<WorkLogCreateInput, WorkLogUncheckedCreateInput>
    /**
     * In case the WorkLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkLogUpdateInput, WorkLogUncheckedUpdateInput>
  }

  /**
   * WorkLog delete
   */
  export type WorkLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    /**
     * Filter which WorkLog to delete.
     */
    where: WorkLogWhereUniqueInput
  }

  /**
   * WorkLog deleteMany
   */
  export type WorkLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkLogs to delete
     */
    where?: WorkLogWhereInput
    /**
     * Limit how many WorkLogs to delete.
     */
    limit?: number
  }

  /**
   * WorkLog.step
   */
  export type WorkLog$stepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
  }

  /**
   * WorkLog without action
   */
  export type WorkLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    progress: number | null
  }

  export type StepSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    progress: number | null
  }

  export type StepMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    name: string | null
    completed: boolean | null
    progress: number | null
  }

  export type StepMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    name: string | null
    completed: boolean | null
    progress: number | null
  }

  export type StepCountAggregateOutputType = {
    id: number
    taskId: number
    name: number
    completed: number
    progress: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    id?: true
    taskId?: true
    progress?: true
  }

  export type StepSumAggregateInputType = {
    id?: true
    taskId?: true
    progress?: true
  }

  export type StepMinAggregateInputType = {
    id?: true
    taskId?: true
    name?: true
    completed?: true
    progress?: true
  }

  export type StepMaxAggregateInputType = {
    id?: true
    taskId?: true
    name?: true
    completed?: true
    progress?: true
  }

  export type StepCountAggregateInputType = {
    id?: true
    taskId?: true
    name?: true
    completed?: true
    progress?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    id: number
    taskId: number
    name: string
    completed: boolean
    progress: number
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    name?: boolean
    completed?: boolean
    progress?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    WorkLog?: boolean | Step$WorkLogArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    name?: boolean
    completed?: boolean
    progress?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    name?: boolean
    completed?: boolean
    progress?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    id?: boolean
    taskId?: boolean
    name?: boolean
    completed?: boolean
    progress?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "name" | "completed" | "progress", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    WorkLog?: boolean | Step$WorkLogArgs<ExtArgs>
    _count?: boolean | StepCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      WorkLog: Prisma.$WorkLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      name: string
      completed: boolean
      progress: number
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
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
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
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
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    WorkLog<T extends Step$WorkLogArgs<ExtArgs> = {}>(args?: Subset<T, Step$WorkLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly id: FieldRef<"Step", 'Int'>
    readonly taskId: FieldRef<"Step", 'Int'>
    readonly name: FieldRef<"Step", 'String'>
    readonly completed: FieldRef<"Step", 'Boolean'>
    readonly progress: FieldRef<"Step", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step.WorkLog
   */
  export type Step$WorkLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkLog
     */
    select?: WorkLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkLog
     */
    omit?: WorkLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkLogInclude<ExtArgs> | null
    where?: WorkLogWhereInput
    orderBy?: WorkLogOrderByWithRelationInput | WorkLogOrderByWithRelationInput[]
    cursor?: WorkLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkLogScalarFieldEnum | WorkLogScalarFieldEnum[]
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ReminderSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ReminderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    isDone: boolean | null
    remindAt: Date | null
    createdAt: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    isDone: boolean | null
    remindAt: Date | null
    createdAt: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    isDone: number
    remindAt: number
    createdAt: number
    _all: number
  }


  export type ReminderAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ReminderSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ReminderMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isDone?: true
    remindAt?: true
    createdAt?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isDone?: true
    remindAt?: true
    createdAt?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isDone?: true
    remindAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _avg?: ReminderAvgAggregateInputType
    _sum?: ReminderSumAggregateInputType
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: number
    userId: number
    message: string
    isDone: boolean
    remindAt: Date
    createdAt: Date
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isDone?: boolean
    remindAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isDone?: boolean
    remindAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isDone?: boolean
    remindAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    isDone?: boolean
    remindAt?: boolean
    createdAt?: boolean
  }

  export type ReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "isDone" | "remindAt" | "createdAt", ExtArgs["result"]["reminder"]>
  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      message: string
      isDone: boolean
      remindAt: Date
      createdAt: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {ReminderUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reminder model
   */
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'Int'>
    readonly userId: FieldRef<"Reminder", 'Int'>
    readonly message: FieldRef<"Reminder", 'String'>
    readonly isDone: FieldRef<"Reminder", 'Boolean'>
    readonly remindAt: FieldRef<"Reminder", 'DateTime'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder updateManyAndReturn
   */
  export type ReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model Customlog
   */

  export type AggregateCustomlog = {
    _count: CustomlogCountAggregateOutputType | null
    _avg: CustomlogAvgAggregateOutputType | null
    _sum: CustomlogSumAggregateOutputType | null
    _min: CustomlogMinAggregateOutputType | null
    _max: CustomlogMaxAggregateOutputType | null
  }

  export type CustomlogAvgAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type CustomlogSumAggregateOutputType = {
    id: number | null
    employeeId: number | null
  }

  export type CustomlogMinAggregateOutputType = {
    id: number | null
    employeeId: number | null
    title: string | null
    description: string | null
    workDate: Date | null
  }

  export type CustomlogMaxAggregateOutputType = {
    id: number | null
    employeeId: number | null
    title: string | null
    description: string | null
    workDate: Date | null
  }

  export type CustomlogCountAggregateOutputType = {
    id: number
    employeeId: number
    title: number
    description: number
    workDate: number
    _all: number
  }


  export type CustomlogAvgAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type CustomlogSumAggregateInputType = {
    id?: true
    employeeId?: true
  }

  export type CustomlogMinAggregateInputType = {
    id?: true
    employeeId?: true
    title?: true
    description?: true
    workDate?: true
  }

  export type CustomlogMaxAggregateInputType = {
    id?: true
    employeeId?: true
    title?: true
    description?: true
    workDate?: true
  }

  export type CustomlogCountAggregateInputType = {
    id?: true
    employeeId?: true
    title?: true
    description?: true
    workDate?: true
    _all?: true
  }

  export type CustomlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customlog to aggregate.
     */
    where?: CustomlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customlogs to fetch.
     */
    orderBy?: CustomlogOrderByWithRelationInput | CustomlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customlogs
    **/
    _count?: true | CustomlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomlogMaxAggregateInputType
  }

  export type GetCustomlogAggregateType<T extends CustomlogAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomlog[P]>
      : GetScalarType<T[P], AggregateCustomlog[P]>
  }




  export type CustomlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomlogWhereInput
    orderBy?: CustomlogOrderByWithAggregationInput | CustomlogOrderByWithAggregationInput[]
    by: CustomlogScalarFieldEnum[] | CustomlogScalarFieldEnum
    having?: CustomlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomlogCountAggregateInputType | true
    _avg?: CustomlogAvgAggregateInputType
    _sum?: CustomlogSumAggregateInputType
    _min?: CustomlogMinAggregateInputType
    _max?: CustomlogMaxAggregateInputType
  }

  export type CustomlogGroupByOutputType = {
    id: number
    employeeId: number
    title: string
    description: string
    workDate: Date
    _count: CustomlogCountAggregateOutputType | null
    _avg: CustomlogAvgAggregateOutputType | null
    _sum: CustomlogSumAggregateOutputType | null
    _min: CustomlogMinAggregateOutputType | null
    _max: CustomlogMaxAggregateOutputType | null
  }

  type GetCustomlogGroupByPayload<T extends CustomlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomlogGroupByOutputType[P]>
            : GetScalarType<T[P], CustomlogGroupByOutputType[P]>
        }
      >
    >


  export type CustomlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    workDate?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customlog"]>

  export type CustomlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    workDate?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customlog"]>

  export type CustomlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    workDate?: boolean
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customlog"]>

  export type CustomlogSelectScalar = {
    id?: boolean
    employeeId?: boolean
    title?: boolean
    description?: boolean
    workDate?: boolean
  }

  export type CustomlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "title" | "description" | "workDate", ExtArgs["result"]["customlog"]>
  export type CustomlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customlog"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: number
      title: string
      description: string
      workDate: Date
    }, ExtArgs["result"]["customlog"]>
    composites: {}
  }

  type CustomlogGetPayload<S extends boolean | null | undefined | CustomlogDefaultArgs> = $Result.GetResult<Prisma.$CustomlogPayload, S>

  type CustomlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomlogCountAggregateInputType | true
    }

  export interface CustomlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customlog'], meta: { name: 'Customlog' } }
    /**
     * Find zero or one Customlog that matches the filter.
     * @param {CustomlogFindUniqueArgs} args - Arguments to find a Customlog
     * @example
     * // Get one Customlog
     * const customlog = await prisma.customlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomlogFindUniqueArgs>(args: SelectSubset<T, CustomlogFindUniqueArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomlogFindUniqueOrThrowArgs} args - Arguments to find a Customlog
     * @example
     * // Get one Customlog
     * const customlog = await prisma.customlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomlogFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogFindFirstArgs} args - Arguments to find a Customlog
     * @example
     * // Get one Customlog
     * const customlog = await prisma.customlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomlogFindFirstArgs>(args?: SelectSubset<T, CustomlogFindFirstArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogFindFirstOrThrowArgs} args - Arguments to find a Customlog
     * @example
     * // Get one Customlog
     * const customlog = await prisma.customlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomlogFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customlogs
     * const customlogs = await prisma.customlog.findMany()
     * 
     * // Get first 10 Customlogs
     * const customlogs = await prisma.customlog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customlogWithIdOnly = await prisma.customlog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomlogFindManyArgs>(args?: SelectSubset<T, CustomlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customlog.
     * @param {CustomlogCreateArgs} args - Arguments to create a Customlog.
     * @example
     * // Create one Customlog
     * const Customlog = await prisma.customlog.create({
     *   data: {
     *     // ... data to create a Customlog
     *   }
     * })
     * 
     */
    create<T extends CustomlogCreateArgs>(args: SelectSubset<T, CustomlogCreateArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customlogs.
     * @param {CustomlogCreateManyArgs} args - Arguments to create many Customlogs.
     * @example
     * // Create many Customlogs
     * const customlog = await prisma.customlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomlogCreateManyArgs>(args?: SelectSubset<T, CustomlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customlogs and returns the data saved in the database.
     * @param {CustomlogCreateManyAndReturnArgs} args - Arguments to create many Customlogs.
     * @example
     * // Create many Customlogs
     * const customlog = await prisma.customlog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customlogs and only return the `id`
     * const customlogWithIdOnly = await prisma.customlog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomlogCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customlog.
     * @param {CustomlogDeleteArgs} args - Arguments to delete one Customlog.
     * @example
     * // Delete one Customlog
     * const Customlog = await prisma.customlog.delete({
     *   where: {
     *     // ... filter to delete one Customlog
     *   }
     * })
     * 
     */
    delete<T extends CustomlogDeleteArgs>(args: SelectSubset<T, CustomlogDeleteArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customlog.
     * @param {CustomlogUpdateArgs} args - Arguments to update one Customlog.
     * @example
     * // Update one Customlog
     * const customlog = await prisma.customlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomlogUpdateArgs>(args: SelectSubset<T, CustomlogUpdateArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customlogs.
     * @param {CustomlogDeleteManyArgs} args - Arguments to filter Customlogs to delete.
     * @example
     * // Delete a few Customlogs
     * const { count } = await prisma.customlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomlogDeleteManyArgs>(args?: SelectSubset<T, CustomlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customlogs
     * const customlog = await prisma.customlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomlogUpdateManyArgs>(args: SelectSubset<T, CustomlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customlogs and returns the data updated in the database.
     * @param {CustomlogUpdateManyAndReturnArgs} args - Arguments to update many Customlogs.
     * @example
     * // Update many Customlogs
     * const customlog = await prisma.customlog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customlogs and only return the `id`
     * const customlogWithIdOnly = await prisma.customlog.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomlogUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customlog.
     * @param {CustomlogUpsertArgs} args - Arguments to update or create a Customlog.
     * @example
     * // Update or create a Customlog
     * const customlog = await prisma.customlog.upsert({
     *   create: {
     *     // ... data to create a Customlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customlog we want to update
     *   }
     * })
     */
    upsert<T extends CustomlogUpsertArgs>(args: SelectSubset<T, CustomlogUpsertArgs<ExtArgs>>): Prisma__CustomlogClient<$Result.GetResult<Prisma.$CustomlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogCountArgs} args - Arguments to filter Customlogs to count.
     * @example
     * // Count the number of Customlogs
     * const count = await prisma.customlog.count({
     *   where: {
     *     // ... the filter for the Customlogs we want to count
     *   }
     * })
    **/
    count<T extends CustomlogCountArgs>(
      args?: Subset<T, CustomlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomlogAggregateArgs>(args: Subset<T, CustomlogAggregateArgs>): Prisma.PrismaPromise<GetCustomlogAggregateType<T>>

    /**
     * Group by Customlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomlogGroupByArgs} args - Group by arguments.
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
      T extends CustomlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomlogGroupByArgs['orderBy'] }
        : { orderBy?: CustomlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customlog model
   */
  readonly fields: CustomlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Customlog model
   */
  interface CustomlogFieldRefs {
    readonly id: FieldRef<"Customlog", 'Int'>
    readonly employeeId: FieldRef<"Customlog", 'Int'>
    readonly title: FieldRef<"Customlog", 'String'>
    readonly description: FieldRef<"Customlog", 'String'>
    readonly workDate: FieldRef<"Customlog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customlog findUnique
   */
  export type CustomlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * Filter, which Customlog to fetch.
     */
    where: CustomlogWhereUniqueInput
  }

  /**
   * Customlog findUniqueOrThrow
   */
  export type CustomlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * Filter, which Customlog to fetch.
     */
    where: CustomlogWhereUniqueInput
  }

  /**
   * Customlog findFirst
   */
  export type CustomlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * Filter, which Customlog to fetch.
     */
    where?: CustomlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customlogs to fetch.
     */
    orderBy?: CustomlogOrderByWithRelationInput | CustomlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customlogs.
     */
    cursor?: CustomlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customlogs.
     */
    distinct?: CustomlogScalarFieldEnum | CustomlogScalarFieldEnum[]
  }

  /**
   * Customlog findFirstOrThrow
   */
  export type CustomlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * Filter, which Customlog to fetch.
     */
    where?: CustomlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customlogs to fetch.
     */
    orderBy?: CustomlogOrderByWithRelationInput | CustomlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customlogs.
     */
    cursor?: CustomlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customlogs.
     */
    distinct?: CustomlogScalarFieldEnum | CustomlogScalarFieldEnum[]
  }

  /**
   * Customlog findMany
   */
  export type CustomlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * Filter, which Customlogs to fetch.
     */
    where?: CustomlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customlogs to fetch.
     */
    orderBy?: CustomlogOrderByWithRelationInput | CustomlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customlogs.
     */
    cursor?: CustomlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customlogs.
     */
    skip?: number
    distinct?: CustomlogScalarFieldEnum | CustomlogScalarFieldEnum[]
  }

  /**
   * Customlog create
   */
  export type CustomlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Customlog.
     */
    data: XOR<CustomlogCreateInput, CustomlogUncheckedCreateInput>
  }

  /**
   * Customlog createMany
   */
  export type CustomlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customlogs.
     */
    data: CustomlogCreateManyInput | CustomlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customlog createManyAndReturn
   */
  export type CustomlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * The data used to create many Customlogs.
     */
    data: CustomlogCreateManyInput | CustomlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customlog update
   */
  export type CustomlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Customlog.
     */
    data: XOR<CustomlogUpdateInput, CustomlogUncheckedUpdateInput>
    /**
     * Choose, which Customlog to update.
     */
    where: CustomlogWhereUniqueInput
  }

  /**
   * Customlog updateMany
   */
  export type CustomlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customlogs.
     */
    data: XOR<CustomlogUpdateManyMutationInput, CustomlogUncheckedUpdateManyInput>
    /**
     * Filter which Customlogs to update
     */
    where?: CustomlogWhereInput
    /**
     * Limit how many Customlogs to update.
     */
    limit?: number
  }

  /**
   * Customlog updateManyAndReturn
   */
  export type CustomlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * The data used to update Customlogs.
     */
    data: XOR<CustomlogUpdateManyMutationInput, CustomlogUncheckedUpdateManyInput>
    /**
     * Filter which Customlogs to update
     */
    where?: CustomlogWhereInput
    /**
     * Limit how many Customlogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customlog upsert
   */
  export type CustomlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Customlog to update in case it exists.
     */
    where: CustomlogWhereUniqueInput
    /**
     * In case the Customlog found by the `where` argument doesn't exist, create a new Customlog with this data.
     */
    create: XOR<CustomlogCreateInput, CustomlogUncheckedCreateInput>
    /**
     * In case the Customlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomlogUpdateInput, CustomlogUncheckedUpdateInput>
  }

  /**
   * Customlog delete
   */
  export type CustomlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
    /**
     * Filter which Customlog to delete.
     */
    where: CustomlogWhereUniqueInput
  }

  /**
   * Customlog deleteMany
   */
  export type CustomlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customlogs to delete
     */
    where?: CustomlogWhereInput
    /**
     * Limit how many Customlogs to delete.
     */
    limit?: number
  }

  /**
   * Customlog without action
   */
  export type CustomlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customlog
     */
    select?: CustomlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customlog
     */
    omit?: CustomlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomlogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    phone: 'phone',
    role: 'role',
    managerId: 'managerId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImageGenerationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    style: 'style',
    createdAt: 'createdAt'
  };

  export type ImageGenerationScalarFieldEnum = (typeof ImageGenerationScalarFieldEnum)[keyof typeof ImageGenerationScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    type: 'type',
    projectId: 'projectId',
    assignedToId: 'assignedToId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    isRead: 'isRead'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    paymentProgress: 'paymentProgress'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectId: 'projectId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SubcategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId'
  };

  export type SubcategoryScalarFieldEnum = (typeof SubcategoryScalarFieldEnum)[keyof typeof SubcategoryScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    subcategoryId: 'subcategoryId',
    assignedById: 'assignedById',
    assignedToId: 'assignedToId',
    deadline: 'deadline'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const WorkLogScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    employeeId: 'employeeId',
    stepId: 'stepId',
    workDate: 'workDate',
    notes: 'notes',
    progress: 'progress'
  };

  export type WorkLogScalarFieldEnum = (typeof WorkLogScalarFieldEnum)[keyof typeof WorkLogScalarFieldEnum]


  export const StepScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    name: 'name',
    completed: 'completed',
    progress: 'progress'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    isDone: 'isDone',
    remindAt: 'remindAt',
    createdAt: 'createdAt'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const CustomlogScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    title: 'title',
    description: 'description',
    workDate: 'workDate'
  };

  export type CustomlogScalarFieldEnum = (typeof CustomlogScalarFieldEnum)[keyof typeof CustomlogScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnnouncementType'
   */
  export type EnumAnnouncementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementType'>
    


  /**
   * Reference to a field of type 'AnnouncementType[]'
   */
  export type ListEnumAnnouncementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    managerId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    employees?: UserListRelationFilter
    tasksAssigned?: TaskListRelationFilter
    tasksReceived?: TaskListRelationFilter
    workLogs?: WorkLogListRelationFilter
    announcementsReceived?: AnnouncementListRelationFilter
    announcementsCreated?: AnnouncementListRelationFilter
    Reminder?: ReminderListRelationFilter
    customLogs?: CustomlogListRelationFilter
    imageGenerations?: ImageGenerationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    manager?: UserOrderByWithRelationInput
    employees?: UserOrderByRelationAggregateInput
    tasksAssigned?: TaskOrderByRelationAggregateInput
    tasksReceived?: TaskOrderByRelationAggregateInput
    workLogs?: WorkLogOrderByRelationAggregateInput
    announcementsReceived?: AnnouncementOrderByRelationAggregateInput
    announcementsCreated?: AnnouncementOrderByRelationAggregateInput
    Reminder?: ReminderOrderByRelationAggregateInput
    customLogs?: CustomlogOrderByRelationAggregateInput
    imageGenerations?: ImageGenerationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    managerId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    employees?: UserListRelationFilter
    tasksAssigned?: TaskListRelationFilter
    tasksReceived?: TaskListRelationFilter
    workLogs?: WorkLogListRelationFilter
    announcementsReceived?: AnnouncementListRelationFilter
    announcementsCreated?: AnnouncementListRelationFilter
    Reminder?: ReminderListRelationFilter
    customLogs?: CustomlogListRelationFilter
    imageGenerations?: ImageGenerationListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    managerId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ImageGenerationWhereInput = {
    AND?: ImageGenerationWhereInput | ImageGenerationWhereInput[]
    OR?: ImageGenerationWhereInput[]
    NOT?: ImageGenerationWhereInput | ImageGenerationWhereInput[]
    id?: IntFilter<"ImageGeneration"> | number
    userId?: IntFilter<"ImageGeneration"> | number
    style?: StringFilter<"ImageGeneration"> | string
    createdAt?: DateTimeFilter<"ImageGeneration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ImageGenerationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ImageGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageGenerationWhereInput | ImageGenerationWhereInput[]
    OR?: ImageGenerationWhereInput[]
    NOT?: ImageGenerationWhereInput | ImageGenerationWhereInput[]
    userId?: IntFilter<"ImageGeneration"> | number
    style?: StringFilter<"ImageGeneration"> | string
    createdAt?: DateTimeFilter<"ImageGeneration"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ImageGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
    _count?: ImageGenerationCountOrderByAggregateInput
    _avg?: ImageGenerationAvgOrderByAggregateInput
    _max?: ImageGenerationMaxOrderByAggregateInput
    _min?: ImageGenerationMinOrderByAggregateInput
    _sum?: ImageGenerationSumOrderByAggregateInput
  }

  export type ImageGenerationScalarWhereWithAggregatesInput = {
    AND?: ImageGenerationScalarWhereWithAggregatesInput | ImageGenerationScalarWhereWithAggregatesInput[]
    OR?: ImageGenerationScalarWhereWithAggregatesInput[]
    NOT?: ImageGenerationScalarWhereWithAggregatesInput | ImageGenerationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageGeneration"> | number
    userId?: IntWithAggregatesFilter<"ImageGeneration"> | number
    style?: StringWithAggregatesFilter<"ImageGeneration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ImageGeneration"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    message?: StringFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeFilter<"Announcement"> | $Enums.AnnouncementType
    projectId?: IntNullableFilter<"Announcement"> | number | null
    assignedToId?: IntNullableFilter<"Announcement"> | number | null
    createdById?: IntNullableFilter<"Announcement"> | number | null
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    isRead?: BoolFilter<"Announcement"> | boolean
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    projectId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    project?: ProjectOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    message?: StringFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeFilter<"Announcement"> | $Enums.AnnouncementType
    projectId?: IntNullableFilter<"Announcement"> | number | null
    assignedToId?: IntNullableFilter<"Announcement"> | number | null
    createdById?: IntNullableFilter<"Announcement"> | number | null
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    isRead?: BoolFilter<"Announcement"> | boolean
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    projectId?: SortOrderInput | SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Announcement"> | number
    title?: StringWithAggregatesFilter<"Announcement"> | string
    message?: StringWithAggregatesFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeWithAggregatesFilter<"Announcement"> | $Enums.AnnouncementType
    projectId?: IntNullableWithAggregatesFilter<"Announcement"> | number | null
    assignedToId?: IntNullableWithAggregatesFilter<"Announcement"> | number | null
    createdById?: IntNullableWithAggregatesFilter<"Announcement"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Announcement"> | boolean
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    paymentProgress?: FloatNullableFilter<"Project"> | number | null
    categories?: CategoryListRelationFilter
    Announcement?: AnnouncementListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    paymentProgress?: SortOrderInput | SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    Announcement?: AnnouncementOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    paymentProgress?: FloatNullableFilter<"Project"> | number | null
    categories?: CategoryListRelationFilter
    Announcement?: AnnouncementListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    paymentProgress?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    paymentProgress?: FloatNullableWithAggregatesFilter<"Project"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    projectId?: IntFilter<"Category"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    subcats?: SubcategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    subcats?: SubcategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    projectId?: IntFilter<"Category"> | number
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    subcats?: SubcategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    projectId?: IntWithAggregatesFilter<"Category"> | number
  }

  export type SubcategoryWhereInput = {
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    id?: IntFilter<"Subcategory"> | number
    name?: StringFilter<"Subcategory"> | string
    categoryId?: IntFilter<"Subcategory"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type SubcategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubcategoryWhereInput | SubcategoryWhereInput[]
    OR?: SubcategoryWhereInput[]
    NOT?: SubcategoryWhereInput | SubcategoryWhereInput[]
    name?: StringFilter<"Subcategory"> | string
    categoryId?: IntFilter<"Subcategory"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type SubcategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    _count?: SubcategoryCountOrderByAggregateInput
    _avg?: SubcategoryAvgOrderByAggregateInput
    _max?: SubcategoryMaxOrderByAggregateInput
    _min?: SubcategoryMinOrderByAggregateInput
    _sum?: SubcategorySumOrderByAggregateInput
  }

  export type SubcategoryScalarWhereWithAggregatesInput = {
    AND?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    OR?: SubcategoryScalarWhereWithAggregatesInput[]
    NOT?: SubcategoryScalarWhereWithAggregatesInput | SubcategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subcategory"> | number
    name?: StringWithAggregatesFilter<"Subcategory"> | string
    categoryId?: IntWithAggregatesFilter<"Subcategory"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    subcategoryId?: IntFilter<"Task"> | number
    assignedById?: IntNullableFilter<"Task"> | number | null
    assignedToId?: IntFilter<"Task"> | number
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
    assignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    workLogs?: WorkLogListRelationFilter
    steps?: StepListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    deadline?: SortOrderInput | SortOrder
    subcategory?: SubcategoryOrderByWithRelationInput
    assignedBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    workLogs?: WorkLogOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    subcategoryId?: IntFilter<"Task"> | number
    assignedById?: IntNullableFilter<"Task"> | number | null
    assignedToId?: IntFilter<"Task"> | number
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
    subcategory?: XOR<SubcategoryScalarRelationFilter, SubcategoryWhereInput>
    assignedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    workLogs?: WorkLogListRelationFilter
    steps?: StepListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrderInput | SortOrder
    assignedToId?: SortOrder
    deadline?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    subcategoryId?: IntWithAggregatesFilter<"Task"> | number
    assignedById?: IntNullableWithAggregatesFilter<"Task"> | number | null
    assignedToId?: IntWithAggregatesFilter<"Task"> | number
    deadline?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type WorkLogWhereInput = {
    AND?: WorkLogWhereInput | WorkLogWhereInput[]
    OR?: WorkLogWhereInput[]
    NOT?: WorkLogWhereInput | WorkLogWhereInput[]
    id?: IntFilter<"WorkLog"> | number
    taskId?: IntFilter<"WorkLog"> | number
    employeeId?: IntFilter<"WorkLog"> | number
    stepId?: IntNullableFilter<"WorkLog"> | number | null
    workDate?: DateTimeFilter<"WorkLog"> | Date | string
    notes?: StringNullableFilter<"WorkLog"> | string | null
    progress?: FloatFilter<"WorkLog"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    step?: XOR<StepNullableScalarRelationFilter, StepWhereInput> | null
  }

  export type WorkLogOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrderInput | SortOrder
    workDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    progress?: SortOrder
    task?: TaskOrderByWithRelationInput
    employee?: UserOrderByWithRelationInput
    step?: StepOrderByWithRelationInput
  }

  export type WorkLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkLogWhereInput | WorkLogWhereInput[]
    OR?: WorkLogWhereInput[]
    NOT?: WorkLogWhereInput | WorkLogWhereInput[]
    taskId?: IntFilter<"WorkLog"> | number
    employeeId?: IntFilter<"WorkLog"> | number
    stepId?: IntNullableFilter<"WorkLog"> | number | null
    workDate?: DateTimeFilter<"WorkLog"> | Date | string
    notes?: StringNullableFilter<"WorkLog"> | string | null
    progress?: FloatFilter<"WorkLog"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
    step?: XOR<StepNullableScalarRelationFilter, StepWhereInput> | null
  }, "id">

  export type WorkLogOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrderInput | SortOrder
    workDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    progress?: SortOrder
    _count?: WorkLogCountOrderByAggregateInput
    _avg?: WorkLogAvgOrderByAggregateInput
    _max?: WorkLogMaxOrderByAggregateInput
    _min?: WorkLogMinOrderByAggregateInput
    _sum?: WorkLogSumOrderByAggregateInput
  }

  export type WorkLogScalarWhereWithAggregatesInput = {
    AND?: WorkLogScalarWhereWithAggregatesInput | WorkLogScalarWhereWithAggregatesInput[]
    OR?: WorkLogScalarWhereWithAggregatesInput[]
    NOT?: WorkLogScalarWhereWithAggregatesInput | WorkLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkLog"> | number
    taskId?: IntWithAggregatesFilter<"WorkLog"> | number
    employeeId?: IntWithAggregatesFilter<"WorkLog"> | number
    stepId?: IntNullableWithAggregatesFilter<"WorkLog"> | number | null
    workDate?: DateTimeWithAggregatesFilter<"WorkLog"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"WorkLog"> | string | null
    progress?: FloatWithAggregatesFilter<"WorkLog"> | number
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    id?: IntFilter<"Step"> | number
    taskId?: IntFilter<"Step"> | number
    name?: StringFilter<"Step"> | string
    completed?: BoolFilter<"Step"> | boolean
    progress?: FloatFilter<"Step"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    WorkLog?: WorkLogListRelationFilter
  }

  export type StepOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    progress?: SortOrder
    task?: TaskOrderByWithRelationInput
    WorkLog?: WorkLogOrderByRelationAggregateInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    taskId?: IntFilter<"Step"> | number
    name?: StringFilter<"Step"> | string
    completed?: BoolFilter<"Step"> | boolean
    progress?: FloatFilter<"Step"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    WorkLog?: WorkLogListRelationFilter
  }, "id">

  export type StepOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    progress?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Step"> | number
    taskId?: IntWithAggregatesFilter<"Step"> | number
    name?: StringWithAggregatesFilter<"Step"> | string
    completed?: BoolWithAggregatesFilter<"Step"> | boolean
    progress?: FloatWithAggregatesFilter<"Step"> | number
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: IntFilter<"Reminder"> | number
    userId?: IntFilter<"Reminder"> | number
    message?: StringFilter<"Reminder"> | string
    isDone?: BoolFilter<"Reminder"> | boolean
    remindAt?: DateTimeFilter<"Reminder"> | Date | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isDone?: SortOrder
    remindAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    userId?: IntFilter<"Reminder"> | number
    message?: StringFilter<"Reminder"> | string
    isDone?: BoolFilter<"Reminder"> | boolean
    remindAt?: DateTimeFilter<"Reminder"> | Date | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isDone?: SortOrder
    remindAt?: SortOrder
    createdAt?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _avg?: ReminderAvgOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
    _sum?: ReminderSumOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reminder"> | number
    userId?: IntWithAggregatesFilter<"Reminder"> | number
    message?: StringWithAggregatesFilter<"Reminder"> | string
    isDone?: BoolWithAggregatesFilter<"Reminder"> | boolean
    remindAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type CustomlogWhereInput = {
    AND?: CustomlogWhereInput | CustomlogWhereInput[]
    OR?: CustomlogWhereInput[]
    NOT?: CustomlogWhereInput | CustomlogWhereInput[]
    id?: IntFilter<"Customlog"> | number
    employeeId?: IntFilter<"Customlog"> | number
    title?: StringFilter<"Customlog"> | string
    description?: StringFilter<"Customlog"> | string
    workDate?: DateTimeFilter<"Customlog"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CustomlogOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workDate?: SortOrder
    employee?: UserOrderByWithRelationInput
  }

  export type CustomlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomlogWhereInput | CustomlogWhereInput[]
    OR?: CustomlogWhereInput[]
    NOT?: CustomlogWhereInput | CustomlogWhereInput[]
    employeeId?: IntFilter<"Customlog"> | number
    title?: StringFilter<"Customlog"> | string
    description?: StringFilter<"Customlog"> | string
    workDate?: DateTimeFilter<"Customlog"> | Date | string
    employee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CustomlogOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workDate?: SortOrder
    _count?: CustomlogCountOrderByAggregateInput
    _avg?: CustomlogAvgOrderByAggregateInput
    _max?: CustomlogMaxOrderByAggregateInput
    _min?: CustomlogMinOrderByAggregateInput
    _sum?: CustomlogSumOrderByAggregateInput
  }

  export type CustomlogScalarWhereWithAggregatesInput = {
    AND?: CustomlogScalarWhereWithAggregatesInput | CustomlogScalarWhereWithAggregatesInput[]
    OR?: CustomlogScalarWhereWithAggregatesInput[]
    NOT?: CustomlogScalarWhereWithAggregatesInput | CustomlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customlog"> | number
    employeeId?: IntWithAggregatesFilter<"Customlog"> | number
    title?: StringWithAggregatesFilter<"Customlog"> | string
    description?: StringWithAggregatesFilter<"Customlog"> | string
    workDate?: DateTimeWithAggregatesFilter<"Customlog"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageGenerationCreateInput = {
    style: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImageGenerationsInput
  }

  export type ImageGenerationUncheckedCreateInput = {
    id?: number
    userId: number
    style: string
    createdAt?: Date | string
  }

  export type ImageGenerationUpdateInput = {
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImageGenerationsNestedInput
  }

  export type ImageGenerationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageGenerationCreateManyInput = {
    id?: number
    userId: number
    style: string
    createdAt?: Date | string
  }

  export type ImageGenerationUpdateManyMutationInput = {
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageGenerationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    title: string
    message: string
    type?: $Enums.AnnouncementType
    createdAt?: Date | string
    isRead?: boolean
    project?: ProjectCreateNestedOneWithoutAnnouncementInput
    assignedTo?: UserCreateNestedOneWithoutAnnouncementsReceivedInput
    createdBy?: UserCreateNestedOneWithoutAnnouncementsCreatedInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    projectId?: number | null
    assignedToId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type AnnouncementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneWithoutAnnouncementNestedInput
    assignedTo?: UserUpdateOneWithoutAnnouncementsReceivedNestedInput
    createdBy?: UserUpdateOneWithoutAnnouncementsCreatedNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementCreateManyInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    projectId?: number | null
    assignedToId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type AnnouncementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
    categories?: CategoryCreateNestedManyWithoutProjectInput
    Announcement?: AnnouncementCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectInput
    Announcement?: AnnouncementUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: CategoryUpdateManyWithoutProjectNestedInput
    Announcement?: AnnouncementUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: CategoryUncheckedUpdateManyWithoutProjectNestedInput
    Announcement?: AnnouncementUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    name: string
    project: ProjectCreateNestedOneWithoutCategoriesInput
    subcats?: SubcategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    projectId: number
    subcats?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutCategoriesNestedInput
    subcats?: SubcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    subcats?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    projectId: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type SubcategoryCreateInput = {
    name: string
    category: CategoryCreateNestedOneWithoutSubcatsInput
    tasks?: TaskCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateInput = {
    id?: number
    name: string
    categoryId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubcatsNestedInput
    tasks?: TaskUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryCreateManyInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type SubcategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubcategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    deadline?: Date | string | null
    subcategory: SubcategoryCreateNestedOneWithoutTasksInput
    assignedBy?: UserCreateNestedOneWithoutTasksAssignedInput
    assignedTo: UserCreateNestedOneWithoutTasksReceivedInput
    workLogs?: WorkLogCreateNestedManyWithoutTaskInput
    steps?: StepCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedById?: number | null
    assignedToId: number
    deadline?: Date | string | null
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutTaskInput
    steps?: StepUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory?: SubcategoryUpdateOneRequiredWithoutTasksNestedInput
    assignedBy?: UserUpdateOneWithoutTasksAssignedNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutTasksReceivedNestedInput
    workLogs?: WorkLogUpdateManyWithoutTaskNestedInput
    steps?: StepUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workLogs?: WorkLogUncheckedUpdateManyWithoutTaskNestedInput
    steps?: StepUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedById?: number | null
    assignedToId: number
    deadline?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkLogCreateInput = {
    workDate?: Date | string
    notes?: string | null
    progress?: number
    task: TaskCreateNestedOneWithoutWorkLogsInput
    employee: UserCreateNestedOneWithoutWorkLogsInput
    step?: StepCreateNestedOneWithoutWorkLogInput
  }

  export type WorkLogUncheckedCreateInput = {
    id?: number
    taskId: number
    employeeId: number
    stepId?: number | null
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type WorkLogUpdateInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutWorkLogsNestedInput
    employee?: UserUpdateOneRequiredWithoutWorkLogsNestedInput
    step?: StepUpdateOneWithoutWorkLogNestedInput
  }

  export type WorkLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    stepId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkLogCreateManyInput = {
    id?: number
    taskId: number
    employeeId: number
    stepId?: number | null
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type WorkLogUpdateManyMutationInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    stepId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type StepCreateInput = {
    name: string
    completed?: boolean
    progress?: number
    task: TaskCreateNestedOneWithoutStepsInput
    WorkLog?: WorkLogCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateInput = {
    id?: number
    taskId: number
    name: string
    completed?: boolean
    progress?: number
    WorkLog?: WorkLogUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutStepsNestedInput
    WorkLog?: WorkLogUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    WorkLog?: WorkLogUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepCreateManyInput = {
    id?: number
    taskId: number
    name: string
    completed?: boolean
    progress?: number
  }

  export type StepUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type StepUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type ReminderCreateInput = {
    message: string
    isDone?: boolean
    remindAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReminderInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: number
    userId: number
    message: string
    isDone?: boolean
    remindAt: Date | string
    createdAt?: Date | string
  }

  export type ReminderUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReminderNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderCreateManyInput = {
    id?: number
    userId: number
    message: string
    isDone?: boolean
    remindAt: Date | string
    createdAt?: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomlogCreateInput = {
    title: string
    description: string
    workDate?: Date | string
    employee: UserCreateNestedOneWithoutCustomLogsInput
  }

  export type CustomlogUncheckedCreateInput = {
    id?: number
    employeeId: number
    title: string
    description: string
    workDate?: Date | string
  }

  export type CustomlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: UserUpdateOneRequiredWithoutCustomLogsNestedInput
  }

  export type CustomlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomlogCreateManyInput = {
    id?: number
    employeeId: number
    title: string
    description: string
    workDate?: Date | string
  }

  export type CustomlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type WorkLogListRelationFilter = {
    every?: WorkLogWhereInput
    some?: WorkLogWhereInput
    none?: WorkLogWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type CustomlogListRelationFilter = {
    every?: CustomlogWhereInput
    some?: CustomlogWhereInput
    none?: CustomlogWhereInput
  }

  export type ImageGenerationListRelationFilter = {
    every?: ImageGenerationWhereInput
    some?: ImageGenerationWhereInput
    none?: ImageGenerationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ImageGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageGenerationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ImageGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    style?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageGenerationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAnnouncementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeFilter<$PrismaModel> | $Enums.AnnouncementType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    assignedToId?: SortOrder
    createdById?: SortOrder
  }

  export type EnumAnnouncementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    paymentProgress?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentProgress?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    paymentProgress?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    paymentProgress?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    paymentProgress?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type SubcategoryListRelationFilter = {
    every?: SubcategoryWhereInput
    some?: SubcategoryWhereInput
    none?: SubcategoryWhereInput
  }

  export type SubcategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SubcategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type SubcategorySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubcategoryScalarRelationFilter = {
    is?: SubcategoryWhereInput
    isNot?: SubcategoryWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrder
    assignedToId?: SortOrder
    deadline?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrder
    assignedToId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrder
    assignedToId?: SortOrder
    deadline?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrder
    assignedToId?: SortOrder
    deadline?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    subcategoryId?: SortOrder
    assignedById?: SortOrder
    assignedToId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type StepNullableScalarRelationFilter = {
    is?: StepWhereInput | null
    isNot?: StepWhereInput | null
  }

  export type WorkLogCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrder
    workDate?: SortOrder
    notes?: SortOrder
    progress?: SortOrder
  }

  export type WorkLogAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrder
    progress?: SortOrder
  }

  export type WorkLogMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrder
    workDate?: SortOrder
    notes?: SortOrder
    progress?: SortOrder
  }

  export type WorkLogMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrder
    workDate?: SortOrder
    notes?: SortOrder
    progress?: SortOrder
  }

  export type WorkLogSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    employeeId?: SortOrder
    stepId?: SortOrder
    progress?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StepCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    progress?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    progress?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    progress?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    progress?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    progress?: SortOrder
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isDone?: SortOrder
    remindAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isDone?: SortOrder
    remindAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isDone?: SortOrder
    remindAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReminderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CustomlogCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workDate?: SortOrder
  }

  export type CustomlogAvgOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomlogMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workDate?: SortOrder
  }

  export type CustomlogMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    workDate?: SortOrder
  }

  export type CustomlogSumOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
  }

  export type UserCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkLogCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkLogCreateWithoutEmployeeInput, WorkLogUncheckedCreateWithoutEmployeeInput> | WorkLogCreateWithoutEmployeeInput[] | WorkLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutEmployeeInput | WorkLogCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkLogCreateManyEmployeeInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<AnnouncementCreateWithoutAssignedToInput, AnnouncementUncheckedCreateWithoutAssignedToInput> | AnnouncementCreateWithoutAssignedToInput[] | AnnouncementUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAssignedToInput | AnnouncementCreateOrConnectWithoutAssignedToInput[]
    createMany?: AnnouncementCreateManyAssignedToInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type CustomlogCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomlogCreateWithoutEmployeeInput, CustomlogUncheckedCreateWithoutEmployeeInput> | CustomlogCreateWithoutEmployeeInput[] | CustomlogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomlogCreateOrConnectWithoutEmployeeInput | CustomlogCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomlogCreateManyEmployeeInputEnvelope
    connect?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
  }

  export type ImageGenerationCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageGenerationCreateWithoutUserInput, ImageGenerationUncheckedCreateWithoutUserInput> | ImageGenerationCreateWithoutUserInput[] | ImageGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageGenerationCreateOrConnectWithoutUserInput | ImageGenerationCreateOrConnectWithoutUserInput[]
    createMany?: ImageGenerationCreateManyUserInputEnvelope
    connect?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedByInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkLogUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<WorkLogCreateWithoutEmployeeInput, WorkLogUncheckedCreateWithoutEmployeeInput> | WorkLogCreateWithoutEmployeeInput[] | WorkLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutEmployeeInput | WorkLogCreateOrConnectWithoutEmployeeInput[]
    createMany?: WorkLogCreateManyEmployeeInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<AnnouncementCreateWithoutAssignedToInput, AnnouncementUncheckedCreateWithoutAssignedToInput> | AnnouncementCreateWithoutAssignedToInput[] | AnnouncementUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAssignedToInput | AnnouncementCreateOrConnectWithoutAssignedToInput[]
    createMany?: AnnouncementCreateManyAssignedToInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type CustomlogUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomlogCreateWithoutEmployeeInput, CustomlogUncheckedCreateWithoutEmployeeInput> | CustomlogCreateWithoutEmployeeInput[] | CustomlogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomlogCreateOrConnectWithoutEmployeeInput | CustomlogCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomlogCreateManyEmployeeInputEnvelope
    connect?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
  }

  export type ImageGenerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageGenerationCreateWithoutUserInput, ImageGenerationUncheckedCreateWithoutUserInput> | ImageGenerationCreateWithoutUserInput[] | ImageGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageGenerationCreateOrConnectWithoutUserInput | ImageGenerationCreateOrConnectWithoutUserInput[]
    createMany?: ImageGenerationCreateManyUserInputEnvelope
    connect?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmployeesInput
    upsert?: UserUpsertWithoutEmployeesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmployeesInput, UserUpdateWithoutEmployeesInput>, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedByInput | TaskUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedByInput | TaskUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedByInput | TaskUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkLogUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkLogCreateWithoutEmployeeInput, WorkLogUncheckedCreateWithoutEmployeeInput> | WorkLogCreateWithoutEmployeeInput[] | WorkLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutEmployeeInput | WorkLogCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutEmployeeInput | WorkLogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkLogCreateManyEmployeeInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutEmployeeInput | WorkLogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutEmployeeInput | WorkLogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<AnnouncementCreateWithoutAssignedToInput, AnnouncementUncheckedCreateWithoutAssignedToInput> | AnnouncementCreateWithoutAssignedToInput[] | AnnouncementUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAssignedToInput | AnnouncementCreateOrConnectWithoutAssignedToInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutAssignedToInput | AnnouncementUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: AnnouncementCreateManyAssignedToInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutAssignedToInput | AnnouncementUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutAssignedToInput | AnnouncementUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCreatedByInput | AnnouncementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type CustomlogUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomlogCreateWithoutEmployeeInput, CustomlogUncheckedCreateWithoutEmployeeInput> | CustomlogCreateWithoutEmployeeInput[] | CustomlogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomlogCreateOrConnectWithoutEmployeeInput | CustomlogCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomlogUpsertWithWhereUniqueWithoutEmployeeInput | CustomlogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomlogCreateManyEmployeeInputEnvelope
    set?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    disconnect?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    delete?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    connect?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    update?: CustomlogUpdateWithWhereUniqueWithoutEmployeeInput | CustomlogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomlogUpdateManyWithWhereWithoutEmployeeInput | CustomlogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomlogScalarWhereInput | CustomlogScalarWhereInput[]
  }

  export type ImageGenerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageGenerationCreateWithoutUserInput, ImageGenerationUncheckedCreateWithoutUserInput> | ImageGenerationCreateWithoutUserInput[] | ImageGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageGenerationCreateOrConnectWithoutUserInput | ImageGenerationCreateOrConnectWithoutUserInput[]
    upsert?: ImageGenerationUpsertWithWhereUniqueWithoutUserInput | ImageGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageGenerationCreateManyUserInputEnvelope
    set?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    disconnect?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    delete?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    connect?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    update?: ImageGenerationUpdateWithWhereUniqueWithoutUserInput | ImageGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageGenerationUpdateManyWithWhereWithoutUserInput | ImageGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageGenerationScalarWhereInput | ImageGenerationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedByNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput> | TaskCreateWithoutAssignedByInput[] | TaskUncheckedCreateWithoutAssignedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedByInput | TaskCreateOrConnectWithoutAssignedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedByInput | TaskUpsertWithWhereUniqueWithoutAssignedByInput[]
    createMany?: TaskCreateManyAssignedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedByInput | TaskUpdateWithWhereUniqueWithoutAssignedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedByInput | TaskUpdateManyWithWhereWithoutAssignedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<WorkLogCreateWithoutEmployeeInput, WorkLogUncheckedCreateWithoutEmployeeInput> | WorkLogCreateWithoutEmployeeInput[] | WorkLogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutEmployeeInput | WorkLogCreateOrConnectWithoutEmployeeInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutEmployeeInput | WorkLogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: WorkLogCreateManyEmployeeInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutEmployeeInput | WorkLogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutEmployeeInput | WorkLogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<AnnouncementCreateWithoutAssignedToInput, AnnouncementUncheckedCreateWithoutAssignedToInput> | AnnouncementCreateWithoutAssignedToInput[] | AnnouncementUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAssignedToInput | AnnouncementCreateOrConnectWithoutAssignedToInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutAssignedToInput | AnnouncementUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: AnnouncementCreateManyAssignedToInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutAssignedToInput | AnnouncementUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutAssignedToInput | AnnouncementUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput> | AnnouncementCreateWithoutCreatedByInput[] | AnnouncementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatedByInput | AnnouncementCreateOrConnectWithoutCreatedByInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput | AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AnnouncementCreateManyCreatedByInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput | AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCreatedByInput | AnnouncementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomlogCreateWithoutEmployeeInput, CustomlogUncheckedCreateWithoutEmployeeInput> | CustomlogCreateWithoutEmployeeInput[] | CustomlogUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomlogCreateOrConnectWithoutEmployeeInput | CustomlogCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomlogUpsertWithWhereUniqueWithoutEmployeeInput | CustomlogUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomlogCreateManyEmployeeInputEnvelope
    set?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    disconnect?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    delete?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    connect?: CustomlogWhereUniqueInput | CustomlogWhereUniqueInput[]
    update?: CustomlogUpdateWithWhereUniqueWithoutEmployeeInput | CustomlogUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomlogUpdateManyWithWhereWithoutEmployeeInput | CustomlogUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomlogScalarWhereInput | CustomlogScalarWhereInput[]
  }

  export type ImageGenerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageGenerationCreateWithoutUserInput, ImageGenerationUncheckedCreateWithoutUserInput> | ImageGenerationCreateWithoutUserInput[] | ImageGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageGenerationCreateOrConnectWithoutUserInput | ImageGenerationCreateOrConnectWithoutUserInput[]
    upsert?: ImageGenerationUpsertWithWhereUniqueWithoutUserInput | ImageGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageGenerationCreateManyUserInputEnvelope
    set?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    disconnect?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    delete?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    connect?: ImageGenerationWhereUniqueInput | ImageGenerationWhereUniqueInput[]
    update?: ImageGenerationUpdateWithWhereUniqueWithoutUserInput | ImageGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageGenerationUpdateManyWithWhereWithoutUserInput | ImageGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageGenerationScalarWhereInput | ImageGenerationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutImageGenerationsInput = {
    create?: XOR<UserCreateWithoutImageGenerationsInput, UserUncheckedCreateWithoutImageGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageGenerationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutImageGenerationsNestedInput = {
    create?: XOR<UserCreateWithoutImageGenerationsInput, UserUncheckedCreateWithoutImageGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutImageGenerationsInput
    upsert?: UserUpsertWithoutImageGenerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImageGenerationsInput, UserUpdateWithoutImageGenerationsInput>, UserUncheckedUpdateWithoutImageGenerationsInput>
  }

  export type ProjectCreateNestedOneWithoutAnnouncementInput = {
    create?: XOR<ProjectCreateWithoutAnnouncementInput, ProjectUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAnnouncementInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnouncementsReceivedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsReceivedInput, UserUncheckedCreateWithoutAnnouncementsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnouncementsCreatedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsCreatedInput, UserUncheckedCreateWithoutAnnouncementsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAnnouncementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnnouncementType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneWithoutAnnouncementNestedInput = {
    create?: XOR<ProjectCreateWithoutAnnouncementInput, ProjectUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAnnouncementInput
    upsert?: ProjectUpsertWithoutAnnouncementInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAnnouncementInput, ProjectUpdateWithoutAnnouncementInput>, ProjectUncheckedUpdateWithoutAnnouncementInput>
  }

  export type UserUpdateOneWithoutAnnouncementsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsReceivedInput, UserUncheckedCreateWithoutAnnouncementsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsReceivedInput
    upsert?: UserUpsertWithoutAnnouncementsReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsReceivedInput, UserUpdateWithoutAnnouncementsReceivedInput>, UserUncheckedUpdateWithoutAnnouncementsReceivedInput>
  }

  export type UserUpdateOneWithoutAnnouncementsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsCreatedInput, UserUncheckedCreateWithoutAnnouncementsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsCreatedInput
    upsert?: UserUpsertWithoutAnnouncementsCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsCreatedInput, UserUpdateWithoutAnnouncementsCreatedInput>, UserUncheckedUpdateWithoutAnnouncementsCreatedInput>
  }

  export type CategoryCreateNestedManyWithoutProjectInput = {
    create?: XOR<CategoryCreateWithoutProjectInput, CategoryUncheckedCreateWithoutProjectInput> | CategoryCreateWithoutProjectInput[] | CategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectInput | CategoryCreateOrConnectWithoutProjectInput[]
    createMany?: CategoryCreateManyProjectInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutProjectInput = {
    create?: XOR<AnnouncementCreateWithoutProjectInput, AnnouncementUncheckedCreateWithoutProjectInput> | AnnouncementCreateWithoutProjectInput[] | AnnouncementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutProjectInput | AnnouncementCreateOrConnectWithoutProjectInput[]
    createMany?: AnnouncementCreateManyProjectInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CategoryCreateWithoutProjectInput, CategoryUncheckedCreateWithoutProjectInput> | CategoryCreateWithoutProjectInput[] | CategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectInput | CategoryCreateOrConnectWithoutProjectInput[]
    createMany?: CategoryCreateManyProjectInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AnnouncementCreateWithoutProjectInput, AnnouncementUncheckedCreateWithoutProjectInput> | AnnouncementCreateWithoutProjectInput[] | AnnouncementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutProjectInput | AnnouncementCreateOrConnectWithoutProjectInput[]
    createMany?: AnnouncementCreateManyProjectInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CategoryCreateWithoutProjectInput, CategoryUncheckedCreateWithoutProjectInput> | CategoryCreateWithoutProjectInput[] | CategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectInput | CategoryCreateOrConnectWithoutProjectInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProjectInput | CategoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CategoryCreateManyProjectInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProjectInput | CategoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProjectInput | CategoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AnnouncementCreateWithoutProjectInput, AnnouncementUncheckedCreateWithoutProjectInput> | AnnouncementCreateWithoutProjectInput[] | AnnouncementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutProjectInput | AnnouncementCreateOrConnectWithoutProjectInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutProjectInput | AnnouncementUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AnnouncementCreateManyProjectInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutProjectInput | AnnouncementUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutProjectInput | AnnouncementUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CategoryCreateWithoutProjectInput, CategoryUncheckedCreateWithoutProjectInput> | CategoryCreateWithoutProjectInput[] | CategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProjectInput | CategoryCreateOrConnectWithoutProjectInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProjectInput | CategoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CategoryCreateManyProjectInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProjectInput | CategoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProjectInput | CategoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AnnouncementCreateWithoutProjectInput, AnnouncementUncheckedCreateWithoutProjectInput> | AnnouncementCreateWithoutProjectInput[] | AnnouncementUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutProjectInput | AnnouncementCreateOrConnectWithoutProjectInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutProjectInput | AnnouncementUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AnnouncementCreateManyProjectInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutProjectInput | AnnouncementUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutProjectInput | AnnouncementUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoriesInput
    connect?: ProjectWhereUniqueInput
  }

  export type SubcategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type SubcategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCategoriesInput
    upsert?: ProjectUpsertWithoutCategoriesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCategoriesInput, ProjectUpdateWithoutCategoriesInput>, ProjectUncheckedUpdateWithoutCategoriesInput>
  }

  export type SubcategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput> | SubcategoryCreateWithoutCategoryInput[] | SubcategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SubcategoryCreateOrConnectWithoutCategoryInput | SubcategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: SubcategoryUpsertWithWhereUniqueWithoutCategoryInput | SubcategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SubcategoryCreateManyCategoryInputEnvelope
    set?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    disconnect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    delete?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    connect?: SubcategoryWhereUniqueInput | SubcategoryWhereUniqueInput[]
    update?: SubcategoryUpdateWithWhereUniqueWithoutCategoryInput | SubcategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SubcategoryUpdateManyWithWhereWithoutCategoryInput | SubcategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutSubcatsInput = {
    create?: XOR<CategoryCreateWithoutSubcatsInput, CategoryUncheckedCreateWithoutSubcatsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcatsInput
    connect?: CategoryWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<TaskCreateWithoutSubcategoryInput, TaskUncheckedCreateWithoutSubcategoryInput> | TaskCreateWithoutSubcategoryInput[] | TaskUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubcategoryInput | TaskCreateOrConnectWithoutSubcategoryInput[]
    createMany?: TaskCreateManySubcategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSubcategoryInput = {
    create?: XOR<TaskCreateWithoutSubcategoryInput, TaskUncheckedCreateWithoutSubcategoryInput> | TaskCreateWithoutSubcategoryInput[] | TaskUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubcategoryInput | TaskCreateOrConnectWithoutSubcategoryInput[]
    createMany?: TaskCreateManySubcategoryInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutSubcatsNestedInput = {
    create?: XOR<CategoryCreateWithoutSubcatsInput, CategoryUncheckedCreateWithoutSubcatsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcatsInput
    upsert?: CategoryUpsertWithoutSubcatsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubcatsInput, CategoryUpdateWithoutSubcatsInput>, CategoryUncheckedUpdateWithoutSubcatsInput>
  }

  export type TaskUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<TaskCreateWithoutSubcategoryInput, TaskUncheckedCreateWithoutSubcategoryInput> | TaskCreateWithoutSubcategoryInput[] | TaskUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubcategoryInput | TaskCreateOrConnectWithoutSubcategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSubcategoryInput | TaskUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: TaskCreateManySubcategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSubcategoryInput | TaskUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSubcategoryInput | TaskUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSubcategoryNestedInput = {
    create?: XOR<TaskCreateWithoutSubcategoryInput, TaskUncheckedCreateWithoutSubcategoryInput> | TaskCreateWithoutSubcategoryInput[] | TaskUncheckedCreateWithoutSubcategoryInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSubcategoryInput | TaskCreateOrConnectWithoutSubcategoryInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSubcategoryInput | TaskUpsertWithWhereUniqueWithoutSubcategoryInput[]
    createMany?: TaskCreateManySubcategoryInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSubcategoryInput | TaskUpdateWithWhereUniqueWithoutSubcategoryInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSubcategoryInput | TaskUpdateManyWithWhereWithoutSubcategoryInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SubcategoryCreateNestedOneWithoutTasksInput = {
    create?: XOR<SubcategoryCreateWithoutTasksInput, SubcategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutTasksInput
    connect?: SubcategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksAssignedInput = {
    create?: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksAssignedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksReceivedInput = {
    create?: XOR<UserCreateWithoutTasksReceivedInput, UserUncheckedCreateWithoutTasksReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type WorkLogCreateNestedManyWithoutTaskInput = {
    create?: XOR<WorkLogCreateWithoutTaskInput, WorkLogUncheckedCreateWithoutTaskInput> | WorkLogCreateWithoutTaskInput[] | WorkLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutTaskInput | WorkLogCreateOrConnectWithoutTaskInput[]
    createMany?: WorkLogCreateManyTaskInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutTaskInput = {
    create?: XOR<StepCreateWithoutTaskInput, StepUncheckedCreateWithoutTaskInput> | StepCreateWithoutTaskInput[] | StepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StepCreateOrConnectWithoutTaskInput | StepCreateOrConnectWithoutTaskInput[]
    createMany?: StepCreateManyTaskInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type WorkLogUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<WorkLogCreateWithoutTaskInput, WorkLogUncheckedCreateWithoutTaskInput> | WorkLogCreateWithoutTaskInput[] | WorkLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutTaskInput | WorkLogCreateOrConnectWithoutTaskInput[]
    createMany?: WorkLogCreateManyTaskInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<StepCreateWithoutTaskInput, StepUncheckedCreateWithoutTaskInput> | StepCreateWithoutTaskInput[] | StepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StepCreateOrConnectWithoutTaskInput | StepCreateOrConnectWithoutTaskInput[]
    createMany?: StepCreateManyTaskInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubcategoryUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<SubcategoryCreateWithoutTasksInput, SubcategoryUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SubcategoryCreateOrConnectWithoutTasksInput
    upsert?: SubcategoryUpsertWithoutTasksInput
    connect?: SubcategoryWhereUniqueInput
    update?: XOR<XOR<SubcategoryUpdateToOneWithWhereWithoutTasksInput, SubcategoryUpdateWithoutTasksInput>, SubcategoryUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTasksAssignedNestedInput = {
    create?: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksAssignedInput
    upsert?: UserUpsertWithoutTasksAssignedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksAssignedInput, UserUpdateWithoutTasksAssignedInput>, UserUncheckedUpdateWithoutTasksAssignedInput>
  }

  export type UserUpdateOneRequiredWithoutTasksReceivedNestedInput = {
    create?: XOR<UserCreateWithoutTasksReceivedInput, UserUncheckedCreateWithoutTasksReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksReceivedInput
    upsert?: UserUpsertWithoutTasksReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksReceivedInput, UserUpdateWithoutTasksReceivedInput>, UserUncheckedUpdateWithoutTasksReceivedInput>
  }

  export type WorkLogUpdateManyWithoutTaskNestedInput = {
    create?: XOR<WorkLogCreateWithoutTaskInput, WorkLogUncheckedCreateWithoutTaskInput> | WorkLogCreateWithoutTaskInput[] | WorkLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutTaskInput | WorkLogCreateOrConnectWithoutTaskInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutTaskInput | WorkLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: WorkLogCreateManyTaskInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutTaskInput | WorkLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutTaskInput | WorkLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type StepUpdateManyWithoutTaskNestedInput = {
    create?: XOR<StepCreateWithoutTaskInput, StepUncheckedCreateWithoutTaskInput> | StepCreateWithoutTaskInput[] | StepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StepCreateOrConnectWithoutTaskInput | StepCreateOrConnectWithoutTaskInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutTaskInput | StepUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: StepCreateManyTaskInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutTaskInput | StepUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: StepUpdateManyWithWhereWithoutTaskInput | StepUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type WorkLogUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<WorkLogCreateWithoutTaskInput, WorkLogUncheckedCreateWithoutTaskInput> | WorkLogCreateWithoutTaskInput[] | WorkLogUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutTaskInput | WorkLogCreateOrConnectWithoutTaskInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutTaskInput | WorkLogUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: WorkLogCreateManyTaskInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutTaskInput | WorkLogUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutTaskInput | WorkLogUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<StepCreateWithoutTaskInput, StepUncheckedCreateWithoutTaskInput> | StepCreateWithoutTaskInput[] | StepUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: StepCreateOrConnectWithoutTaskInput | StepCreateOrConnectWithoutTaskInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutTaskInput | StepUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: StepCreateManyTaskInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutTaskInput | StepUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: StepUpdateManyWithWhereWithoutTaskInput | StepUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutWorkLogsInput = {
    create?: XOR<TaskCreateWithoutWorkLogsInput, TaskUncheckedCreateWithoutWorkLogsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutWorkLogsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkLogsInput = {
    create?: XOR<UserCreateWithoutWorkLogsInput, UserUncheckedCreateWithoutWorkLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkLogsInput
    connect?: UserWhereUniqueInput
  }

  export type StepCreateNestedOneWithoutWorkLogInput = {
    create?: XOR<StepCreateWithoutWorkLogInput, StepUncheckedCreateWithoutWorkLogInput>
    connectOrCreate?: StepCreateOrConnectWithoutWorkLogInput
    connect?: StepWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateOneRequiredWithoutWorkLogsNestedInput = {
    create?: XOR<TaskCreateWithoutWorkLogsInput, TaskUncheckedCreateWithoutWorkLogsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutWorkLogsInput
    upsert?: TaskUpsertWithoutWorkLogsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutWorkLogsInput, TaskUpdateWithoutWorkLogsInput>, TaskUncheckedUpdateWithoutWorkLogsInput>
  }

  export type UserUpdateOneRequiredWithoutWorkLogsNestedInput = {
    create?: XOR<UserCreateWithoutWorkLogsInput, UserUncheckedCreateWithoutWorkLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkLogsInput
    upsert?: UserUpsertWithoutWorkLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkLogsInput, UserUpdateWithoutWorkLogsInput>, UserUncheckedUpdateWithoutWorkLogsInput>
  }

  export type StepUpdateOneWithoutWorkLogNestedInput = {
    create?: XOR<StepCreateWithoutWorkLogInput, StepUncheckedCreateWithoutWorkLogInput>
    connectOrCreate?: StepCreateOrConnectWithoutWorkLogInput
    upsert?: StepUpsertWithoutWorkLogInput
    disconnect?: StepWhereInput | boolean
    delete?: StepWhereInput | boolean
    connect?: StepWhereUniqueInput
    update?: XOR<XOR<StepUpdateToOneWithWhereWithoutWorkLogInput, StepUpdateWithoutWorkLogInput>, StepUncheckedUpdateWithoutWorkLogInput>
  }

  export type TaskCreateNestedOneWithoutStepsInput = {
    create?: XOR<TaskCreateWithoutStepsInput, TaskUncheckedCreateWithoutStepsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutStepsInput
    connect?: TaskWhereUniqueInput
  }

  export type WorkLogCreateNestedManyWithoutStepInput = {
    create?: XOR<WorkLogCreateWithoutStepInput, WorkLogUncheckedCreateWithoutStepInput> | WorkLogCreateWithoutStepInput[] | WorkLogUncheckedCreateWithoutStepInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutStepInput | WorkLogCreateOrConnectWithoutStepInput[]
    createMany?: WorkLogCreateManyStepInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type WorkLogUncheckedCreateNestedManyWithoutStepInput = {
    create?: XOR<WorkLogCreateWithoutStepInput, WorkLogUncheckedCreateWithoutStepInput> | WorkLogCreateWithoutStepInput[] | WorkLogUncheckedCreateWithoutStepInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutStepInput | WorkLogCreateOrConnectWithoutStepInput[]
    createMany?: WorkLogCreateManyStepInputEnvelope
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
  }

  export type TaskUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<TaskCreateWithoutStepsInput, TaskUncheckedCreateWithoutStepsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutStepsInput
    upsert?: TaskUpsertWithoutStepsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutStepsInput, TaskUpdateWithoutStepsInput>, TaskUncheckedUpdateWithoutStepsInput>
  }

  export type WorkLogUpdateManyWithoutStepNestedInput = {
    create?: XOR<WorkLogCreateWithoutStepInput, WorkLogUncheckedCreateWithoutStepInput> | WorkLogCreateWithoutStepInput[] | WorkLogUncheckedCreateWithoutStepInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutStepInput | WorkLogCreateOrConnectWithoutStepInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutStepInput | WorkLogUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: WorkLogCreateManyStepInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutStepInput | WorkLogUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutStepInput | WorkLogUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type WorkLogUncheckedUpdateManyWithoutStepNestedInput = {
    create?: XOR<WorkLogCreateWithoutStepInput, WorkLogUncheckedCreateWithoutStepInput> | WorkLogCreateWithoutStepInput[] | WorkLogUncheckedCreateWithoutStepInput[]
    connectOrCreate?: WorkLogCreateOrConnectWithoutStepInput | WorkLogCreateOrConnectWithoutStepInput[]
    upsert?: WorkLogUpsertWithWhereUniqueWithoutStepInput | WorkLogUpsertWithWhereUniqueWithoutStepInput[]
    createMany?: WorkLogCreateManyStepInputEnvelope
    set?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    disconnect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    delete?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    connect?: WorkLogWhereUniqueInput | WorkLogWhereUniqueInput[]
    update?: WorkLogUpdateWithWhereUniqueWithoutStepInput | WorkLogUpdateWithWhereUniqueWithoutStepInput[]
    updateMany?: WorkLogUpdateManyWithWhereWithoutStepInput | WorkLogUpdateManyWithWhereWithoutStepInput[]
    deleteMany?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReminderInput = {
    create?: XOR<UserCreateWithoutReminderInput, UserUncheckedCreateWithoutReminderInput>
    connectOrCreate?: UserCreateOrConnectWithoutReminderInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReminderNestedInput = {
    create?: XOR<UserCreateWithoutReminderInput, UserUncheckedCreateWithoutReminderInput>
    connectOrCreate?: UserCreateOrConnectWithoutReminderInput
    upsert?: UserUpsertWithoutReminderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReminderInput, UserUpdateWithoutReminderInput>, UserUncheckedUpdateWithoutReminderInput>
  }

  export type UserCreateNestedOneWithoutCustomLogsInput = {
    create?: XOR<UserCreateWithoutCustomLogsInput, UserUncheckedCreateWithoutCustomLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCustomLogsNestedInput = {
    create?: XOR<UserCreateWithoutCustomLogsInput, UserUncheckedCreateWithoutCustomLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomLogsInput
    upsert?: UserUpsertWithoutCustomLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomLogsInput, UserUpdateWithoutCustomLogsInput>, UserUncheckedUpdateWithoutCustomLogsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumAnnouncementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeFilter<$PrismaModel> | $Enums.AnnouncementType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAnnouncementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutEmployeesInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmployeesInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmployeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
  }

  export type UserCreateWithoutManagerInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedByInput = {
    title: string
    description?: string | null
    deadline?: Date | string | null
    subcategory: SubcategoryCreateNestedOneWithoutTasksInput
    assignedTo: UserCreateNestedOneWithoutTasksReceivedInput
    workLogs?: WorkLogCreateNestedManyWithoutTaskInput
    steps?: StepCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignedByInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedToId: number
    deadline?: Date | string | null
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutTaskInput
    steps?: StepUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput>
  }

  export type TaskCreateManyAssignedByInputEnvelope = {
    data: TaskCreateManyAssignedByInput | TaskCreateManyAssignedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedToInput = {
    title: string
    description?: string | null
    deadline?: Date | string | null
    subcategory: SubcategoryCreateNestedOneWithoutTasksInput
    assignedBy?: UserCreateNestedOneWithoutTasksAssignedInput
    workLogs?: WorkLogCreateNestedManyWithoutTaskInput
    steps?: StepCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedById?: number | null
    deadline?: Date | string | null
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutTaskInput
    steps?: StepUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type WorkLogCreateWithoutEmployeeInput = {
    workDate?: Date | string
    notes?: string | null
    progress?: number
    task: TaskCreateNestedOneWithoutWorkLogsInput
    step?: StepCreateNestedOneWithoutWorkLogInput
  }

  export type WorkLogUncheckedCreateWithoutEmployeeInput = {
    id?: number
    taskId: number
    stepId?: number | null
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type WorkLogCreateOrConnectWithoutEmployeeInput = {
    where: WorkLogWhereUniqueInput
    create: XOR<WorkLogCreateWithoutEmployeeInput, WorkLogUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkLogCreateManyEmployeeInputEnvelope = {
    data: WorkLogCreateManyEmployeeInput | WorkLogCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutAssignedToInput = {
    title: string
    message: string
    type?: $Enums.AnnouncementType
    createdAt?: Date | string
    isRead?: boolean
    project?: ProjectCreateNestedOneWithoutAnnouncementInput
    createdBy?: UserCreateNestedOneWithoutAnnouncementsCreatedInput
  }

  export type AnnouncementUncheckedCreateWithoutAssignedToInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    projectId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type AnnouncementCreateOrConnectWithoutAssignedToInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutAssignedToInput, AnnouncementUncheckedCreateWithoutAssignedToInput>
  }

  export type AnnouncementCreateManyAssignedToInputEnvelope = {
    data: AnnouncementCreateManyAssignedToInput | AnnouncementCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutCreatedByInput = {
    title: string
    message: string
    type?: $Enums.AnnouncementType
    createdAt?: Date | string
    isRead?: boolean
    project?: ProjectCreateNestedOneWithoutAnnouncementInput
    assignedTo?: UserCreateNestedOneWithoutAnnouncementsReceivedInput
  }

  export type AnnouncementUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    projectId?: number | null
    assignedToId?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type AnnouncementCreateOrConnectWithoutCreatedByInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput>
  }

  export type AnnouncementCreateManyCreatedByInputEnvelope = {
    data: AnnouncementCreateManyCreatedByInput | AnnouncementCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutUserInput = {
    message: string
    isDone?: boolean
    remindAt: Date | string
    createdAt?: Date | string
  }

  export type ReminderUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    isDone?: boolean
    remindAt: Date | string
    createdAt?: Date | string
  }

  export type ReminderCreateOrConnectWithoutUserInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderCreateManyUserInputEnvelope = {
    data: ReminderCreateManyUserInput | ReminderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomlogCreateWithoutEmployeeInput = {
    title: string
    description: string
    workDate?: Date | string
  }

  export type CustomlogUncheckedCreateWithoutEmployeeInput = {
    id?: number
    title: string
    description: string
    workDate?: Date | string
  }

  export type CustomlogCreateOrConnectWithoutEmployeeInput = {
    where: CustomlogWhereUniqueInput
    create: XOR<CustomlogCreateWithoutEmployeeInput, CustomlogUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomlogCreateManyEmployeeInputEnvelope = {
    data: CustomlogCreateManyEmployeeInput | CustomlogCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ImageGenerationCreateWithoutUserInput = {
    style: string
    createdAt?: Date | string
  }

  export type ImageGenerationUncheckedCreateWithoutUserInput = {
    id?: number
    style: string
    createdAt?: Date | string
  }

  export type ImageGenerationCreateOrConnectWithoutUserInput = {
    where: ImageGenerationWhereUniqueInput
    create: XOR<ImageGenerationCreateWithoutUserInput, ImageGenerationUncheckedCreateWithoutUserInput>
  }

  export type ImageGenerationCreateManyUserInputEnvelope = {
    data: ImageGenerationCreateManyUserInput | ImageGenerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEmployeesInput = {
    update: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
    create: XOR<UserCreateWithoutEmployeesInput, UserUncheckedCreateWithoutEmployeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmployeesInput, UserUncheckedUpdateWithoutEmployeesInput>
  }

  export type UserUpdateWithoutEmployeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    managerId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedByInput, TaskUncheckedUpdateWithoutAssignedByInput>
    create: XOR<TaskCreateWithoutAssignedByInput, TaskUncheckedCreateWithoutAssignedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedByInput, TaskUncheckedUpdateWithoutAssignedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedByInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    subcategoryId?: IntFilter<"Task"> | number
    assignedById?: IntNullableFilter<"Task"> | number | null
    assignedToId?: IntFilter<"Task"> | number
    deadline?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type WorkLogUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: WorkLogWhereUniqueInput
    update: XOR<WorkLogUpdateWithoutEmployeeInput, WorkLogUncheckedUpdateWithoutEmployeeInput>
    create: XOR<WorkLogCreateWithoutEmployeeInput, WorkLogUncheckedCreateWithoutEmployeeInput>
  }

  export type WorkLogUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: WorkLogWhereUniqueInput
    data: XOR<WorkLogUpdateWithoutEmployeeInput, WorkLogUncheckedUpdateWithoutEmployeeInput>
  }

  export type WorkLogUpdateManyWithWhereWithoutEmployeeInput = {
    where: WorkLogScalarWhereInput
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type WorkLogScalarWhereInput = {
    AND?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
    OR?: WorkLogScalarWhereInput[]
    NOT?: WorkLogScalarWhereInput | WorkLogScalarWhereInput[]
    id?: IntFilter<"WorkLog"> | number
    taskId?: IntFilter<"WorkLog"> | number
    employeeId?: IntFilter<"WorkLog"> | number
    stepId?: IntNullableFilter<"WorkLog"> | number | null
    workDate?: DateTimeFilter<"WorkLog"> | Date | string
    notes?: StringNullableFilter<"WorkLog"> | string | null
    progress?: FloatFilter<"WorkLog"> | number
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutAssignedToInput, AnnouncementUncheckedUpdateWithoutAssignedToInput>
    create: XOR<AnnouncementCreateWithoutAssignedToInput, AnnouncementUncheckedCreateWithoutAssignedToInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutAssignedToInput, AnnouncementUncheckedUpdateWithoutAssignedToInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutAssignedToInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    message?: StringFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeFilter<"Announcement"> | $Enums.AnnouncementType
    projectId?: IntNullableFilter<"Announcement"> | number | null
    assignedToId?: IntNullableFilter<"Announcement"> | number | null
    createdById?: IntNullableFilter<"Announcement"> | number | null
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    isRead?: BoolFilter<"Announcement"> | boolean
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutCreatedByInput, AnnouncementUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AnnouncementCreateWithoutCreatedByInput, AnnouncementUncheckedCreateWithoutCreatedByInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutCreatedByInput, AnnouncementUncheckedUpdateWithoutCreatedByInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutCreatedByInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ReminderUpsertWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
  }

  export type ReminderUpdateManyWithWhereWithoutUserInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutUserInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: IntFilter<"Reminder"> | number
    userId?: IntFilter<"Reminder"> | number
    message?: StringFilter<"Reminder"> | string
    isDone?: BoolFilter<"Reminder"> | boolean
    remindAt?: DateTimeFilter<"Reminder"> | Date | string
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
  }

  export type CustomlogUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: CustomlogWhereUniqueInput
    update: XOR<CustomlogUpdateWithoutEmployeeInput, CustomlogUncheckedUpdateWithoutEmployeeInput>
    create: XOR<CustomlogCreateWithoutEmployeeInput, CustomlogUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomlogUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: CustomlogWhereUniqueInput
    data: XOR<CustomlogUpdateWithoutEmployeeInput, CustomlogUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomlogUpdateManyWithWhereWithoutEmployeeInput = {
    where: CustomlogScalarWhereInput
    data: XOR<CustomlogUpdateManyMutationInput, CustomlogUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomlogScalarWhereInput = {
    AND?: CustomlogScalarWhereInput | CustomlogScalarWhereInput[]
    OR?: CustomlogScalarWhereInput[]
    NOT?: CustomlogScalarWhereInput | CustomlogScalarWhereInput[]
    id?: IntFilter<"Customlog"> | number
    employeeId?: IntFilter<"Customlog"> | number
    title?: StringFilter<"Customlog"> | string
    description?: StringFilter<"Customlog"> | string
    workDate?: DateTimeFilter<"Customlog"> | Date | string
  }

  export type ImageGenerationUpsertWithWhereUniqueWithoutUserInput = {
    where: ImageGenerationWhereUniqueInput
    update: XOR<ImageGenerationUpdateWithoutUserInput, ImageGenerationUncheckedUpdateWithoutUserInput>
    create: XOR<ImageGenerationCreateWithoutUserInput, ImageGenerationUncheckedCreateWithoutUserInput>
  }

  export type ImageGenerationUpdateWithWhereUniqueWithoutUserInput = {
    where: ImageGenerationWhereUniqueInput
    data: XOR<ImageGenerationUpdateWithoutUserInput, ImageGenerationUncheckedUpdateWithoutUserInput>
  }

  export type ImageGenerationUpdateManyWithWhereWithoutUserInput = {
    where: ImageGenerationScalarWhereInput
    data: XOR<ImageGenerationUpdateManyMutationInput, ImageGenerationUncheckedUpdateManyWithoutUserInput>
  }

  export type ImageGenerationScalarWhereInput = {
    AND?: ImageGenerationScalarWhereInput | ImageGenerationScalarWhereInput[]
    OR?: ImageGenerationScalarWhereInput[]
    NOT?: ImageGenerationScalarWhereInput | ImageGenerationScalarWhereInput[]
    id?: IntFilter<"ImageGeneration"> | number
    userId?: IntFilter<"ImageGeneration"> | number
    style?: StringFilter<"ImageGeneration"> | string
    createdAt?: DateTimeFilter<"ImageGeneration"> | Date | string
  }

  export type UserCreateWithoutImageGenerationsInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
  }

  export type UserUncheckedCreateWithoutImageGenerationsInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type UserCreateOrConnectWithoutImageGenerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImageGenerationsInput, UserUncheckedCreateWithoutImageGenerationsInput>
  }

  export type UserUpsertWithoutImageGenerationsInput = {
    update: XOR<UserUpdateWithoutImageGenerationsInput, UserUncheckedUpdateWithoutImageGenerationsInput>
    create: XOR<UserCreateWithoutImageGenerationsInput, UserUncheckedCreateWithoutImageGenerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImageGenerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImageGenerationsInput, UserUncheckedUpdateWithoutImageGenerationsInput>
  }

  export type UserUpdateWithoutImageGenerationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
  }

  export type UserUncheckedUpdateWithoutImageGenerationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ProjectCreateWithoutAnnouncementInput = {
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
    categories?: CategoryCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAnnouncementInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
    categories?: CategoryUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAnnouncementInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAnnouncementInput, ProjectUncheckedCreateWithoutAnnouncementInput>
  }

  export type UserCreateWithoutAnnouncementsReceivedInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsReceivedInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsReceivedInput, UserUncheckedCreateWithoutAnnouncementsReceivedInput>
  }

  export type UserCreateWithoutAnnouncementsCreatedInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsCreatedInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsCreatedInput, UserUncheckedCreateWithoutAnnouncementsCreatedInput>
  }

  export type ProjectUpsertWithoutAnnouncementInput = {
    update: XOR<ProjectUpdateWithoutAnnouncementInput, ProjectUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<ProjectCreateWithoutAnnouncementInput, ProjectUncheckedCreateWithoutAnnouncementInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAnnouncementInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAnnouncementInput, ProjectUncheckedUpdateWithoutAnnouncementInput>
  }

  export type ProjectUpdateWithoutAnnouncementInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: CategoryUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAnnouncementInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    categories?: CategoryUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutAnnouncementsReceivedInput = {
    update: XOR<UserUpdateWithoutAnnouncementsReceivedInput, UserUncheckedUpdateWithoutAnnouncementsReceivedInput>
    create: XOR<UserCreateWithoutAnnouncementsReceivedInput, UserUncheckedCreateWithoutAnnouncementsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsReceivedInput, UserUncheckedUpdateWithoutAnnouncementsReceivedInput>
  }

  export type UserUpdateWithoutAnnouncementsReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutAnnouncementsCreatedInput = {
    update: XOR<UserUpdateWithoutAnnouncementsCreatedInput, UserUncheckedUpdateWithoutAnnouncementsCreatedInput>
    create: XOR<UserCreateWithoutAnnouncementsCreatedInput, UserUncheckedCreateWithoutAnnouncementsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsCreatedInput, UserUncheckedUpdateWithoutAnnouncementsCreatedInput>
  }

  export type UserUpdateWithoutAnnouncementsCreatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutProjectInput = {
    name: string
    subcats?: SubcategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    subcats?: SubcategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProjectInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProjectInput, CategoryUncheckedCreateWithoutProjectInput>
  }

  export type CategoryCreateManyProjectInputEnvelope = {
    data: CategoryCreateManyProjectInput | CategoryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutProjectInput = {
    title: string
    message: string
    type?: $Enums.AnnouncementType
    createdAt?: Date | string
    isRead?: boolean
    assignedTo?: UserCreateNestedOneWithoutAnnouncementsReceivedInput
    createdBy?: UserCreateNestedOneWithoutAnnouncementsCreatedInput
  }

  export type AnnouncementUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    assignedToId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type AnnouncementCreateOrConnectWithoutProjectInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutProjectInput, AnnouncementUncheckedCreateWithoutProjectInput>
  }

  export type AnnouncementCreateManyProjectInputEnvelope = {
    data: AnnouncementCreateManyProjectInput | AnnouncementCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutProjectInput, CategoryUncheckedUpdateWithoutProjectInput>
    create: XOR<CategoryCreateWithoutProjectInput, CategoryUncheckedCreateWithoutProjectInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutProjectInput, CategoryUncheckedUpdateWithoutProjectInput>
  }

  export type CategoryUpdateManyWithWhereWithoutProjectInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutProjectInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    projectId?: IntFilter<"Category"> | number
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutProjectInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutProjectInput, AnnouncementUncheckedUpdateWithoutProjectInput>
    create: XOR<AnnouncementCreateWithoutProjectInput, AnnouncementUncheckedCreateWithoutProjectInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutProjectInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutProjectInput, AnnouncementUncheckedUpdateWithoutProjectInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutProjectInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutCategoriesInput = {
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
    Announcement?: AnnouncementCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    status?: string
    createdAt?: Date | string
    paymentProgress?: number | null
    Announcement?: AnnouncementUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCategoriesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput>
  }

  export type SubcategoryCreateWithoutCategoryInput = {
    name: string
    tasks?: TaskCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    tasks?: TaskUncheckedCreateNestedManyWithoutSubcategoryInput
  }

  export type SubcategoryCreateOrConnectWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryCreateManyCategoryInputEnvelope = {
    data: SubcategoryCreateManyCategoryInput | SubcategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutCategoriesInput = {
    update: XOR<ProjectUpdateWithoutCategoriesInput, ProjectUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProjectCreateWithoutCategoriesInput, ProjectUncheckedCreateWithoutCategoriesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCategoriesInput, ProjectUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProjectUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    Announcement?: AnnouncementUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProgress?: NullableFloatFieldUpdateOperationsInput | number | null
    Announcement?: AnnouncementUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type SubcategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    update: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<SubcategoryCreateWithoutCategoryInput, SubcategoryUncheckedCreateWithoutCategoryInput>
  }

  export type SubcategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SubcategoryWhereUniqueInput
    data: XOR<SubcategoryUpdateWithoutCategoryInput, SubcategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type SubcategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: SubcategoryScalarWhereInput
    data: XOR<SubcategoryUpdateManyMutationInput, SubcategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SubcategoryScalarWhereInput = {
    AND?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    OR?: SubcategoryScalarWhereInput[]
    NOT?: SubcategoryScalarWhereInput | SubcategoryScalarWhereInput[]
    id?: IntFilter<"Subcategory"> | number
    name?: StringFilter<"Subcategory"> | string
    categoryId?: IntFilter<"Subcategory"> | number
  }

  export type CategoryCreateWithoutSubcatsInput = {
    name: string
    project: ProjectCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutSubcatsInput = {
    id?: number
    name: string
    projectId: number
  }

  export type CategoryCreateOrConnectWithoutSubcatsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubcatsInput, CategoryUncheckedCreateWithoutSubcatsInput>
  }

  export type TaskCreateWithoutSubcategoryInput = {
    title: string
    description?: string | null
    deadline?: Date | string | null
    assignedBy?: UserCreateNestedOneWithoutTasksAssignedInput
    assignedTo: UserCreateNestedOneWithoutTasksReceivedInput
    workLogs?: WorkLogCreateNestedManyWithoutTaskInput
    steps?: StepCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    title: string
    description?: string | null
    assignedById?: number | null
    assignedToId: number
    deadline?: Date | string | null
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutTaskInput
    steps?: StepUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubcategoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubcategoryInput, TaskUncheckedCreateWithoutSubcategoryInput>
  }

  export type TaskCreateManySubcategoryInputEnvelope = {
    data: TaskCreateManySubcategoryInput | TaskCreateManySubcategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutSubcatsInput = {
    update: XOR<CategoryUpdateWithoutSubcatsInput, CategoryUncheckedUpdateWithoutSubcatsInput>
    create: XOR<CategoryCreateWithoutSubcatsInput, CategoryUncheckedCreateWithoutSubcatsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubcatsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubcatsInput, CategoryUncheckedUpdateWithoutSubcatsInput>
  }

  export type CategoryUpdateWithoutSubcatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubcatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpsertWithWhereUniqueWithoutSubcategoryInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSubcategoryInput, TaskUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<TaskCreateWithoutSubcategoryInput, TaskUncheckedCreateWithoutSubcategoryInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSubcategoryInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSubcategoryInput, TaskUncheckedUpdateWithoutSubcategoryInput>
  }

  export type TaskUpdateManyWithWhereWithoutSubcategoryInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSubcategoryInput>
  }

  export type SubcategoryCreateWithoutTasksInput = {
    name: string
    category: CategoryCreateNestedOneWithoutSubcatsInput
  }

  export type SubcategoryUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type SubcategoryCreateOrConnectWithoutTasksInput = {
    where: SubcategoryWhereUniqueInput
    create: XOR<SubcategoryCreateWithoutTasksInput, SubcategoryUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksAssignedInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksAssignedInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksAssignedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
  }

  export type UserCreateWithoutTasksReceivedInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksReceivedInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksReceivedInput, UserUncheckedCreateWithoutTasksReceivedInput>
  }

  export type WorkLogCreateWithoutTaskInput = {
    workDate?: Date | string
    notes?: string | null
    progress?: number
    employee: UserCreateNestedOneWithoutWorkLogsInput
    step?: StepCreateNestedOneWithoutWorkLogInput
  }

  export type WorkLogUncheckedCreateWithoutTaskInput = {
    id?: number
    employeeId: number
    stepId?: number | null
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type WorkLogCreateOrConnectWithoutTaskInput = {
    where: WorkLogWhereUniqueInput
    create: XOR<WorkLogCreateWithoutTaskInput, WorkLogUncheckedCreateWithoutTaskInput>
  }

  export type WorkLogCreateManyTaskInputEnvelope = {
    data: WorkLogCreateManyTaskInput | WorkLogCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type StepCreateWithoutTaskInput = {
    name: string
    completed?: boolean
    progress?: number
    WorkLog?: WorkLogCreateNestedManyWithoutStepInput
  }

  export type StepUncheckedCreateWithoutTaskInput = {
    id?: number
    name: string
    completed?: boolean
    progress?: number
    WorkLog?: WorkLogUncheckedCreateNestedManyWithoutStepInput
  }

  export type StepCreateOrConnectWithoutTaskInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutTaskInput, StepUncheckedCreateWithoutTaskInput>
  }

  export type StepCreateManyTaskInputEnvelope = {
    data: StepCreateManyTaskInput | StepCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type SubcategoryUpsertWithoutTasksInput = {
    update: XOR<SubcategoryUpdateWithoutTasksInput, SubcategoryUncheckedUpdateWithoutTasksInput>
    create: XOR<SubcategoryCreateWithoutTasksInput, SubcategoryUncheckedCreateWithoutTasksInput>
    where?: SubcategoryWhereInput
  }

  export type SubcategoryUpdateToOneWithWhereWithoutTasksInput = {
    where?: SubcategoryWhereInput
    data: XOR<SubcategoryUpdateWithoutTasksInput, SubcategoryUncheckedUpdateWithoutTasksInput>
  }

  export type SubcategoryUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutSubcatsNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutTasksAssignedInput = {
    update: XOR<UserUpdateWithoutTasksAssignedInput, UserUncheckedUpdateWithoutTasksAssignedInput>
    create: XOR<UserCreateWithoutTasksAssignedInput, UserUncheckedCreateWithoutTasksAssignedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksAssignedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksAssignedInput, UserUncheckedUpdateWithoutTasksAssignedInput>
  }

  export type UserUpdateWithoutTasksAssignedInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksAssignedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTasksReceivedInput = {
    update: XOR<UserUpdateWithoutTasksReceivedInput, UserUncheckedUpdateWithoutTasksReceivedInput>
    create: XOR<UserCreateWithoutTasksReceivedInput, UserUncheckedCreateWithoutTasksReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksReceivedInput, UserUncheckedUpdateWithoutTasksReceivedInput>
  }

  export type UserUpdateWithoutTasksReceivedInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkLogUpsertWithWhereUniqueWithoutTaskInput = {
    where: WorkLogWhereUniqueInput
    update: XOR<WorkLogUpdateWithoutTaskInput, WorkLogUncheckedUpdateWithoutTaskInput>
    create: XOR<WorkLogCreateWithoutTaskInput, WorkLogUncheckedCreateWithoutTaskInput>
  }

  export type WorkLogUpdateWithWhereUniqueWithoutTaskInput = {
    where: WorkLogWhereUniqueInput
    data: XOR<WorkLogUpdateWithoutTaskInput, WorkLogUncheckedUpdateWithoutTaskInput>
  }

  export type WorkLogUpdateManyWithWhereWithoutTaskInput = {
    where: WorkLogScalarWhereInput
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyWithoutTaskInput>
  }

  export type StepUpsertWithWhereUniqueWithoutTaskInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutTaskInput, StepUncheckedUpdateWithoutTaskInput>
    create: XOR<StepCreateWithoutTaskInput, StepUncheckedCreateWithoutTaskInput>
  }

  export type StepUpdateWithWhereUniqueWithoutTaskInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutTaskInput, StepUncheckedUpdateWithoutTaskInput>
  }

  export type StepUpdateManyWithWhereWithoutTaskInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutTaskInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    id?: IntFilter<"Step"> | number
    taskId?: IntFilter<"Step"> | number
    name?: StringFilter<"Step"> | string
    completed?: BoolFilter<"Step"> | boolean
    progress?: FloatFilter<"Step"> | number
  }

  export type TaskCreateWithoutWorkLogsInput = {
    title: string
    description?: string | null
    deadline?: Date | string | null
    subcategory: SubcategoryCreateNestedOneWithoutTasksInput
    assignedBy?: UserCreateNestedOneWithoutTasksAssignedInput
    assignedTo: UserCreateNestedOneWithoutTasksReceivedInput
    steps?: StepCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutWorkLogsInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedById?: number | null
    assignedToId: number
    deadline?: Date | string | null
    steps?: StepUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutWorkLogsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutWorkLogsInput, TaskUncheckedCreateWithoutWorkLogsInput>
  }

  export type UserCreateWithoutWorkLogsInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkLogsInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkLogsInput, UserUncheckedCreateWithoutWorkLogsInput>
  }

  export type StepCreateWithoutWorkLogInput = {
    name: string
    completed?: boolean
    progress?: number
    task: TaskCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutWorkLogInput = {
    id?: number
    taskId: number
    name: string
    completed?: boolean
    progress?: number
  }

  export type StepCreateOrConnectWithoutWorkLogInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutWorkLogInput, StepUncheckedCreateWithoutWorkLogInput>
  }

  export type TaskUpsertWithoutWorkLogsInput = {
    update: XOR<TaskUpdateWithoutWorkLogsInput, TaskUncheckedUpdateWithoutWorkLogsInput>
    create: XOR<TaskCreateWithoutWorkLogsInput, TaskUncheckedCreateWithoutWorkLogsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutWorkLogsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutWorkLogsInput, TaskUncheckedUpdateWithoutWorkLogsInput>
  }

  export type TaskUpdateWithoutWorkLogsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory?: SubcategoryUpdateOneRequiredWithoutTasksNestedInput
    assignedBy?: UserUpdateOneWithoutTasksAssignedNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutTasksReceivedNestedInput
    steps?: StepUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutWorkLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    steps?: StepUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutWorkLogsInput = {
    update: XOR<UserUpdateWithoutWorkLogsInput, UserUncheckedUpdateWithoutWorkLogsInput>
    create: XOR<UserCreateWithoutWorkLogsInput, UserUncheckedCreateWithoutWorkLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkLogsInput, UserUncheckedUpdateWithoutWorkLogsInput>
  }

  export type UserUpdateWithoutWorkLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StepUpsertWithoutWorkLogInput = {
    update: XOR<StepUpdateWithoutWorkLogInput, StepUncheckedUpdateWithoutWorkLogInput>
    create: XOR<StepCreateWithoutWorkLogInput, StepUncheckedCreateWithoutWorkLogInput>
    where?: StepWhereInput
  }

  export type StepUpdateToOneWithWhereWithoutWorkLogInput = {
    where?: StepWhereInput
    data: XOR<StepUpdateWithoutWorkLogInput, StepUncheckedUpdateWithoutWorkLogInput>
  }

  export type StepUpdateWithoutWorkLogInput = {
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutWorkLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type TaskCreateWithoutStepsInput = {
    title: string
    description?: string | null
    deadline?: Date | string | null
    subcategory: SubcategoryCreateNestedOneWithoutTasksInput
    assignedBy?: UserCreateNestedOneWithoutTasksAssignedInput
    assignedTo: UserCreateNestedOneWithoutTasksReceivedInput
    workLogs?: WorkLogCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStepsInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedById?: number | null
    assignedToId: number
    deadline?: Date | string | null
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStepsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStepsInput, TaskUncheckedCreateWithoutStepsInput>
  }

  export type WorkLogCreateWithoutStepInput = {
    workDate?: Date | string
    notes?: string | null
    progress?: number
    task: TaskCreateNestedOneWithoutWorkLogsInput
    employee: UserCreateNestedOneWithoutWorkLogsInput
  }

  export type WorkLogUncheckedCreateWithoutStepInput = {
    id?: number
    taskId: number
    employeeId: number
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type WorkLogCreateOrConnectWithoutStepInput = {
    where: WorkLogWhereUniqueInput
    create: XOR<WorkLogCreateWithoutStepInput, WorkLogUncheckedCreateWithoutStepInput>
  }

  export type WorkLogCreateManyStepInputEnvelope = {
    data: WorkLogCreateManyStepInput | WorkLogCreateManyStepInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutStepsInput = {
    update: XOR<TaskUpdateWithoutStepsInput, TaskUncheckedUpdateWithoutStepsInput>
    create: XOR<TaskCreateWithoutStepsInput, TaskUncheckedCreateWithoutStepsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutStepsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutStepsInput, TaskUncheckedUpdateWithoutStepsInput>
  }

  export type TaskUpdateWithoutStepsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory?: SubcategoryUpdateOneRequiredWithoutTasksNestedInput
    assignedBy?: UserUpdateOneWithoutTasksAssignedNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutTasksReceivedNestedInput
    workLogs?: WorkLogUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStepsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workLogs?: WorkLogUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type WorkLogUpsertWithWhereUniqueWithoutStepInput = {
    where: WorkLogWhereUniqueInput
    update: XOR<WorkLogUpdateWithoutStepInput, WorkLogUncheckedUpdateWithoutStepInput>
    create: XOR<WorkLogCreateWithoutStepInput, WorkLogUncheckedCreateWithoutStepInput>
  }

  export type WorkLogUpdateWithWhereUniqueWithoutStepInput = {
    where: WorkLogWhereUniqueInput
    data: XOR<WorkLogUpdateWithoutStepInput, WorkLogUncheckedUpdateWithoutStepInput>
  }

  export type WorkLogUpdateManyWithWhereWithoutStepInput = {
    where: WorkLogScalarWhereInput
    data: XOR<WorkLogUpdateManyMutationInput, WorkLogUncheckedUpdateManyWithoutStepInput>
  }

  export type UserCreateWithoutReminderInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    customLogs?: CustomlogCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReminderInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    customLogs?: CustomlogUncheckedCreateNestedManyWithoutEmployeeInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReminderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReminderInput, UserUncheckedCreateWithoutReminderInput>
  }

  export type UserUpsertWithoutReminderInput = {
    update: XOR<UserUpdateWithoutReminderInput, UserUncheckedUpdateWithoutReminderInput>
    create: XOR<UserCreateWithoutReminderInput, UserUncheckedCreateWithoutReminderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReminderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReminderInput, UserUncheckedUpdateWithoutReminderInput>
  }

  export type UserUpdateWithoutReminderInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReminderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCustomLogsInput = {
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    manager?: UserCreateNestedOneWithoutEmployeesInput
    employees?: UserCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderCreateNestedManyWithoutUserInput
    imageGenerations?: ImageGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomLogsInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    managerId?: number | null
    createdAt?: Date | string
    employees?: UserUncheckedCreateNestedManyWithoutManagerInput
    tasksAssigned?: TaskUncheckedCreateNestedManyWithoutAssignedByInput
    tasksReceived?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    workLogs?: WorkLogUncheckedCreateNestedManyWithoutEmployeeInput
    announcementsReceived?: AnnouncementUncheckedCreateNestedManyWithoutAssignedToInput
    announcementsCreated?: AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutUserInput
    imageGenerations?: ImageGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomLogsInput, UserUncheckedCreateWithoutCustomLogsInput>
  }

  export type UserUpsertWithoutCustomLogsInput = {
    update: XOR<UserUpdateWithoutCustomLogsInput, UserUncheckedUpdateWithoutCustomLogsInput>
    create: XOR<UserCreateWithoutCustomLogsInput, UserUncheckedCreateWithoutCustomLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomLogsInput, UserUncheckedUpdateWithoutCustomLogsInput>
  }

  export type UserUpdateWithoutCustomLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutEmployeesNestedInput
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    managerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyManagerInput = {
    id?: number
    name: string
    username: string
    password: string
    phone?: string | null
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type TaskCreateManyAssignedByInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedToId: number
    deadline?: Date | string | null
  }

  export type TaskCreateManyAssignedToInput = {
    id?: number
    title: string
    description?: string | null
    subcategoryId: number
    assignedById?: number | null
    deadline?: Date | string | null
  }

  export type WorkLogCreateManyEmployeeInput = {
    id?: number
    taskId: number
    stepId?: number | null
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type AnnouncementCreateManyAssignedToInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    projectId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type AnnouncementCreateManyCreatedByInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    projectId?: number | null
    assignedToId?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type ReminderCreateManyUserInput = {
    id?: number
    message: string
    isDone?: boolean
    remindAt: Date | string
    createdAt?: Date | string
  }

  export type CustomlogCreateManyEmployeeInput = {
    id?: number
    title: string
    description: string
    workDate?: Date | string
  }

  export type ImageGenerationCreateManyUserInput = {
    id?: number
    style: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: UserUncheckedUpdateManyWithoutManagerNestedInput
    tasksAssigned?: TaskUncheckedUpdateManyWithoutAssignedByNestedInput
    tasksReceived?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    workLogs?: WorkLogUncheckedUpdateManyWithoutEmployeeNestedInput
    announcementsReceived?: AnnouncementUncheckedUpdateManyWithoutAssignedToNestedInput
    announcementsCreated?: AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    customLogs?: CustomlogUncheckedUpdateManyWithoutEmployeeNestedInput
    imageGenerations?: ImageGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssignedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory?: SubcategoryUpdateOneRequiredWithoutTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutTasksReceivedNestedInput
    workLogs?: WorkLogUpdateManyWithoutTaskNestedInput
    steps?: StepUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workLogs?: WorkLogUncheckedUpdateManyWithoutTaskNestedInput
    steps?: StepUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssignedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subcategory?: SubcategoryUpdateOneRequiredWithoutTasksNestedInput
    assignedBy?: UserUpdateOneWithoutTasksAssignedNestedInput
    workLogs?: WorkLogUpdateManyWithoutTaskNestedInput
    steps?: StepUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workLogs?: WorkLogUncheckedUpdateManyWithoutTaskNestedInput
    steps?: StepUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategoryId?: IntFieldUpdateOperationsInput | number
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkLogUpdateWithoutEmployeeInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutWorkLogsNestedInput
    step?: StepUpdateOneWithoutWorkLogNestedInput
  }

  export type WorkLogUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    stepId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkLogUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    stepId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type AnnouncementUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneWithoutAnnouncementNestedInput
    createdBy?: UserUpdateOneWithoutAnnouncementsCreatedNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneWithoutAnnouncementNestedInput
    assignedTo?: UserUpdateOneWithoutAnnouncementsReceivedNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    remindAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomlogUpdateWithoutEmployeeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomlogUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomlogUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageGenerationUpdateWithoutUserInput = {
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageGenerationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageGenerationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    style?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyProjectInput = {
    id?: number
    name: string
  }

  export type AnnouncementCreateManyProjectInput = {
    id?: number
    title: string
    message: string
    type?: $Enums.AnnouncementType
    assignedToId?: number | null
    createdById?: number | null
    createdAt?: Date | string
    isRead?: boolean
  }

  export type CategoryUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcats?: SubcategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcats?: SubcategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    assignedTo?: UserUpdateOneWithoutAnnouncementsReceivedNestedInput
    createdBy?: UserUpdateOneWithoutAnnouncementsCreatedNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnnouncementUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    assignedToId?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubcategoryCreateManyCategoryInput = {
    id?: number
    name: string
  }

  export type SubcategoryUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutSubcategoryNestedInput
  }

  export type SubcategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManySubcategoryInput = {
    id?: number
    title: string
    description?: string | null
    assignedById?: number | null
    assignedToId: number
    deadline?: Date | string | null
  }

  export type TaskUpdateWithoutSubcategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedBy?: UserUpdateOneWithoutTasksAssignedNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutTasksReceivedNestedInput
    workLogs?: WorkLogUpdateManyWithoutTaskNestedInput
    steps?: StepUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workLogs?: WorkLogUncheckedUpdateManyWithoutTaskNestedInput
    steps?: StepUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assignedById?: NullableIntFieldUpdateOperationsInput | number | null
    assignedToId?: IntFieldUpdateOperationsInput | number
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkLogCreateManyTaskInput = {
    id?: number
    employeeId: number
    stepId?: number | null
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type StepCreateManyTaskInput = {
    id?: number
    name: string
    completed?: boolean
    progress?: number
  }

  export type WorkLogUpdateWithoutTaskInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    employee?: UserUpdateOneRequiredWithoutWorkLogsNestedInput
    step?: StepUpdateOneWithoutWorkLogNestedInput
  }

  export type WorkLogUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    stepId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkLogUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    stepId?: NullableIntFieldUpdateOperationsInput | number | null
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type StepUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    WorkLog?: WorkLogUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    WorkLog?: WorkLogUncheckedUpdateManyWithoutStepNestedInput
  }

  export type StepUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkLogCreateManyStepInput = {
    id?: number
    taskId: number
    employeeId: number
    workDate?: Date | string
    notes?: string | null
    progress?: number
  }

  export type WorkLogUpdateWithoutStepInput = {
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutWorkLogsNestedInput
    employee?: UserUpdateOneRequiredWithoutWorkLogsNestedInput
  }

  export type WorkLogUncheckedUpdateWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
  }

  export type WorkLogUncheckedUpdateManyWithoutStepInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    employeeId?: IntFieldUpdateOperationsInput | number
    workDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    progress?: FloatFieldUpdateOperationsInput | number
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