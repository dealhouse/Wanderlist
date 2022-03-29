const express = require('express')
const PORT = 3001
const routes = require('./routes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()

const { Comment, Note } = require('./models')
const db = require('./db')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(cors())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
