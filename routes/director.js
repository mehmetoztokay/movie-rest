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

// Get a director
router.get('/:directorId', async (req, res, next) => {
  const directorId = req.params.directorId
  directorservice
    .loadOne(directorId)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally('Worked get a director method.')
})

// Update a director
router.put('/:directorId', async (req, res, next) => {
  const directorId = req.params.directorId
  const { name, surname, bio, createdAt } = req.body
  directorservice
    .updateOne(directorId, { name, surname, bio, createdAt })
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally(console.log('Worked update a director method'))
})

// Delete a director
router.delete('/:directorId', (req, res, next) => {
  const directorId = req.params.directorId
  directorservice
    .deleteOne(directorId)
    .then((response) => res.json(response))
    .catch((error) => res.json(error))
    .finally(console.log('Worked delete a director method'))
})

module.exports = router
