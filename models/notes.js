const { Schema } = require('mongoose')

const Note = new Schema (
    {
        title: {type: String, required: true},
        location: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = Note