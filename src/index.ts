import express from 'express'
import dotenv from 'dotenv'

import routes from './api/routes/router'
import sentryInit from './middlewares/sentry.middleware'

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

sentryInit(app)

app.use('/api/v1/', routes)

app.listen(port, () => {
  // tslint:disable-next-line
  console.log(`${port}`)
})
