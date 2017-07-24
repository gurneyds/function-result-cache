class Cacheable {
    constructor(func) {
        this.cache = {};
        this.func = func;
    }

    get(key) {
        if(!this.func) {
            throw new Error("Function must be set");
        }

        // There must be at least 1 argument for the key
        if(arguments.length < 1) {
            throw new Error("Must provide at least 1 argument");
        }

        for(let arg of arguments) {
            // Build a composite key from all of the arguments
            key += "" + arg;
        }

        if(this.cache[key]) {
            return this.cache[key];
        } else {
            // Call the provided function, cache and return the results
            if(this.func) {
                // Pass thru all of the arguments
                this.cache[key] = this.func(...arguments);
//                this.cache[key] = this.func(key);
                return this.cache[key];
            }
        }
    }

    setFunction(myFunc) {
        this.func = myFunc;
    }

    flushCache() {
        this.cache = {};
    }
}

function simpleFunc(param) {
    return param+1;
}

// let frank = new Cacheable(simpleFunc);
//
// console.log(frank);
// console.log(frank.get(1));

module.exports = Cacheable;
