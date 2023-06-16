"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = exports.SMS = exports.Email = void 0;
const abstract_notification_abstract_1 = require("./abstract-notification.abstract");
class Email extends abstract_notification_abstract_1.AbstractNotification {
    send(user) {
        console.log('Enviando e-mail para o usuário: ' + user.email);
        return true;
    }
}
exports.Email = Email;
class SMS extends abstract_notification_abstract_1.AbstractNotification {
    send(user) {
        console.log('Enviando SMS para o usuário: ' + user.phone);
        return true;
    }
}
exports.SMS = SMS;
class Android extends abstract_notification_abstract_1.AbstractNotification {
    send(user) {
        console.log('Enviando push notification para o usuário no Android: ' + user.phone);
        return true;
    }
}
exports.Android = Android;
