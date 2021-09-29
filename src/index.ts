import express from "express"
import dotenv from "dotenv"
import routes from "./routes"

dotenv.config()

const app = express()
const port = process.env.SERVER_PORT

app.use("/api/v1/", routes)

app.listen(port, () => {
    // tslint:disable-next-line
    console.log(`${port}`)
})