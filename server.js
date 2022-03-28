const express = require('express')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const CONNECTION_URL = 'mongodb+srv://ddeal:project2@project2.r5qp9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use((bodyParser.urlenconded()))
app.use(logger)
app.use(cors)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

export default CONNECTION_URL