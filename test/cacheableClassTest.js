const Cacheable = require('../src/Cacheable');
const expect  = require('chai').expect;
const util = require('./util');

describe("Cacheable Tests - Class style", function() {
    it("throws error if no function", function() {
        let cacheable = new Cacheable();
        expect(() => cacheable.get(1)).to.throw('Function must be set');
    });

    it("throws error if no get arguments", function() {
        // Set the function
        let cacheable = new Cacheable(util.slowFunc);

        // Call get with no arguments
        expect(() => cacheable.get()).to.throw('Must provide at least 1 argument');
    });

    it("should run faster after the first call", function() {
        let cacheable = new Cacheable(util.slowFunc);

        // Time the first and second call and then compare
        let firstCall = util.getTimeForCall(cacheable, 1);
        let secondCall = util.getTimeForCall(cacheable, 1);

        // First call should always take longer than the second
        expect(firstCall > secondCall).to.be.true;
    })

    it("clears the cache when asked", function() {
        let cacheable = new Cacheable(util.slowFunc);
        let firstCall = util.getTimeForCall(cacheable, 1);
        let secondCall = util.getTimeForCall(cacheable,1);

        // Reset the cache again and it should take longer that second (cached) called
        cacheable.flushCache();
        let afterFlush = util.getTimeForCall(cacheable, 1);

        expect(afterFlush > secondCall).to.be.true;
    })

    it("handles multiple input parameters", function() {
        // Setup a function than can handle multiple parameters
        let cacheable = new Cacheable(util.multipleParamFunc);

        // As long as the function is pure, the results should be the same
        let result1 = cacheable.get(1,2,3,4,5,6);
        let result2 = cacheable.get(1,2,3,4,5,6);
        expect(result1 === result2).to.be.true;

        result1 = cacheable.get('hello','world',3,4,5,6);
        result2 = cacheable.get('hello','world',3,4,5,6);
        expect(result1 === result2).to.be.true;
    })

    it("can handle null input parameters", function(){
        // Setup a function than can handle multiple parameters
        let cacheable = new Cacheable(util.multipleParamFunc);

        // As long as the function is pure, the results should be the same
        result1 = cacheable.get('hello','world',3,null,5,6);
        result2 = cacheable.get('hello','world',3,null,5,6);
        expect(result1 === result2).to.be.true;
    })
})
