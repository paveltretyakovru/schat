const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const socket = app.get('socket')

  router.post('/', (req, res) => {
    socket.emit('message', {success: true, message: 'Room was created'})
    res.json({success: true, message: 'Rooms post'})
  })

  router.get('/', (req, res) => {
    res.json({success: true, message: 'Rooms get list'})
  })

  router.get('/:query', (req, res) => {
    console.log('/rooms/search', req.params.query)
    res.json({
      success: true,
      message: 'Rooms search',
      query: req.params,
      result: [{
        id: 'some id',
        title: 'some room',
      }],
    })
  })

  return router
}