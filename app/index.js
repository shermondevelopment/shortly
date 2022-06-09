/** dotenv */
import 'dotenv/config'

/* express dependencies */
import express, { json } from 'express'

/** cors  */
import cors from 'cors'

/** initial server  */
const app = express()

/** setting server */
app.use(json())
app.use(cors())

app.listen(process.env.PORT_APP || 5555, () =>
  console.log(`app running in port ${process.env.PORT_APP} 🚀🚀🚀🚀🚀`)
)
