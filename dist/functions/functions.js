"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const show_message_1 = __importDefault(require("../modules/show-message"));
console.log((0, show_message_1.default)('Hello World'));
console.log((0, show_message_1.default)({ message: 'Hello World' }));
console.log((0, show_message_1.default)(400));
const show = (code) => {
    return code;
};
console.log(show(200));
