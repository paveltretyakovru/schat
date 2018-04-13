const app = new (require('express'))()

// Initing, declaring and appling system middlewares and variables
require('./src/backend/shared/system-init/set-env-variables')(app)
require('./src/backend/shared/system-init/connect-to-mongo-db')()
require('./src/backend/shared/system-init/apply-system-middlewares')(app)

// Declaring routes
app.use('/', require('./src/backend/app.router'))
app.use('/users', require('./src/backend/users/users.router'))
app.use('/rooms', require('./src/backend/rooms/rooms.router')(app))
app.use('/messages', require('./src/backend/messages/messages.router')(app))

// Run server
require('./src/backend/shared/system-init/start-server')(app)