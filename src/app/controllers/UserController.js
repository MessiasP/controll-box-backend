const UserModel = require('../models/UserModel')

class UserController {
  async createUser (req, res) {
    try {
      const { login } = req.body
      if (await UserModel.findOne({ login })) {
          return res.status(400).json({ error: 'User already exists' })
        }
        const userRes = await UserModel.create(req.body)
        
        return res.json(userRes)
    }catch(error) {
          return res.status(500).json({ error: error })
    }
  }
  
  async updateUser (req, res) {
    try {
      const userRes = await UserModel.findOneAndUpdate(req.params.id, req.body, { new: true })
      
      return res.json(userRes)
    }catch(error) {
      return res.status(500).json({ error: error })
    }
  }
  
  async getAllUser (req, res) {
    try {
      const userRes = await UserModel.paginate({}, {
        page: req.query.page || 1,
        limit: 20,
        sort: '-createdAt'
      })
      res.json({ userRes })
    } catch(error) {
      return res.status(500).json({ error: error })
    }
  }
  
  async getUser (req, res) {
    try{
      const userRes = await UserModel.findOneById(req.params.id)
      
      return res.json(userRes)
    }catch(error) {
      return res.status(500).json({ error: error })
    }
  }
  
  async deleteUser (req, res) {
    try {
      await UserModel.findByIdAndDelete(req.params.id)
      
      return res.send()
    }catch(error) {
      return res.status(500).json({ error: error })
    }
  }
}
module.exports = new UserController()
