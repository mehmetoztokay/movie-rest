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

app.use('/api/', index)
app.use('/api/movies', movie)

app.listen(3000, () => {
  console.log('3000, ayakta...')
})
