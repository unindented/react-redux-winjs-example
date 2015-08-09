import assign from 'lodash/object/assign'
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import groupsSelector from 'groupsSelector'
import selectedGroupSelector from 'selectedGroupSelector'
import GroupsPage from 'GroupsPage'
import NoSelection from 'NoSelection'
import * as GroupsActions from 'GroupsActions'
import * as SelectedGroupActions from 'SelectedGroupActions'

@connect((state) => ({
  groups: groupsSelector(state),
  selectedGroup: selectedGroupSelector(state)
}))
export default class GroupsContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  render () {
    const {dispatch, children, ...others} = this.props
    const actions = assign({}, GroupsActions, SelectedGroupActions)

    return (
      <GroupsPage {...others} actions={bindActionCreators(actions, dispatch)}>
        {children}
      </GroupsPage>
    )
  }
}
