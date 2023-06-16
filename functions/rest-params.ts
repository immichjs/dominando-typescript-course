function sumNumbers(...valuesPerMonth: number[]): number {
  return valuesPerMonth.reduce((acc, next) => acc + next, 0)
}

const sum: number = sumNumbers(20, 40, 50, 10, 2000, 40, 30)
console.log(sum)
