const Joi = require('joi')

module.exports = {
  body: {  
    nome: Joi.string().required().min(3).max(50),   
    sobrenome: Joi.string(),   
    cpf: Joi.number().required(),  
  }
}
