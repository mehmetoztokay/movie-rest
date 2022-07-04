const router = require('express').Router()

const movieservice = require('../services/movie')

router.post('/', async (req, res, next) => {
  const { title, imdb_score, category, country, year } = req.body
  await movieservice
    .insertOne({ title, imdb_score, category, country, year })
    .then((response) => res.send(response))
    .catch((error) => res.status(400).send(error.message))
    .finally(console.log('Ekleme islemi tamamlandi.'))
})

module.exports = router
