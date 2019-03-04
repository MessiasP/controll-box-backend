const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ComandaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  valorTotal: {
    type: Number,
    required: true
  },
  idProdutos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

ComandaSchema.plugin(paginate)
module.exports = mongoose.model('Comanda', ComandaSchema)
