const Joi = require('joi')

module.exports = {
  body: {
    nome: Joi.string().required(), 
    descricao: Joi.string(),
    valorTotal: Joi.string(),
  }
}
