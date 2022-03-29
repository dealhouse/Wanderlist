const mongoose = require('mongoose')
const commentSchema = require('./comments')
const noteSchema = require('./notes')

const Comment = mongoose.model('comments', commentSchema)
const Note = mongoose.model('notes', noteSchema)

module.exports = {
    Comment,
    Note
}