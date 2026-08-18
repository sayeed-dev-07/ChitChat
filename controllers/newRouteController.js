const { addNewMessages } = require('../db/queries')

const getForm = async (req, res) => {
    res.render('form')
}

const addNewMessageControl = async (req, res) => {
    const { authorName, inputMessage } = req.body
    const data = { username: authorName, text: inputMessage }
    await addNewMessages(data)
    res.redirect("/")
}


module.exports = { addNewMessageControl, getForm }
