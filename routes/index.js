const router = require('express').Router()

router.post('/', (req, res, next) => {
  res.send('Index Page')
})

module.exports = router
