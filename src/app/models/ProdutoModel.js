const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ProdutoSchema = new mongoose.Schema({
  codigoBarra: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  valorCompra: {
    type: String,
    required: true
  },
  valorVenda: {
    type: String,
    required: true
  },
  quantidade: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  idLoja: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loja',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

ProdutoSchema.plugin(paginate)
module.exports = mongoose.model('Produto', ProdutoSchema)
