const ComandaModel = require('../models/ComandaModel')

class ComandaController {
  async createComanda (req, res) {
    const comandaRes = await ComandaModel.create(req.body)
    return res.json(comandaRes)
  }

  async updateComanda (req, res) {
    const comandaRes = await ComandaModel.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(comandaRes)
  }

  async getAllComanda (req, res) {
    const comandaRes = await ComandaModel.paginate({}, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt'
    })
    res.json({ comandaRes })
  }

  async getComanda (req, res) {
    const comandaRes = await ComandaModel.findById(req.params.id)
    return res.json(comandaRes)
  }

  async deleteComanda (req, res) {
    await ComandaModel.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new ComandaController()
