const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const socket = app.get('socket')

  router.post('/', (req, res) => {
    socket.emit('message', {success: true, message: 'Room was created'})
  })

  router.get('/', (req, res) => {
    res.json({success: true, message: 'Rooms get list'})
  })

  router.get('/:query', (req, res) => {
    res.json({success: true, message: 'Rooms search', query: req.params.query})
  })

  return router
}