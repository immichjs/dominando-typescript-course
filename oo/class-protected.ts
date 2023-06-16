class Residence {
  constructor(public name: string, public address: IAddress) { }

  protected answerBell(message: string): string {
    return message
  }
}

class House extends Residence {
  public enterTheHouse(): string {
    return this.answerBell('Olá quem é?')
  }
}

const homersHouse = new House("Homer's House", {
  city: 'Sorocaba',
  code: '18103-659',
  number: 39,
  street: 'Av. Brasil',
  status: true,
  uf: 'SP'
})

console.log(homersHouse.enterTheHouse())
