const getServerHost = require('../helpers/getServerHost')

module.exports = (app) => {
  app.set('port', process.env.PORT || 3002)
  app.set('host', process.env.SERVER_HOST || getServerHost({ host: 'schat.app' }))
  app.set('frontHost', process.env.FRONT_HOST || 'http://schat.app')
}