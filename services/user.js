const base = require('./base')
const User = require('../models/User')

class user extends base {}

module.exports = new user(User)
