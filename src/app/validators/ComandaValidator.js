const Joi = require('joi')

module.exports = {
  body: {
    mesaNome: Joi.string().required(), 
    vobservacao: Joi.string(),
    valorTotal: Joi.string(),
  }
}
