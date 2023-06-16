"use strict";
class Car {
    constructor(color) {
        this.color = color;
    }
    tryOpenTheDoor() {
        return true;
    }
}
const ferrari = new Car('Vermelha');
console.log(ferrari);
console.log(ferrari.tryOpenTheDoor());
