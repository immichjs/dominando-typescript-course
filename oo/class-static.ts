import { Database } from "../modules/Database"

const connection = Database.createDatabase({
  database: Database.TYPE_POSTGRES,
  host: '127.0.0.1',
  port: Database.PORT,
  password: '12345'
})

console.log(connection)
