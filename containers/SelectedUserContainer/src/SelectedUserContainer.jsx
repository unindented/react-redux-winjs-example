import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import selectedUserSelector from 'selectedUserSelector'
import SelectedUserPage from 'SelectedUserPage'
import * as SelectedUserActions from 'SelectedUserActions'

@connect((state) => ({
  selectedUser: selectedUserSelector(state)
}))
export default class SelectedUserContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const {dispatch, ...others} = this.props

    return (
      <SelectedUserPage {...others} actions={bindActionCreators(SelectedUserActions, dispatch)} />
    )
  }
}
