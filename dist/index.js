"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickObjectKeys = exports.areObjectsEqual = void 0;
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
const areObjectsEqual = (firstObject, secondObject) => {
    const firstObjectKeys = Object.keys(firstObject);
    const secondObjectKeys = Object.keys(secondObject);
    if (firstObjectKeys.length !== secondObjectKeys.length) {
        return false;
    }
    for (const key of firstObjectKeys) {
        const firstObjectValue = firstObject[key];
        const secondObjectValue = secondObject[key];
        if (firstObjectValue instanceof Date) {
            const firstObjectDateValue = firstObjectValue.getDate();
            const secondObjectDateValue = secondObjectValue.getDate();
            if (firstObjectDateValue !== secondObjectDateValue) {
                return false;
            }
        }
        else if (firstObjectValue !== secondObjectValue) {
            return false;
        }
    }
    return true;
};
exports.areObjectsEqual = areObjectsEqual;
/**
 * Creates a new object with a subset of the keys from the given object.
 *
 * @param object - The object to pick from.
 * @param keys - The keys to pick from the object.
 * @returns A new object with the picked keys.
 */
const pickObjectKeys = (object, keys) => {
    return keys.reduce((newObject, key) => {
        newObject[key] = object[key];
        return newObject;
    }, {});
};
exports.pickObjectKeys = pickObjectKeys;
