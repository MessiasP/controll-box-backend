const ProdutoModel = require('../models/ProdutoModel')

class ProdutoController {
  async createProduto (req, res) {
    const produtoRes = await ProdutoModel.create(req.body)
    return res.json(produtoRes)
  }

  async updateProduto (req, res) {
    const produtoRes = await ProdutoModel.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(produtoRes)
  }

  async getAllProduto (req, res) {
    const produtoRes = await ProdutoModel.paginate({}, {
      page: req.query.page || 1,
      limit: req.query.limit || 25,
      sort: 'nome'
    })
    res.json({ produtoRes })
  }

  async getProduto (req, res) {
    const produtoRes = await ProdutoModel.findById(req.params.id)
    return res.json(produtoRes)
  }

  async deleteProduto (req, res) {
    await ProdutoModel.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new ProdutoController()
