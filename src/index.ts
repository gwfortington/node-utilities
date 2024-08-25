export const objectsEqual = (
  object1: Record<string, any>,
  object2: Record<string, any>,
) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  let value1: any;
  let value2: any;
  for (const key of keys1) {
    value1 = object1[key];
    value2 = object2[key];
    if (value1 instanceof Date) {
      value1 = value1.getDate();
      value2 = value2.getDate();
    }
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

export const pick = (object: Record<string, any>, keys: string[]) => {
  return keys.reduce(
    (newObject, key) => {
      newObject[key] = object[key];
      return newObject;
    },
    {} as Record<string, any>,
  );
};
