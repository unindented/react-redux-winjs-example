import React, {Component, PropTypes} from 'react'

import './ListHeader.less'

export default class ListHeader extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired
  }

  render () {
    const {header} = this.props

    return (
      <div className='ListHeader'>
        {header}
      </div>
    )
  }
}
