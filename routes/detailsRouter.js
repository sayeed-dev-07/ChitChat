const { Router } = require('express')
const { messages } = require('./indexRouter')

const detailsRouter = Router()

detailsRouter.get('/:postId/details', (req, res) => {
    const postId = req.params.postId;
    const data = messages.find((item) => {
        return item.id === Number(postId)
    })
    res.render('details', { data })

})

module.exports = { detailsRouter }