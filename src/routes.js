const express = require('express')
const handle = require('express-async-handler')
const validate = require('express-validation')
const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

const authMiddleware = require('./app/middlewares/auth')

const rootUrl = '/api'

routes.post(`${rootUrl}/user`, validate(validators.UserValidator), handle(controllers.UserController.createUser))
routes.post(`${rootUrl}/login`, validate(validators.UserValidator), handle(controllers.SessionController.generateToken))

routes.use(authMiddleware)

/**
 *  USER ENTITY
 */
routes.put(`${rootUrl}/user/:id`, validate(validators.UserValidator), handle(controllers.UserController.updateUser))
routes.get(`${rootUrl}/users`, handle(controllers.UserController.getAllUser))
routes.get(`${rootUrl}/user/:id`, handle(controllers.UserController.getUser))
routes.delete(`${rootUrl}/user/:id`, handle(controllers.UserController.deleteUser))

/**
 * PessoaEntity
 */
routes.post(`${rootUrl}/pessoa`, validate(validators.PessoaValidator), handle(controllers.PessoaController.createPessoa))
routes.get(`${rootUrl}/pessoa`, handle(controllers.PessoaController.getAllPessoa))
routes.get(`${rootUrl}/pessoa/:id`, handle(controllers.PessoaController.getPessoa))

module.exports = routes
