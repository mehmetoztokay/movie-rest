const jwt = require('jsonwebtoken')

// Config .env
require('dotenv').config()
const api_secret_key = process.env.api_secret_key

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.body.token || req.query.token

  if (token) {
    jwt.verify(token, api_secret_key, (err, decoded) => {
      if (err) res.json({ status: false, message: 'Wrong token.' })
      else {
        req.decode = decoded
        next()
      }
    })
  } else res.json({ status: false, message: 'Get a token...' })
}
