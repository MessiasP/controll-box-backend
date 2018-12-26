const PessoaModel = require('../models/PessoaModel')

class PessoaController {
  async createPessoa (req, res) {
    const pessoaRes = await PessoaModel.create(req.body)
    return res.json(pessoaRes)
  }

  async updatePessoa (req, res) {
    const pessoaRes = await PessoaModel.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(pessoaRes)
  }

  async getAllPessoa (req, res) {
    const pessoaRes = await PessoaModel.paginate({}, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt',
      populate: ['idUser']
    })
    res.json({ pessoaRes })
  }

  async getPessoa (req, res) {
    const pessoaRes = await PessoaModel.findById(req.params.id).populate('idUser')
    return res.json(pessoaRes)
  }

  async deletePessoa (req, res) {
    await PessoaModel.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new PessoaController()
