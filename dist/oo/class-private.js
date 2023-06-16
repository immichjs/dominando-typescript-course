"use strict";
class Bank {
    constructor() {
        this.balance = 10000;
    }
    withdraw(value) {
        if (value > this.balance) {
            return 'O banco não possui o saldo solicitado';
        }
        return this.balance -= value;
    }
    withdrawFromATM(value) {
        return this.withdraw(value);
    }
}
class ATM extends Bank {
    withDraw24h(value) {
        return this.withdrawFromATM(value);
    }
}
const nubank = new Bank();
const nubankAtm = new ATM();
console.log(nubankAtm.withDraw24h(3000));
