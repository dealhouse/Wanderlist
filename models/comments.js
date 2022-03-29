const { Schema } = require('mongoose')


const Comment = new Schema (
    {
        first: { type: String, required: true},
        last: { type: String, required: true},
        // image: { type: String, required: true},
        description: { type: String, required: true},
        date: { type: String, required: true},
        location: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Comment