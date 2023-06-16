import { IDatabaseConfiguration } from "./interfaces/database-configuration.interface"

export class Database {
  static PORT = 5432
  static TYPE_POSTGRES = 'POSTGRES'
  static TYPE_MYSQL = 'MYSQL'

  constructor(private port: number, private host: string, private password: string, private database: string) { }

  static createDatabase(config: IDatabaseConfiguration) {
    if (![Database.PORT, Database.TYPE_POSTGRES, Database.TYPE_MYSQL].includes(config.database)) {
      throw new Error('Erro')
    }

    return new Database(
      config.port,
      config.host,
      config.password,
      config.database
    )
  }
}
