const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb+srv://mehmet:123@cluster0.7sl5bwg.mongodb.net/?retryWrites=true&w=majority')

  mongoose.connection.on('open', () => {
    console.log('Mongoose baglandi...')
  })

  mongoose.connection.on('error', (error) => {
    console.log(error)
  })
}
