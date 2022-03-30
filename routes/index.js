const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => {
    res.send('this works')
})
router.get('/comments', controllers.getComments)
router.get('/newnote', controllers.getNewNote) 
router.get('/notes', controllers.getNotes)
router.post('/note', controllers.createNote)
router.get('/note/:id', controllers.getNoteById)
router.put('/note/:id', controllers.updateNote)
router.delete('/note/:id', controllers.deleteNote)
module.exports = router