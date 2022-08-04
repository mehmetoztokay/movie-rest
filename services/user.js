const base = require('./base')
const User = require('../models/User')

const bcryptjs = require('bcryptjs')

class user extends base {
  async insertOne(object) {
    const { username, password } = object
    return bcryptjs
      .hash(password, 10)
      .then((hash) => {
        return this.model.create({ username, password: hash })
      })
      .catch((err) => {
        return err
      })
  }
}

module.exports = new user(User)
