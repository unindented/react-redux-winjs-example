import assign from 'lodash/object/assign'
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import usersSelector from 'usersSelector'
import selectedUserSelector from 'selectedUserSelector'
import UsersPage from 'UsersPage'
import * as UsersActions from 'UsersActions'
import * as SelectedUserActions from 'SelectedUserActions'

@connect((state) => ({
  users: usersSelector(state),
  selectedUser: selectedUserSelector(state)
}))
export default class UsersContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  render () {
    const {dispatch, children, ...others} = this.props
    const actions = assign({}, UsersActions, SelectedUserActions)

    return (
      <UsersPage {...others} actions={bindActionCreators(actions, dispatch)}>
        {children}
      </UsersPage>
    )
  }
}
