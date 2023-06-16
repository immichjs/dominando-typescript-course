"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
class Database {
    constructor(port, host, password, database) {
        this.port = port;
        this.host = host;
        this.password = password;
        this.database = database;
    }
    static createDatabase(config) {
        if (![Database.PORT, Database.TYPE_POSTGRES, Database.TYPE_MYSQL].includes(config.database)) {
            throw new Error('Erro');
        }
        return new Database(config.port, config.host, config.password, config.database);
    }
}
Database.PORT = 5432;
Database.TYPE_POSTGRES = 'POSTGRES';
Database.TYPE_MYSQL = 'MYSQL';
exports.Database = Database;
