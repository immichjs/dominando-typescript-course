"use strict";
function sumNumbers(...valuesPerMonth) {
    return valuesPerMonth.reduce((acc, next) => acc + next, 0);
}
const sum = sumNumbers(20, 40, 50, 10, 2000, 40, 30);
console.log(sum);
