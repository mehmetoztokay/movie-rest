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

// Get top 10 movies
router.get('/getTop/:getTopValue', async (req, res, next) => {
  await movieservice
    .getTopMovies(req.params.getTopValue)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally('Finished get top movie method.')
})

// Get a movie
router.get('/:movieId', async (req, res, next) => {
  await movieservice
    .loadOne(req.params.movieId)
    .then((movie) => {
      res.json(movie)
    })
    .catch((error) => {
      next({ message: "The movie wasn't found.", code: 1 })
    })
    .finally(console.log('Finished get a movie.'))
})

// Get between of years movie
router.get('/between/:startYear/:endYear', async (req, res, next) => {
  const { startYear, endYear } = req.params
  await movieservice
    .getBetweenOfYears(startYear, endYear)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally(console.log('Finished get between of years movies method.'))
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

// Delete a movie
router.delete('/:movieId', async (req, res, next) => {
  await movieservice
    .deleteOne(req.params.movieId)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally(console.log('Finished delete a movie method'))
})

module.exports = router
