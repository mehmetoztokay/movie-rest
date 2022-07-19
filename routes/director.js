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

// Get all directors
router.get('/', async (req, res, next) => {
  directorservice
    .loadAll()
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally(console.log('Worked get all directors method.'))
})

module.exports = router
