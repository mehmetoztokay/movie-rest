const router = require('express').Router()

const movieservice = require('../services/movie')

// Get all
router.get('/', async (req, res, next) => {
  const movies = await movieservice
    .loadAll()
    .then((movies) => res.json(movies))
    .catch((error) => res.json(error))
    .finally(console.log('Tum filmlerin cekilme islemi tamamlandi.'))
})

// Create a movie
router.post('/', async (req, res, next) => {
  const { title, imdb_score, category, country, year } = req.body
  await movieservice
    .insertOne({ title, imdb_score, category, country, year })
    .then((response) => res.send(response))
    .catch((error) => res.status(400).send(error.message))
    .finally(console.log('Ekleme islemi tamamlandi.'))
})

module.exports = router
