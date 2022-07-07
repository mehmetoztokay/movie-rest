const express = require('express')
const router = express.Router()

const directorservice = require('../services/director')

// Create a director
router.post('/', async (req, res, next) => {
  const { name, surname, bio } = req.body
  directorservice
    .insertOne({ name, surname, bio })
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally(console.log('Worked create a director.'))
})

module.exports = router
