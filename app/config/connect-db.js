import pg from 'pg'
import 'dotenv/config'

const { Pool } = pg

const connectionString = process.env.DATABASE_URL

if (process.env.MODE === 'PROD') {
  connectionString.ssl = {
    rejectUnauthorized: false
  }
}

const db = new Pool({ connectionString })

export default db
