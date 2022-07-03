const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Movie sayfasi')
})

module.exports = router
