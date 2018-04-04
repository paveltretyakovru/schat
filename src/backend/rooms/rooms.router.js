const express = require('express')
const router = express.Router()

module.exports = (app) => {
  const socket = app.get('socket')

  router.post('/', (req, res) => {
    socket.emit('message', {success: true, message: 'Room was created'})
    res.json({success: true, message: 'Rooms post', result: {
      room: {
        id: 'random_id',
        key: '',
        favor: false,
        title: req.body.title,
        messages: [],
      }
    }})
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
      result: [
        {
          id: 0,
          title: req.params.query,
        },
      ],
    })
  })

  return router
}