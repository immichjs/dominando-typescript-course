"use strict";
class OtherPermission {
    constructor(_name, _level) {
        this._name = _name;
        this._level = _level;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    set name(value) {
        this._name = value;
    }
    set level(value) {
        this._level = value;
    }
}
const office = new OtherPermission('Administrator', 1);
console.log(office);
office.name = 'Collaborator';
office.level = 2;
console.log(office);
console.log(office.name, office.level);
