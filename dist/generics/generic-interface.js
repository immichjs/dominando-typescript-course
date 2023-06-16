"use strict";
const string = {
    value: 'Hello World',
    startProcess(args) {
        return args.toUpperCase();
    }
};
console.log(string.value);
console.log(string.startProcess('Hello World'));
const number = {
    value: 20,
    startProcess(args) {
        return args * args;
    }
};
console.log(number.value);
console.log(number.startProcess(40));
