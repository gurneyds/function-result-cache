// Cache for the function results
let cache={}

// Pure function that will be called
let func;

// This function can be called with multiple parameters
function get() {
    if(!func) {
        throw new Error("Function must be set");
    }

    // There must be at least 1 argument for the key
    if(arguments.length < 1) {
        throw new Error("Must provide at least 1 argument");
    }

    let key;
    for(arg of arguments) {
        // Build a composite key from all of the arguments
        key += "" + arg;
    }

    if(cache[key]) {
        return cache[key];
    } else {
        // Call the provided function, cache and return the results
        if(func) {
            // Pass thru all of the arguments
            cache[key] = func(...arguments);
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
