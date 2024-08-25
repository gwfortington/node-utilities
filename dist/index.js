"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.objectsEqual = void 0;
const objectsEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    let value1;
    let value2;
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
exports.objectsEqual = objectsEqual;
const pick = (object, keys) => {
    return keys.reduce((newObject, key) => {
        newObject[key] = object[key];
        return newObject;
    }, {});
};
exports.pick = pick;
