export type MakeOptionalWhen1<T, WhenKey extends keyof T, OptionalKeys extends keyof T> = 
  Omit<T, WhenKey | OptionalKeys> & 
  (
    | (Omit<T, WhenKey> & { [K in WhenKey]?: Exclude<T[WhenKey], true> } & Pick<T, OptionalKeys>)
    | (Partial<Pick<T, OptionalKeys>> & { [K in WhenKey]: true })
  );

export type MakeOptionalWhen<T, WhenKey extends keyof T, OptionalKeys extends keyof T> = 
  Omit<T, WhenKey | OptionalKeys> & (
    { [K in WhenKey]?: boolean } & (
      { [K in WhenKey]: true } extends { [K in WhenKey]: infer S } 
        ? S extends true 
          ? { [K in OptionalKeys]?: T[K] }
          : { [K in OptionalKeys]: T[K] }
        : never
    )
  );