const base = require('./base')
const User = require('../models/User')

const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Config .env
require('dotenv').config()
const api_secret_key = process.env.api_secret_key

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

  async authenticate(object) {
    const { username, password } = object

    return User.findOne({ username })
      .then((userfromdb) => {
        if (!userfromdb) return { status: false, message: 'Authentication failed, user not found.' }
        else {
          return bcryptjs.compare(password, userfromdb.password).then((result) => {
            if (!result) return { status: false, message: 'Authentication failed, wrong password.' }
            else {
              const payload = {
                username
              }
              const token = jwt.sign(payload, api_secret_key, {
                expiresIn: 720 // 12 hours
              })
              return { status: true, token }
            }
          })
        }
      })
      .catch((err) => err)
  }
}

module.exports = new user(User)
