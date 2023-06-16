class Professor {
  constructor(public name: string, public age: number, public discipline: string) {}
  
  introduceYourself(): string {
    return `Meu nome é ${this.name} e tenho ${this.age} anos de idade.`
  }

  calculateNotes(...notes: number[]): number {
    const result = notes.reduce((acc, next) => {
      return acc + next
    }) 
    return result / notes.length
  }
}

const john = new Professor('John', 21, 'Typescript')

console.log(john.introduceYourself())
console.log(john.calculateNotes(10, 4, 10, 0, 10))
