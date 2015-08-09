import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import UsersList from 'UsersList'
import './UsersSidebar.less'

export default class UsersSidebar extends Component {
  static propTypes = {
    users: ImmutablePropTypes.map.isRequired,
    selectedUser: ImmutablePropTypes.map,
  }

  render () {
    const {users, selectedUser} = this.props

    return (
      <div className='UsersSidebar'>
        <UsersList users={users} selectedUser={selectedUser} />
      </div>
    )
  }
}
