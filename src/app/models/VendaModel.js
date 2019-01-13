const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const VendaSchema = new mongoose.Schema({
  idLojas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loja',
    required: true
  }],
  idProdutos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true
  }],
  totProdutos: {
    type: String,
    required: true
  },
  totLoja: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

VendaSchema.plugin(paginate)
module.exports = mongoose.model('Venda', VendaSchema)
