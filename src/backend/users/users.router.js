const express = require('express')
const router = express.Router()

const User = require('./User')

router.get('/', (req, res) => {
  res.json({ router: '/users/' })
})

router.post('/login', (req, res) => {
  const { login, password } = req.body
  res.json({ success: true, message: 'Post login', data: { login, password } })
})

router.post('/register', (req, res) => {
  try {
    const { login, password, repassword } = req.body

    console.log('REGISTER ---->', {login, password})

    if (password !== repassword) throw new Error('Invalid password and repassword')

    const user = new User({ login: login, password: password })

    user.save((err, model) => {
      if (err) throw new Error('Error on save user ' + err.message)

      res.json(
        {
          success: true,
          message: 'User was created',
          data: model,
        }
      )
    })
  } catch (error) {
    console.log(error.message)

    res.status(500)
    res.json({ success: false, message: error.message })
  }
})

module.exports = router