const app = new (require('express'))()
const initSystemPath = './src/backend/shared/system-init'

// Initing, declaring and appling system middlewares and variables
require(`${initSystemPath}/set-env-variables`)(app)
require(`${initSystemPath}/connect-to-mongo-db`)()
require(`${initSystemPath}/apply-system-middlewares`)(app)

const appRouter = require('./src/backend/app.router')
const usersRouter = require('./src/backend/users/users.router')
const roomsRouter = require('./src/backend/rooms/rooms.router')(app)
const messagesRouter = require('./src/backend/messages/messages.router')(app)

// Declaring routes
app.use('/', appRouter)
app.use('/users', usersRouter)
app.use('/rooms', roomsRouter)
app.use('/messages', messagesRouter)

// Run server
require(`${initSystemPath}/start-server`)(app)