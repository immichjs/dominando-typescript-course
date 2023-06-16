"use strict";
console.log('Hello World');
const myName = 'Michel';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const ps5 = new Product('Playstation 5', 3999);
console.log(ps5);
