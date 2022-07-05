const router = require('express').Router()

const movieservice = require('../services/movie')

// Get all
router.get('/', async (req, res, next) => {
  const movies = await movieservice
    .loadAll()
    .then((movies) => res.json(movies))
    .catch((error) => res.json(error))
    .finally(console.log('Finished get all movies function.'))
})

// Get a movie
router.get('/:movieId', async (req, res, next) => {
  const movie = await movieservice
    .loadOne(req.params.movieId)
    .then((movie) => {
      res.json(movie)
    })
    .catch((error) => {
      next({ message: "The movie wasn't found.", code: 1 })
    })
    .finally(console.log('Finished get a movie.'))
})

// Create a movie
router.post('/', async (req, res, next) => {
  const { title, imdb_score, category, country, year } = req.body
  await movieservice
    .insertOne({ title, imdb_score, category, country, year })
    .then((response) => res.send(response))
    .catch((error) => res.status(400).send(error.message))
    .finally(console.log('Finished create a movie.'))
})

// Update a movie
router.put('/:movieId', async (req, res, next) => {
  const { title, imdb_score, category, country, year } = req.body
  await movieservice
    .updateOne(req.params.movieId, { title, imdb_score, category, country, year })
    .then((response) => res.json(response))
    .catch((error) => res.status(400).send(error.message))
    .finally(console.log('Finished update a movie method.'))
})

module.exports = router
