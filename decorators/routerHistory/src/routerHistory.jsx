import React from 'react'
import {History} from 'react-router'

export default function (DecoratedComponent) {
  return React.createClass({
    mixins: [History],

    render () {
      return (
        <DecoratedComponent {...this.props} history={this.history} />
      )
    }
  })
}
