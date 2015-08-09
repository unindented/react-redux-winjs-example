import assign from 'lodash/object/assign'
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Application from 'Application'
import * as GroupsActions from 'GroupsActions'
import * as UsersActions from 'UsersActions'

@connect((state) => state)
export default class ApplicationContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  render () {
    const {dispatch, children, ...others} = this.props
    const actions = assign({}, GroupsActions, UsersActions)

    return (
      <Application {...others} actions={bindActionCreators(actions, dispatch)}>
        {children}
      </Application>
    )
  }
}
