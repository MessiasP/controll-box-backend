const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/authConfig')
const paginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String
  },
  cpf: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

UserSchema.statics = {
  createToken ({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    })
  }
}

UserSchema.plugin(paginate)
module.exports = mongoose.model('User', UserSchema)
