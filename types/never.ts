function showError(message: string) {
  throw new Error(message)
}

// showError('Gerando erro')

function infinityLoop(): never {
  let count = 0
  while(true) {
    count++
    console.log(count)
  }
}
infinityLoop()
