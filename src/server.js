import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

const PORT = 8080

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  return res.json({ hello: 'world' })
})

app.post('/', (req, res) => {
  const body = req.body
  console.log(body)
  return res.send('ok')
})

export const start = () => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
  })
}
