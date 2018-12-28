const Joi = require('joi')

module.exports = {
  body: {
    codigoBarra: Joi.string().required(), 
    nome: Joi.string().required(), 
    marca: Joi.string().required(), 
    valorCompra: Joi.string().required(), 
    valorVenda: Joi.string().required(), 
    quantidade: Joi.string().required(), 
    descricao: Joi.string(),
  }
}
