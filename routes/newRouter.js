const { Router } = require('express')
const { messages } = require('./indexRouter')

const newRouter = Router()

newRouter.get('/new', (req, res) => {
    res.render('form')
})
newRouter.post('/new', (req, res) => {
    const authorName = req.body.authorName;
    const message = req.body.inputMessage;
    messages.push({ user: authorName, text: message, added: new Date() })
    res.redirect("/")
})

module.exports = { newRouter }