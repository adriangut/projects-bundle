export const mapKeys = (objectsArray, key) => {
    const newObject = {};
    for (const object of objectsArray) {
        newObject[object[key]] = object;
    }
    return newObject;
}

export const omit = (object, ...propertyNames) => {
    const newObject = {};
    for (const property in object) {
        if (!object.hasOwnProperty(property) || propertyNames.includes(property)) continue;

        newObject[property] = object[property];
    }
    return newObject;

}
