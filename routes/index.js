const userservice = require('../services/user')

const router = require('express').Router()

// Create a User
router.post('/register', (req, res, next) => {
  const { username, password } = req.body
  userservice
    .insertOne({ username, password })
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
})

// Authenticate User
router.post('/authenticate', (req, res, send) => {
  const { username, password } = req.body
  userservice
    .authenticate({ username, password })
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
})

module.exports = router
