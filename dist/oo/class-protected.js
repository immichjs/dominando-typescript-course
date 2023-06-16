"use strict";
class Residence {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    answerBell(message) {
        return message;
    }
}
class House extends Residence {
    enterTheHouse() {
        return this.answerBell('Olá quem é?');
    }
}
const homersHouse = new House("Homer's House", {
    city: 'Sorocaba',
    code: '18103-659',
    number: 39,
    street: 'Av. Brasil',
    status: true,
    uf: 'SP'
});
console.log(homersHouse.enterTheHouse());
