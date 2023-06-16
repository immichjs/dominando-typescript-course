interface MyUser {
  name: string;
  email: string;
  phone: string;
}

interface IEmail2 {
  name: string;
  email: string;
}

interface INotification2 {
  send(user: MyUser): boolean
}

abstract class AbstractNotification2 implements INotification2 {
  abstract send(user: MyUser): boolean
}

class Email2 extends AbstractNotification2 implements INotification2, Email2 {
  name: string
  email: string

  constructor(user: MyUser) {
    super()
    this.name = user.name
    this.email = user.email
  }
  send(): boolean {
    console.log('Enviando e-mail para o usuário: ' + this.email)
    return true
  }
}

class Android2 extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando push notification para o usuário no Android: ' + user.phone)
    return true
  }
}

class SMS2 extends AbstractNotification2 {
  send(user: MyUser): boolean {
    console.log('Enviando SMS para o usuário: ' + user.phone)
    return true
  }
}

new Email().send({ name: 'Mich', email: 'mich@dev.com', phone: '123456780' })
new SMS().send({ name: 'Laura', email: 'laura@dev.com', phone: '987654321' })
new Android().send({ name: 'Neko', email: 'neko@dev.com', phone: '543216789' })
