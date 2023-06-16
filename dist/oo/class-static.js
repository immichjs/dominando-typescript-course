"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../modules/Database");
const connection = Database_1.Database.createDatabase({
    database: Database_1.Database.TYPE_POSTGRES,
    host: '127.0.0.1',
    port: Database_1.Database.PORT,
    password: '12345'
});
console.log(connection);
