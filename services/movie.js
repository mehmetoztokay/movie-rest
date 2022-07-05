const base = require('./base')
const Movie = require('../models/Movie')
class movie extends base {
  async getTopMovies(getTopValue) {
    const value = parseInt(getTopValue)
    return Movie.find()
      .sort({ imdb_score: -1 })
      .limit(value || 10)
  }

  async getBetweenOfYears(startYear, endYear) {
    return Movie.find({
      year: {
        $gte: parseInt(startYear),
        // $gte: >=
        // $gt: >
        $lte: parseInt(endYear)
        // $lte: <=
        // $lte: <
      }
    })
  }
}

module.exports = new movie(Movie)
