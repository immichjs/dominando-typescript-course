function sendEmail(to: string, subject: string = 'Sem assunto', from?: string,): void {
  console.log({
    to,
    subject,
    from
  })
}

sendEmail('mich@dev.com')
sendEmail('mich@dev.com', 'Hello World')
