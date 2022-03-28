const express = require('express')
const PORT = 3001
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use((bodyParser.urlenconded()))
app.use(logger)
app.use(cors)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))