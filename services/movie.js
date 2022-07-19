const base = require('./base')
const Movie = require('../models/Movie')
class movie extends base {
  async loadAll() {
    return Movie.aggregate([
      {
        $lookup: {
          from: 'directors',
          localField: 'directorId',
          foreignField: '_id',
          as: 'director'
        }
      },
      { $unwind: '$director' }
    ])
  }

  // TODO: Add loadOne method and list the director' of the movie.

  async getTopMovies(getTopValue) {
    const value = parseInt(getTopValue)
    return Movie.find()
      .sort({ imdbScore: -1 })
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

  async getBetweenCreatedAt(startDate, endDate) {
    return Movie.find({
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    })
  }
}

module.exports = new movie(Movie)
