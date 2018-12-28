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
 * ProdutoEntity
 */
routes.post(`${rootUrl}/produto`, validate(validators.ProdutoValidator), handle(controllers.ProdutoController.createProduto))
routes.get(`${rootUrl}/produto`, handle(controllers.ProdutoController.getAllProduto))
routes.get(`${rootUrl}/produto/:id`, handle(controllers.ProdutoController.getProduto))
routes.put(`${rootUrl}/produto/:id`, validate(validators.ProdutoValidator), handle(controllers.ProdutoController.updateProduto))
routes.delete(`${rootUrl}/produto/:id`, handle(controllers.ProdutoController.deleteProduto))

/**
 * LojaEntity
 */
routes.post(`${rootUrl}/loja`, validate(validators.LojaValidator), handle(controllers.LojaController.createLoja))
routes.get(`${rootUrl}/loja`, handle(controllers.LojaController.getAllLoja))
routes.get(`${rootUrl}/loja/:id`, handle(controllers.LojaController.getLoja))
routes.put(`${rootUrl}/loja/:id`, validate(validators.LojaValidator), handle(controllers.LojaController.updateLoja))
routes.delete(`${rootUrl}/loja/:id`, handle(controllers.LojaController.deleteLoja))

module.exports = routes
