const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const LojaSchema = new mongoose.Schema({
  razaoSocial: {
    type: String,
    required: true
  },
  nomeFantasia: {
    type: String,
    required: true
  },
  cnpjCpf: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

LojaSchema.plugin(paginate)
module.exports = mongoose.model('Loja', LojaSchema)
