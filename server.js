const app = new (require('express'))()
const cors = require('cors')
const session = require('express-session')
const mongoose = require('mongoose')
const notifier = require('node-notifier')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const usersRouter = require('./src/backend/users/users.router')

// Classes
// const Sockets = require('./src/backend/sockets/Sockets')
// const sockets = new Sockets({app: app, http: http})
// app.set('socket', sockets)
const getServerHost = require('./src/backend/shared/helpers/getServerHost')


app.set('port', process.env.PORT || 3002)
app.set('host', process.env.SERVER_HOST || getServerHost({ host: 'schat.app' }))
app.set('frontHost', process.env.FRONT_HOST || 'http://schat.app')

app.use(cors({credentials: true, origin: app.get('frontHost')}))
app.use(cookieParser('test'))
app.use(bodyParser())
app.use(session({ secret: 'test' }))

mongoose.connect('mongodb://localhost/schat')
mongoose.connection.once('open', () => console.log('Подключено к mongodb'))

// Routers
const appRouter = require('./src/backend/app.router')
const roomsRouter = require('./src/backend/rooms/rooms.router')(app)
const messagesRouter = require('./src/backend/messages/messages.router')(app)

app.use('/', appRouter)
app.use('/users', usersRouter)
app.use('/rooms', roomsRouter)
app.use('/messages', messagesRouter)

app.listen(app.get('port'), app.get('host'), error => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`
  console.log(mess)
  if (!error) notifier.notify(`${mess}`)
})