function nativeIsString(item: unknown): boolean {
  return typeof item === 'string';
}
function nativeIsBoolean(item: unknown): boolean {
  return typeof item === 'boolean';
}
function nativeIsObject(item: unknown): boolean {
  return typeof item === 'object';
}

function nativeIsNumber(item: unknown): boolean {
  return typeof item === 'number';
}

function nativeIsArray(item: unknown): boolean {
  return Array.isArray(item);
}
/**
 * Checks to see if this is a string and returns it, otherwise returns undefined
 * @param item an unknown item, maybe a string
 */
export const getString = (item: unknown): string | undefined => {
  if (nativeIsString(item)) {
    return String(item);
  }
};

/**
 * Checks to see if this is a number and returns it, otherwise returns undefined
 * @param item an unknown item, maybe a number
 */
export const getNumber = (item: unknown): number | undefined => {
  if (nativeIsNumber(item)) {
    return item as number;
  }
};

/**
 * Checks to see if this is a boolean and returns it, otherwise returns undefined
 * @param item an unknown item, maybe a boolean
 */
export const getBoolean = (item: unknown): boolean | undefined => {
  if (nativeIsBoolean(item)) {
    return Boolean(item);
  }
};

/**
 * Checks to see if this is an object and returns it, otherwise returns undefined
 * @param item an unknown item, maybe an object
 */
export const getObject = (item: unknown): object | undefined => {
  if (nativeIsObject(item)) {
    return item as object;
  }
};

/**
 * Checks to see if this is an arrya and returns it, otherwise returns undefined
 * @param item an array of unknown items
 */
export const getArray = (item: unknown): unknown[] | undefined => {
  if (nativeIsArray(item)) {
    return item as unknown[];
  }
};
