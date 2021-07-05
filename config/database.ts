/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | MySQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for MySQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i mysql
    |
    */
    mysql: {
      client: 'mysql2',
      replicas: {
        write: {
          connection: {
            timezone: Env.get('DB_TZ') as string,
            host: Env.get('MYSQL_HOST', '127.0.0.1') as string,
            port: Number(Env.get('MYSQL_PORT', 3306)),
            user: Env.get('MYSQL_USER', 'lucid') as string,
            password: Env.get('MYSQL_PASSWORD', 'lucid') as string,
            database: Env.get('MYSQL_DB_NAME', 'lucid') as string,
          },
        },
        read: {
          connection: [
            {
              timezone: Env.get('DB_TZ') as string,
              host: Env.get('DB_READ_HOST', Env.get('MYSQL_HOST')) as string,
              port: Number(Env.get('MYSQL_PORT', 3306)),
              user: Env.get('MYSQL_USER', 'lucid') as string,
              password: Env.get('MYSQL_PASSWORD', 'lucid') as string,
              database: Env.get('MYSQL_DB_NAME', 'lucid') as string,
            },
          ],
        },
      },
      migrations: {
        naturalSort: true,
      },
      debug: false,
      healthCheck: true,
    },
  },
}

export default databaseConfig