const {Comment}  = require('../models')

const getComments = async (req, res) => {
    try {
    const comments = await Comment.find()
    return res.status(200).json({comments})
    }
    catch(e) {
        return res.status(500).send(e.message)
    } 
    // res.send('Hello')
}

module.exports = {
    getComments
}