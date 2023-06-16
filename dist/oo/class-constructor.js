"use strict";
class Order {
    constructor(product, totalValue, deliveryForecast) {
        this.product = product;
        this.totalValue = totalValue;
        this.deliveryForecast = deliveryForecast;
    }
}
const myOrder = new Order('TV 50"', 3000, new Date());
console.log(myOrder);
