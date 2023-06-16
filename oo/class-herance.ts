class SignUp {
  constructor(public name: string, birth: Date) {}
}

class Client extends SignUp {
  constructor(public name: string, public birth: Date, public email: string, public company: string) {
    super(name, birth)
  }
}

const neko = new Client('Neko', new Date(), 'neko@contact.com', 'Nekos Burger') 
console.log(neko)
