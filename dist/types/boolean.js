"use strict";
let admin = true;
console.log(admin);
admin = !!0;
console.log(admin);
const password = '1234';
const securityPassword = (password.length > 8);
console.log(securityPassword);
