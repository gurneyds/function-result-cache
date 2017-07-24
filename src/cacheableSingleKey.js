// Cache for the function results
let cache={}

// Function that will be called
let func;

function get(key) {
    if(cache[key]) {
        return cache[key];
    } else {
        // Call the provided function
        if(func) {
            cache[key] = func(key);
            return cache[key];
        }
    }
}

function setFunction(myFunc) {
    func = myFunc;
}

function flushCache() {
    cache = {};
}

module.exports = {
    get,
    setFunction,
    flushCache
}
