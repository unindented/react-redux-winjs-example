import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import './GroupItem.less'

export default class GroupItem extends Component {
  static propTypes = {
    group: ImmutablePropTypes.map.isRequired
  }

  render () {
    const {group} = this.props
    const name = group.get('name')
    const avatar = group.get('avatar')

    return (
      <div className='GroupItem'>
        <img className='GroupItem-avatar'
          src={avatar}
          alt='' />
        <span className='GroupItem-name win-type-ellipsis'>
          {name}
        </span>
      </div>
    )
  }
}
