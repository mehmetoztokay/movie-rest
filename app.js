const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// DB Connect
const dbconnect = require('./helpers/dbconnect')()

// Routes
const index = require('./routes/index')
const movie = require('./routes/movie')
const director = require('./routes/director')

app.use('/api/', index)
app.use('/api/movies', movie)
app.use('/api/directors', director)

// Error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500)
  res.json({ err: { message: err.message, code: err.code } })
})

app.listen(3000, () => {
  console.log('3000, ayakta...')
})
