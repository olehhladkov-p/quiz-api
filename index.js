import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { getCategories, getQuiz } from './utils.js'

dotenv.config()

const API_VERSION = process.env.API_VERSION || 'v1'
const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get(`/api/${API_VERSION}/healthcheck`, (req, res) => {
    res.json({ status: 200 })
})

app.get(`/api/${API_VERSION}/categories`, async (req, res) => {
    res.json({ status: 200, categories: await getCategories() })
})

app.get(`/api/${API_VERSION}/quiz`, async (req, res) => {
    res.json({ status: 200, quiz: await getQuiz(req.query) })
})

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})
