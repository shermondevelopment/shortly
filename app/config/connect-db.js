import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg

const dataBaseConfig = { connectString: process.env.DATABASE_URL }

if (process.env.MODE === 'PROD') {
  dataBaseConfig.ssl = {
    rejectUnauthorized: false
  }
}

const db = new Pool(dataBaseConfig)

export default db
