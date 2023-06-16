interface ISum {
  (num1: number, num2: number): number
}

let firstSum: ISum = (num1: number, num2: number): number => {
  return num1 + num2
}

console.log(firstSum(2, 5))

interface ICalculus {
  sum(a: number, b: number): number,
  sub(a: number, b: number): number,
  multiply(a: number, b: number): number,
  division(a: number, b: number): number,
}

const calculator: ICalculus = {
  sum: (a: number, b: number): number => a + b,
  sub: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  division: (a: number, b: number): number => a / b,
}

console.log(calculator)
