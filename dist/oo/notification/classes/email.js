"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const abstract_notification_abstract_1 = require("./abstract-notification.abstract");
class Email extends abstract_notification_abstract_1.AbstractNotification {
    send(user) {
        console.log('Enviando e-mail para o usuário: ' + user.email);
        return true;
    }
}
exports.Email = Email;
