import { MyUser } from "../interfaces/my-user.interface"
import { AbstractNotification } from "./abstract-notification.abstract"

export class Email extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando e-mail para o usuário: ' + user.email)
    return true
  }
}

export class SMS extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando SMS para o usuário: ' + user.phone)
    return true
  }
}

export class Android extends AbstractNotification {
  send(user: MyUser): boolean {
    console.log('Enviando push notification para o usuário no Android: ' + user.phone)
    return true
  }
}
