import dotenv from 'dotenv'

dotenv.config()

const SERVER_PORT: string = process.env.SERVER_PORT

export default {
	SERVER_PORT
}
