const express = require('express')
const PORT = 3001
const routes = require('./routes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const ccontrollers= require('./controllers/index')
const { Comment } = require('./models')
const db = require('./db')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hi there')
})
app.get('/hello', (req, res) => {
    console.log('Youre in the /hello route handler')
    res.send('Howdy')
})

app.get('/comments', ccontrollers.getComments)



app.listen(PORT, () => console.log(`Server running on ${PORT}`))
