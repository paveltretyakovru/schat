const notifier = require('node-notifier')

module.exports = (app) => {
  app.listen(app.get('port'), app.get('host'), error => {
    let mess = (error) ? error : `Server: ${app.get('host')}:${app.get('port')}/`
    console.log(mess)
    if (!error) notifier.notify(`${mess}`)
  })
}