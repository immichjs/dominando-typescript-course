"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_notification_1 = require("./classes/multiply-notification");
new multiply_notification_1.Email().send({ name: 'Mich', email: 'mich@dev.com', phone: '123456780' });
new multiply_notification_1.SMS().send({ name: 'Laura', email: 'laura@dev.com', phone: '987654321' });
new multiply_notification_1.Android().send({ name: 'Neko', email: 'neko@dev.com', phone: '543216789' });
