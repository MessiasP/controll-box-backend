const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const ComandaSchema = new mongoose.Schema({
  mesaNome: {
    type: String,
    required: true
  },
  vobservacao: {
    type: String
  },
  idProdutos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true
  }],
  valorTotal: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

ComandaSchema.plugin(paginate)
module.exports = mongoose.model('Comanda', ComandaSchema)
