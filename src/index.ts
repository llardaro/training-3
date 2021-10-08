import express from 'express'
import Sentry from '@sentry/node'
import Tracing from '@sentry/tracing'

import config from './core/config'
import routes from './api/routes/router'

const app = express()
const port = config.SERVER_PORT

Sentry.init({
	dsn: 'https://b5d11e02351d4f95b998ebb4cdee40fc@o950799.ingest.sentry.io/5992405',
	integrations: [
		new Sentry.Integrations.Http({ tracing: true }),
		new Tracing.Integrations.Express({ app })
	],
	environment: 'dev'
})

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())

app.use('/api/v1/', routes)

app.use(Sentry.Handlers.errorHandler())

app.listen(port, () => {
	// tslint:disable-next-line
	console.log(`${port}`)
})
