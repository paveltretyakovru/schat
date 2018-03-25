const express = require('express')
const router = express.Router()

module.exports = (app) => {
  router.post('/', (req, res) => {
    const socket = app.get('socket')
    const { message, roomId } = req.body

    console.log('Messages Post Request -> ', req.body)

    const data = {
      success: true,
      message: 'Message was added',
      data: { message, roomId },
    }

    socket.emit('messageAdded', data)
    res.json(data)
  })

  return router
}