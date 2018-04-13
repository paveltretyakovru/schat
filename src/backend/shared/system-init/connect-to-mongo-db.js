const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://localhost/schat')
  mongoose.connection.once('open', () => console.log('Подключено к mongodb'))
}