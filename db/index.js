import CONNECTION_URL from '../server'
const mongoose = require('mongoose')

mongoose
    .connect(CONNECTION_URL)
    .then(() => {
        console.log('Successfully connected to MongoDB')
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

    const db = mongoose.connection
    module.exports = db