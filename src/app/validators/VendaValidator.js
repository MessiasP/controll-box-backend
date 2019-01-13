const Joi = require('joi')

module.exports = {
  body: {
    totProdutos: Joi.string().required(), 
    totLoja: Joi.string().required(), 
    total: Joi.string().required(), 
  }
}
