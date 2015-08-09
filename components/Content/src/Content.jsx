import React, {Component, PropTypes} from 'react'

import './Content.less'

export default class Content extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  render () {
    const {children} = this.props

    return (
      <div className='Content' id='main' role='main'>
        {children}
      </div>
    )
  }
}
