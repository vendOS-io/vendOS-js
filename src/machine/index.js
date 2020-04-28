import Base from '../base'

class Machine extends Base {

  async send (data) {

    return super.send({resource: 'machine', ...data})

  }
}

export default Machine
