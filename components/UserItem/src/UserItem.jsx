import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import './UserItem.less'

export default class UserItem extends Component {
  static propTypes = {
    user: ImmutablePropTypes.map.isRequired
  }

  render () {
    const {user} = this.props
    const fullName = `${user.get('firstName')} ${user.get('lastName')}`
    const jobTitle = user.get('jobTitle')
    const avatar = user.get('avatar')

    return (
      <div className='UserItem'>
        <img className='UserItem-avatar'
          src={avatar}
          alt='' />
        <div className='UserItem-info'>
          <span className='UserItem-name win-type-ellipsis'>
            {fullName}
          </span>
          <span className='UserItem-misc win-type-ellipsis'>
            {jobTitle}
          </span>
        </div>
      </div>
    )
  }
}
