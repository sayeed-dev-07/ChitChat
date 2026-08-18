const { getAllMessages } = require('../db/queries')


const getAllMessagesControl = async (req, res) => {
    const messages = await getAllMessages();
    res.render('index', { messages, title: 'ChitChat' })

}

module.exports = { getAllMessagesControl }