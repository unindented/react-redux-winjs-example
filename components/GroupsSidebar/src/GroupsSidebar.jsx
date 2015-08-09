import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import GroupsList from 'GroupsList'
import './GroupsSidebar.less'

export default class GroupsSidebar extends Component {
  static propTypes = {
    groups: ImmutablePropTypes.map.isRequired,
    selectedGroup: ImmutablePropTypes.map
  }

  render () {
    const {groups, selectedGroup} = this.props

    return (
      <div className='GroupsSidebar'>
        <GroupsList groups={groups} selectedGroup={selectedGroup} />
      </div>
    )
  }
}
