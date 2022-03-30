const { Router } = require('express')
const {Comment, Note}  = require('../models')

const getComments = async (req, res) => {
    try {
    const comments = await Comment.find()
    return res.status(200).json({comments})
    }
    catch(e) {
        return res.status(500).send(e.message)
    } 
    
}

const getNewNote = async (req, res) => {
    try {
        const newNote = await Note.findById("6242ef9878e0a4b6294eba7b")
        return res.status(200).json({newNote})
    }
    catch(e) {
        return res.status(500).send(e.message)
}
}

const createNote = async (req, res) => {
    try {
        const note = await new Note(req.body)
        await note.save()
        return res.status(201).json({note})
    }
    catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getNotes = async (req, res) => {
    try{
        const note = await Note.find()
        return res.status(200).json({note})
    }
    catch(e) {
        return res.status(500).send(e.message)
    } 
    
}

const getNoteById = async (req, res) => {
    try {
        const { id } = req.params
        const note = await Note.findById(id)
        if (note) {
            return res.status(200).json({ note })
        }
        return res.status(404).send('Note with the specified ID does not exist')
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}
const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const note = await Note.findByIdAndUpdate(id, req.body, {new: true})
        if (note) {
            return res.status(200).send('Note updated')
        }
        throw new Error('Note not found')
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Note.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Note deleted')
        }
        throw new Error('Note not found')
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getComments,
    getNewNote,
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote
}