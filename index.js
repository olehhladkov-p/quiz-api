import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

dotenv.config()

const API_VERSION = process.env.API_VERSION || 'v1'
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get(`/api/${API_VERSION}/healthcheck`, (req, res) => {
    res.json({ status: 200 })
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})
