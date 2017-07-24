const sleep = require('sleep');

// Simulates a slow function
function slowFunc(param) {
    sleep.msleep(100);  // Sleep for 100 milliseconds
    return param + 1;
}

// Simulates a function with multiple arguments
function multipleParamFunc() {
    let result = "";
    for(let arg in arguments) {
        result += arg;
    }
    return result;
}

// Helper function that call the function and returns the time it took
function getTimeForCall(cacheable, param) {
    let startTime = process.hrtime();
    cacheable.get(1);
    let endTime = process.hrtime(startTime);    // This returns the delta time
    return endTime[0] + endTime[1]/10000000;
}

module.exports = {
    slowFunc,
    multipleParamFunc,
    getTimeForCall
}
