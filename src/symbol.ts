const obj = {
  id: 123,
  a: 23,
  b: 45,
  c: "hello there ",
  [Symbol("id")]: 222222222222,
};
obj[Symbol("name")] = "ali";

// return value of a assignment statement is assigned value

Object.getOwnPropertyNames(obj); //  ["id","a","b","c"]
Object.getOwnPropertySymbols(obj); // [Symbol(id), Symbol(name)]
