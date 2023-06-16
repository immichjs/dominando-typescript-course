class Car {
  constructor(public color: string) {}

  public tryOpenTheDoor(): boolean {
    return true
  }
}

const ferrari = new Car('Vermelha')
console.log(ferrari)

console.log(ferrari.tryOpenTheDoor())
