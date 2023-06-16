"use strict";
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.createdAt = new Date();
        this.id = Math.floor(Math.random() * (1 + 9999)) + 1;
    }
}
const luke = new User('Luke', '1234');
console.log(luke);
