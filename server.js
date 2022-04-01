const express = require('express')
const PORT = process.env.PORT ||3001
const routes = require('./routes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()

const { Comment, Note } = require('./models')
const db = require('./db')
const path = require("path");

if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));

   });

}


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('combined'))
app.use(cors())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
