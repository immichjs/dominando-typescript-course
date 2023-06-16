class User {
  public readonly id: number
  public readonly createdAt: Date

  constructor(public name: string, private password: string) {
    this.createdAt = new Date()
    this.id = Math.floor(Math.random() * (1 + 9999)) + 1
  }
}

const luke = new User('Luke', '1234')
console.log(luke)
