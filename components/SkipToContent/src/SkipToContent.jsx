import React, {Component} from 'react'

import './SkipToContent.less'

export default class Content extends Component {
  handleClick (evt) {
    evt.preventDefault()
    // Focus on the first element with a non-negative `tabindex` value.
    document.querySelector('#main [tabindex]:not([tabindex^="-"])').focus()
  }

  render () {
    return (
      <a className='SkipToContent win-ui-dark' href='#'
        onClick={this.handleClick.bind(this)}>
        Skip to main content
      </a>
    )
  }
}
