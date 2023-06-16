interface IProcessing<T> {
  value: T;
  startProcess(args: T): T;
}

const string: IProcessing<string> = {
  value: 'Hello World',
  startProcess(args: string): string {
    return args.toUpperCase()
  }
}

console.log(string.value)
console.log(string.startProcess('Hello World'))

const number: IProcessing<number> = {
  value: 20,
  startProcess(args: number): number {
    return args * args
  }
}

console.log(number.value)
console.log(number.startProcess(40))
