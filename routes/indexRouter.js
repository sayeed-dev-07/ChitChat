const { Router } = require('express')


const indexRouter = Router()

const messages = [
    {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: 1,
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }

];

indexRouter.get('/', (req, res) => {
    res.render('index', { messages, title: 'ChitChat' })
})

module.exports = { indexRouter, messages }