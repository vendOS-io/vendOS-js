import Instagram from './social/instagram'
import Twitter from './social/twitter'
import Local from './data/local'
import Vend from './machine/vend'
import Channels from './machine/channels'
import Charge from './payment/charge'
import Socket from './socket'
import {logError} from './helpers/logging'

if (navigator.userAgent.indexOf('Chrome') === -1) {

  logError('It is highly recommended that you develop vendOS in Chrome v.77+.')

}

class VendOS {

  constructor () {

    Socket.connect()

    this.Machine = {
      vend: new Vend(),
      channels: new Channels()
    }

    this.Social = {
      twitter: new Twitter(),
      instagram: new Instagram()
    }

    this.Data = {
      local: new Local()
    }

    this.Payment = {
      charge: new Charge()
    }
  }
}

export default VendOS
