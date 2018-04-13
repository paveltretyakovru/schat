const app = new (require('express'))()
const initSystemPath = './src/backend/shared/system-init'

// Initing, declaring and appling system middlewares and variables
require(`${initSystemPath}/set-env-variables`)(app)
require(`${initSystemPath}/connect-to-mongo-db`)()
require(`${initSystemPath}/apply-system-middlewares`)(app)

// Declaring routes
app.use('/', require('./src/backend/app.router'))
app.use('/users', require('./src/backend/users/users.router'))
app.use('/rooms', require('./src/backend/rooms/rooms.router')(app))
app.use('/messages', require('./src/backend/messages/messages.router')(app))

// Run server
require(`${initSystemPath}/start-server`)(app)