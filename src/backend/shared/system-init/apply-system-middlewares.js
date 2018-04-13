const cors = require('cors')
const bodyParser = require('body-parser')

module.exports = (app) => {
  app.use(cors({credentials: true, origin: app.get('frontHost')}))
  app.use(bodyParser())
}