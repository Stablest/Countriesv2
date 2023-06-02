export const acessObjectKey = <T extends { [key: string]: unknown | T }>(
  obj: T,
  index: number
) => {
  if (typeof obj !== "object") throw new Error(`Error : Not an object`);
  if (!obj) throw new Error(`Error : Null or Undefined argument`);

  const key = Object.keys(obj).at(index) ?? null;
  if (!key) throw new Error("Error : Key does not exist");
  return obj[key] as (typeof obj)[typeof key];
};
