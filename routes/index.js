const router = require('express').Router()

router.post('/', (req, res, next) => {
  const { title, imdb_score, category, country, year } = req.body
  res.json(title)
})

module.exports = router
