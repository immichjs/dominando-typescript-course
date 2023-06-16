import { Android, Email, SMS } from "./classes/multiply-notification"

new Email().send({ name: 'Mich', email: 'mich@dev.com', phone: '123456780' })
new SMS().send({ name: 'Laura', email: 'laura@dev.com', phone: '987654321' })
new Android().send({ name: 'Neko', email: 'neko@dev.com', phone: '543216789' })
