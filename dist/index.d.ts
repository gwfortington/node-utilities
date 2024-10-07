/**
 * Compares two objects to see if they are equal.
 *
 * This function compares all keys that exist in both objects, and returns false if any of the values are not equal.
 * If a value is a Date, the comparison is done by comparing the date values of the two dates.
 *
 * @param firstObject - The first object to compare.
 * @param secondObject - The second object to compare.
 * @returns A boolean indicating if the two objects are equal.
 */
export declare const areObjectsEqual: (firstObject: Record<string, any>, secondObject: Record<string, any>) => boolean;
/**
 * Creates a new object with a subset of the keys from the given object.
 *
 * @param object - The object to pick from.
 * @param keys - The keys to pick from the object.
 * @returns A new object with the picked keys.
 */
export declare const pickObjectKeys: (object: Record<string, any>, keys: string[]) => Record<string, any>;
