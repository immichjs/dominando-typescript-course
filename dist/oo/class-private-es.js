"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _IdentificationDocument_number, _CNPJ_number;
class IdentificationDocument {
    constructor() {
        this.value = '312023132-02';
        _IdentificationDocument_number.set(this, 35);
    }
    showDocument() {
        return __classPrivateFieldGet(this, _IdentificationDocument_number, "f");
    }
}
_IdentificationDocument_number = new WeakMap();
class CNPJ extends IdentificationDocument {
    constructor() {
        super(...arguments);
        _CNPJ_number.set(this, 50);
    }
    showDocument() {
        return __classPrivateFieldGet(this, _CNPJ_number, "f");
    }
}
_CNPJ_number = new WeakMap();
const rg = new IdentificationDocument();
console.log(rg.showDocument());
const cnpj = new CNPJ();
console.log(cnpj.showDocument());
