import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import selectedGroupSelector from 'selectedGroupSelector'
import SelectedGroupPage from 'SelectedGroupPage'
import * as SelectedGroupActions from 'SelectedGroupActions'

@connect((state) => ({
  selectedGroup: selectedGroupSelector(state)
}))
export default class SelectedGroupContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const {dispatch, ...others} = this.props

    return (
      <SelectedGroupPage {...others} actions={bindActionCreators(SelectedGroupActions, dispatch)} />
    )
  }
}
