const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ router: '/users/' })
})

router.post('/login', (req, res) => {
  const { login, password } = req.body
  res.json({ success: true, message: 'Post login', data: { login, password } })
})

module.exports = router