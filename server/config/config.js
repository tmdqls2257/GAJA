const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'GAJA',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: { timestamps: false }
  },
  test: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'GAJA',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'GAJA',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
