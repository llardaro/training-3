import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    // tslint:disable-next-line
    console.log(`${port}`)
})