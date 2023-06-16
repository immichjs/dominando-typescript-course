"use strict";
class Professor {
    constructor(name, age, discipline) {
        this.name = name;
        this.age = age;
        this.discipline = discipline;
    }
    introduceYourself() {
        return `Meu nome é ${this.name} e tenho ${this.age} anos de idade.`;
    }
    calculateNotes(...notes) {
        const result = notes.reduce((acc, next) => {
            return acc + next;
        });
        return result / notes.length;
    }
}
const john = new Professor('John', 21, 'Typescript');
console.log(john.introduceYourself());
console.log(john.calculateNotes(10, 4, 10, 0, 10));
