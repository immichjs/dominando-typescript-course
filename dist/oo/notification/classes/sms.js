"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMS = void 0;
const abstract_notification_abstract_1 = require("./abstract-notification.abstract");
class SMS extends abstract_notification_abstract_1.AbstractNotification {
    send(user) {
        console.log('Enviando SMS para o usuário: ' + user.phone);
        return true;
    }
}
exports.SMS = SMS;
