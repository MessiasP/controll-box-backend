const LojaModel = require('../models/LojaModel')

class LojaController {
  async createLoja (req, res) {
    const lojaRes = await LojaModel.create(req.body)
    return res.json(lojaRes)
  }

  async updateLoja (req, res) {
    const lojaRes = await LojaModel.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(lojaRes)
  }

  async getAllLoja (req, res) {
    const lojaRes = await LojaModel.paginate({}, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt'
    })
    res.json({ lojaRes })
  }

  async getLoja (req, res) {
    const lojaRes = await LojaModel.findById(req.params.id)
    return res.json(lojaRes)
  }

  async deleteLoja (req, res) {
    await LojaModel.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new LojaController()
