type FuncResultType<T> = T extends () => infer U ? U : never


type FuncTypes<T> = T extends (param: infer Param) => infer Result ? [Result, Param] : never
