const { Router } = require('express')
const { addNewMessageControl, getForm } = require('../controllers/newRouteController')

const newRouter = Router()

newRouter.get('/new', getForm)
newRouter.post('/new', addNewMessageControl)

module.exports = { newRouter }