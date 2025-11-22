const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan(process.env.LOG_FORMAT || 'combined'))

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

module.exports = app