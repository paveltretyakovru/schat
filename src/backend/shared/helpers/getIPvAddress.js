const os = require('os')
const ifaces = os.networkInterfaces()

const getIPvAddress = () => {
  const ips = []

  Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0
  
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return
      }
  
      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log('alias >= 1', ifname + ':' + alias, iface.address)
        ips.push(iface.address)
      } else {
        // this interface has only one ipv4 adress
        console.log('alias ELSE', ifname, iface.address)
        ips.push(iface.address)
      }

      ++alias
    })
  })

  return ips
}

module.exports = getIPvAddress