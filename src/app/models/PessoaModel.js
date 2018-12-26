const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const PessoaSchema = new mongoose.Schema({ 
  nome: {
    type: String, 
    required: true 
  },
  sobrenome: {
    type: String, 
    required: false 
  },
  cpf: {
    type: Number, 
    required: true 
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

PessoaSchema.plugin(paginate)
module.exports = mongoose.model('Pessoa', PessoaSchema)
