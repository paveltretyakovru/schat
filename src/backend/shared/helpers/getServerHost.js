const ips = require('./getIPvAddress')()

const getServerHost = () => {
  if (ips.length > 0) {
    return ips[0]
  } else {
    return 'localhost'
  }
}

module.exports = getServerHost