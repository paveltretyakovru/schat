const app = new (require('express'))()
const http = require('http').Server(app)
const cors = require('cors')
const notifier = require('node-notifier')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Classes
const Sockets = require('./src/backend/sockets/Sockets')
const sockets = new Sockets({app: app, http: http})

// Helpers
const getServerHost = require('./src/backend/shared/helpers/getServerHost')

app.set('port', process.env.PORT || 3002)
app.set('host', process.env.SERVER_HOST || getServerHost())
app.set('socket', sockets)
app.set('frontHost', process.env.FRONT_HOST || 'http://localhost:8080')

app.use(cors({credentials: true, origin: app.get('frontHost')}))
app.use(bodyParser())

mongoose.connect('mongodb://localhost/schat')
mongoose.connection.once('open', () => console.log('Подключено к mongodb'))

// Routers
const appRouter = require('./src/backend/app.router')
const usersRouter = require('./src/backend/users/users.router')
const roomsRouter = require('./src/backend/rooms/rooms.router')(app)
const messagesRouter = require('./src/backend/messages/messages.router')(app)

app.use('/', appRouter)
app.use('/users', usersRouter)
app.use('/rooms', roomsRouter)
app.use('/messages', messagesRouter)

http.listen(app.get('port'), app.get('host'), (error) => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`;

  if (!error) {
    console.log('Server started on', {
      host: app.get('host'),
      port: app.get('port'),
    })
    notifier.notify(`${mess}`);
  }
})