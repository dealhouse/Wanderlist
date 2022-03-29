const db = require('../db')
const { Note } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const newNote = 
    {
        title: 'New Note',
        location: 'location',
        description: 'description'
    }
    await Note.create(newNote)
    console.log('Created new note!')
}

const run = async () => {
    await main()
    db.close()
}

run()