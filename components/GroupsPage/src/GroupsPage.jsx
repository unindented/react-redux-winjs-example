import React, {Component, PropTypes} from 'react'

import runOnTransition from 'runOnTransition'
import GroupsSidebar from 'GroupsSidebar'
import NoSelection from 'NoSelection'
import './GroupsPage.less'

@runOnTransition(
  (params, actions) => {
    actions.getGroups()
  }
)
export default class GroupsPage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  render () {
    const {children, ...others} = this.props

    return (
      <div className='GroupsPage'>
        <div className='GroupsPage-sidebar'>
          <GroupsSidebar {...others} />
        </div>
        <div className='GroupsPage-main'>
          {children || <NoSelection />}
        </div>
      </div>
    )
  }
}
