"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Meu nome é ${this.name} e tenho ${this.age} anos de idade.`;
    }
}
const mich = new Person('Michel', 21);
const laura = new Person('Laura', 20);
console.log(mich.toString());
console.log(laura.toString());
