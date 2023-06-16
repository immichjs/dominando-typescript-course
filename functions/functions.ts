import showMessage from "../modules/show-message"

console.log(showMessage('Hello World'))
console.log(showMessage({ message: 'Hello World' }))
console.log(showMessage(400))

const show = (code: number): number | Date | object => {
  return code
}

console.log(show(200))
