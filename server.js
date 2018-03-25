const app = new (require('express'))()
const http = require('http').Server(app)
const io = require('socket.io')(http);
const notifier = require('node-notifier')
const cors = require('cors')
const bodyParser = require('body-parser')

// Routers
const appRouter = require('./src/backend/app.router')
const userRouter = require('./src/backend/user/user.router')

io.on('connection', (socket) => {
  console.log('a user connected')

  app.set('socket', socket)

  io.clients((error, clients) => {
    console.log('Clients server', clients)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

app.set('port', process.env.PORT || 3002);
app.set('host', process.env.SERVER_HOST || 'localhost');
app.set('frontHost', process.env.FRONT_HOST || 'http://localhost:8080');

app.use(cors({credentials: true, origin: app.get('frontHost')}))
app.use(bodyParser())

app.use('/', appRouter)
app.use('/user', userRouter)
app.use('/rooms', require('./src/backend/rooms/rooms.router')(app))
app.use('/messages', require('./src/backend/messages/messages.router')(app))

http.listen(app.get('port'), app.get('host'), (error) => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`;

  if (!error) {
    notifier.notify(`${mess}`);
  }
})