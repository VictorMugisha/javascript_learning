

// A polyfill is a piecs of code that a developer write to fill the gaps of specific browser or environment compatibility of a certain feature

// A polyfil is the code that implements a feature that the browser was supposed to be supporting but doesn't support natively

// Here is an example of implementing a polyfill for bind() method

if (!Function.prototype.bind()) {
    // Checking if the bind() method doesn't exist on the Function prototype
    Function.prototype.bind = function(...args) {
        // We know that the first argument must be the value of this and the rest are parameters to function
        let [thisValue, ...params] = args;
        let targetFunction = this;
        // We also know that the returned function can also receive additional parameters
        return function (...args2) {
            // we have to pass all those parameters to the target function if it requires them
            targetFunction.call(thisValue, ...params, ...args2);
        }
    }
}



// Implementation of JavaScript built-in map() array method as a polyfill

let array = [1,2,3,4];

// Simulating that map method is not supported
Array.prototype.map = null;

if (!Array.prototype.map) {
    Array.prototype.map = function (callbackFunction) {
        let resultArray = [];
        let targetArray = this;
        for (let i = 0; i < targetArray.length; i++) {
            resultArray.push(callbackFunction(targetArray[i]))
        }
        return resultArray;
    }
}


let double = array.map(function(element) {
    return element * 2;
})

console.log(double)
