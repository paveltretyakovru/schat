const jwt = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')

module.exports = (app) => {
  const secret = 'Harry Potter And Secret Room'
  const frontHost = app.get('frontHost')

  const configs = {
    jwt: {
      secret: secret,
    },

    cors: {
      origin: frontHost,
      credentials: true,
    },
  }

  app.use(bodyParser())
  app.use(cors(configs.cors))
  app.use(jwt(configs.jwt).unless({path: ['/users/login']}))
}