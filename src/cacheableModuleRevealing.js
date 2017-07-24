// Module revealing pattern demonstrated
var cacheable = (function() {
    // Cache for the function results
    let cache={}

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

    return {
        get,
        setFunction,
        flushCache
    }
})();

module.exports = cacheable;
