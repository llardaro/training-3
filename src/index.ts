import express from 'express'

import config from './core/config'
import routes from './api/routes/router'

const app = express()
const port = config.SERVER_PORT

app.use('/api/v1/', routes)

app.listen(port, () => {
	// tslint:disable-next-line
	console.log(`${port}`)
})
