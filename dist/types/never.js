"use strict";
function showError(message) {
    throw new Error(message);
}
// showError('Gerando erro')
function infinityLoop() {
    let count = 0;
    while (true) {
        count++;
        console.log(count);
    }
}
infinityLoop();
