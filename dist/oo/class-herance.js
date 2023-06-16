"use strict";
class SignUp {
    constructor(name, birth) {
        this.name = name;
    }
}
class Client extends SignUp {
    constructor(name, birth, email, company) {
        super(name, birth);
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.company = company;
    }
}
const neko = new Client('Neko', new Date(), 'neko@contact.com', 'Nekos Burger');
console.log(neko);
