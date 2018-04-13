const ips = require('./getIPvAddress')()

const getServerHost = (props) => {
  const host = props.host || false
  const localhost = props.localhost || false

  if (host) return host
  if (localhost) return '127.0.0.1'

  if (ips.length > 0) {
    return ips[0]
  } else {
    return 'localhost'
  }
}

module.exports = getServerHost