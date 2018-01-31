// Rewrite of 'runWithDebugger' so it can take an arguments array

function sayHi() {
    console.log('hi!');
}

function sayHiTo(name) {
    console.log('hi ' + name);
}

function sayFullName(first, last) {
    console.log(first + ' ' + last);
}

function runWithDebugger(callback, array) {
    debugger;
    if (!array) {
        callback();
    } else {
        // using apply so arguments can be passed in as an array
        callback.apply(this, array);
    }
}

runWithDebugger(sayHi); // 'hi!'
runWithDebugger(sayHiTo, ['gordon']); // 'hi gordon'
runWithDebugger(sayFullName, ['gordon', 'zhu']); // 'gordon zhu'