const Joi = require('joi')

module.exports = {
  body: {
    razaoSocial: Joi.string().required(), 
    nomeFantasia: Joi.string().required(), 
    cnpjCpf: Joi.string().required(), 
    cep: Joi.string().required(), 
    endereco: Joi.string().required(), 
  }
}
