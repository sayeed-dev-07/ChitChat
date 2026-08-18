const { Router } = require('express')
const { getAllMessagesControl } = require('../controllers/indexController')


const indexRouter = Router()



indexRouter.get('/', getAllMessagesControl)

module.exports = { indexRouter }