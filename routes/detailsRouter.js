const { Router } = require('express')
const { getMessageDetailsControl } = require('../controllers/detailsController')


const detailsRouter = Router()

detailsRouter.get('/:postId/details', getMessageDetailsControl)

module.exports = { detailsRouter }