"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Android = void 0;
const abstract_notification_abstract_1 = require("./abstract-notification.abstract");
class Android extends abstract_notification_abstract_1.AbstractNotification {
    send(user) {
        console.log('Enviando push notification para o usuário no Android: ' + user.phone);
        return true;
    }
}
exports.Android = Android;
