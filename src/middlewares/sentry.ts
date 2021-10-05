import Sentry from '@sentry/node'
import Tracing from '@sentry/tracing'

const sentryInit = (app: any) => {
	Sentry.init({
		dsn: 'https://b5d11e02351d4f95b998ebb4cdee40fc@o950799.ingest.sentry.io/5992405',
		integrations: [
			new Sentry.Integrations.Http({ tracing: true }),
			new Tracing.Integrations.Express({ app })
		],
		environment: process.env.MODE
	})

	app.use(Sentry.Handlers.requestHandler())
	app.use(Sentry.Handlers.tracingHandler())
	app.use(Sentry.Handlers.errorHandler())
}

export default sentryInit
