const VendaModel = require('../models/VendaModel')

class VendaController {
  async createVenda (req, res) {
    const vendaRes = await VendaModel.create(req.body)
    return res.json(vendaRes)
  }

  async updateVenda (req, res) {
    const vendaRes = await VendaModel.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(vendaRes)
  }

  async getAllVenda (req, res) {
    const vendaRes = await VendaModel.paginate({}, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt'
    })
    res.json({ vendaRes })
  }

  async getVenda (req, res) {
    const vendaRes = await VendaModel.findById(req.params.id)
    return res.json(vendaRes)
  }

  async deleteVenda (req, res) {
    await VendaModel.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new VendaController()
