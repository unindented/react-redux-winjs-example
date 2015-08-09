import {Component, PropTypes} from 'react'

import * as ApiHelper from 'ApiHelper'
import * as RealtimeHelper from 'RealtimeHelper'

export default class RealtimeConnection extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  componentDidMount () {
    let connection

    try {
      connection = RealtimeHelper.createConnection()
      this.setState({connection})
    } catch (error) {
      console.warn(`Cannot connect to realtime: ${error.message}`)
      return
    }

    const {actions} = this.props

    connection.on('message', (evt) => {
      const data = JSON.parse(evt.data)
      if (data.create) {
        if (data.create.user) {
          ApiHelper.getUsersById(data.create.user).then((users) => {
            console.debug(users)
          })
        }
      }
      console.debug(data)
    })
  }

  componentDidUnmount () {
    this.state.connection.close()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return false
  }
}
