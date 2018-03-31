const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ router: '/users/' })
})

module.exports = router