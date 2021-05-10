require('dotenv').config()
const { env } = process

module.exports = {
  PGHOST: env.PGHOST,
  PGUSER: env.PGUSER,
  PGPASS: 'bir234',
  PGDB: env.PGDB,
  PGPORT: env.PGPORT,
  PORT: env.PORT,
  CONNECTIONSTRING: env.CONNECTIONSTRING
}