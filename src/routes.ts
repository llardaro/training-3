import express from 'express'

import UserController from './app/controllers/UserController'

const routes = express.Router()

routes.get('/users.get', UserController.userGet)
routes.get('/users.list', UserController.userList)

export default routes