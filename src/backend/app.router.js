const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({router: '/'})
})

module.exports = router