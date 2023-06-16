interface MyUser {
  name: string;
  email: string;
  phone: string;
}

abstract class AbstractNotification {
  abstract send(user: MyUser): boolean
}

class Email extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando e-mail para o usuário: ' + user.email)
    return true
  }
}

class Android extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando push notification para o usuário no Android: ' + user.phone)
    return true
  }
}

class SMS extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando SMS para o usuário: ' + user.phone)
    return true
  }
}

new Email().send({ name: 'Mich', email: 'mich@dev.com', phone: '123456780' })
new SMS().send({ name: 'Laura', email: 'laura@dev.com', phone: '987654321' })
new Android().send({ name: 'Neko', email: 'neko@dev.com', phone: '543216789' })
