const express = require('express')
const router = express.Router()

module.exports = (app) => {
  router.post('/', (req, res) => {
    const socket = app.get('socket')

    socket.emit('message', {success: true, message: 'Room was created'})
  })

  return router
}