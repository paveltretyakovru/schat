const app = new (require('express'))();
const notifier = require('node-notifier');

// Routers
const appRouter = require('./src/backend/app.router')
const userRouter = require('./src/backend/user/user.router')

app.set('port', process.env.PORT || 3002);
app.set('host', process.env.SERVER_HOST || 'localhost');
app.set('frontHost', process.env.FRONT_HOST || 'localhost:8080');

app.use('/', appRouter)
app.use('/user', userRouter)

app.listen(app.get('port'), app.get('host'), (error) => {
  let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`;

  if (!error) {
    notifier.notify(`${mess}`);
  }
})