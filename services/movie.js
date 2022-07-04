const base = require('./base')
const Movie = require('../models/Movie')
class movie extends base {}

module.exports = new movie(Movie)
