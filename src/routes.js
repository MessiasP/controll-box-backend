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
 *  USER'S ROUTES
 */
routes.put(`${rootUrl}/user/:id`, validate(validators.UserValidator), handle(controllers.UserController.updateUser))
routes.get(`${rootUrl}/users`, handle(controllers.UserController.getAllUser))
routes.get(`${rootUrl}/user/:id`, handle(controllers.UserController.getUser))
routes.delete(`${rootUrl}/user/:id`, handle(controllers.UserController.deleteUser))

/**
 * PRODUTO'S ROUTES
 */
routes.post(`${rootUrl}/produto`, validate(validators.ProdutoValidator), handle(controllers.ProdutoController.createProduto))
routes.get(`${rootUrl}/produto`, handle(controllers.ProdutoController.getAllProduto))
routes.get(`${rootUrl}/produto/:id`, handle(controllers.ProdutoController.getProduto))
routes.put(`${rootUrl}/produto/:id`, validate(validators.ProdutoValidator), handle(controllers.ProdutoController.updateProduto))
routes.delete(`${rootUrl}/produto/:id`, handle(controllers.ProdutoController.deleteProduto))

/**
 * LOJA'S ROUTES
 */
routes.post(`${rootUrl}/loja`, validate(validators.LojaValidator), handle(controllers.LojaController.createLoja))
routes.get(`${rootUrl}/loja`, handle(controllers.LojaController.getAllLoja))
routes.get(`${rootUrl}/loja/:id`, handle(controllers.LojaController.getLoja))
routes.put(`${rootUrl}/loja/:id`, validate(validators.LojaValidator), handle(controllers.LojaController.updateLoja))
routes.delete(`${rootUrl}/loja/:id`, handle(controllers.LojaController.deleteLoja))

/**
 *  COMANDA'S ROUTES
 */
routes.post(`${rootUrl}/comanda`, validate(validators.ComandaValidator), handle(controllers.ComandaController.createComanda))
routes.put(`${rootUrl}/comanda/:id`, validate(validators.ComandaValidator), handle(controllers.ComandaController.updateComanda))
routes.get(`${rootUrl}/comanda`, handle(controllers.ComandaController.getAllComanda))
routes.get(`${rootUrl}/comanda/:id`, handle(controllers.ComandaController.getComanda))
routes.delete(`${rootUrl}/comanda/:id`, handle(controllers.ComandaController.deleteComanda))

/**
 *  VENDA'S ROUTES
 */
routes.post(`${rootUrl}/venda`, validate(validators.VendaValidator), handle(controllers.VendaController.createVenda))
routes.put(`${rootUrl}/venda/:id`, validate(validators.VendaValidator), handle(controllers.VendaController.updateVenda))
routes.get(`${rootUrl}/venda`, handle(controllers.VendaController.getAllVenda))
routes.get(`${rootUrl}/venda/:id`, handle(controllers.VendaController.getVenda))
routes.delete(`${rootUrl}/venda/:id`, handle(controllers.VendaController.deleteVenda))

// Do not remove this cometary
// ===== yeoman hook =====
module.exports = routes
