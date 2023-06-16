class Bank {
  private balance: number = 10000

  private withdraw(value: number): number | string {
    if (value > this.balance) {
      return 'O banco não possui o saldo solicitado'
    }

    return this.balance -= value
  }

  protected withdrawFromATM(value: number): number | string {
    return this.withdraw(value)
  }
}

class ATM extends Bank {
  public withDraw24h(value: number): number | string {
    return this.withdrawFromATM(value)
  }
}

const nubank = new Bank()
const nubankAtm = new ATM()
console.log(nubankAtm.withDraw24h(3000))
