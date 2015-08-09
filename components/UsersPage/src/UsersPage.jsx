import React, {Component, PropTypes} from 'react'

import runOnTransition from 'runOnTransition'
import UsersSidebar from 'UsersSidebar'
import NoSelection from 'NoSelection'
import './UsersPage.less'

@runOnTransition(
  (params, actions) => {
    actions.getUsers()
  }
)
export default class UsersPage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  render () {
    const {children, ...others} = this.props

    return (
      <div className='UsersPage'>
        <div className='UsersPage-sidebar'>
          <UsersSidebar {...others} />
        </div>
        <div className='UsersPage-main'>
          {children || <NoSelection />}
        </div>
      </div>
    )
  }
}
