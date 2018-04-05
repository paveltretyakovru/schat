const express = require('express')
const router = express.Router()

const User = require('./User')
const prepareMongoMessage = require('../shared/helpers/prepare-mongo-message')

router.get('/', (req, res) => {
  res.json({ router: '/users/' })
})

router.post('/login', (req, res) => {
  
})

router.post('/register', (req, res) => {
  try {
    const { login, password, repassword } = req.body
    const user = new User({ login: login, password: password })

    if (password !== repassword) throw new Error('Invalid password and repassword')

    user.save((err, model) => {
      try {
        if (err) throw new Error('Error on save user ' + err.message)
        res.json({ success: true, message: 'User was created', data: model })
      } catch (errorSave) {
        const message = prepareMongoMessage(errorSave.message, {
          exists: 'User already exists',
        })

        res.status(500)
        res.json({ success: false, message: message })
      }
    })

  } catch (error) {
    console.log(error.message)

    res.status(500)
    res.json({ success: false, message: error.message })
  }
})

module.exports = router