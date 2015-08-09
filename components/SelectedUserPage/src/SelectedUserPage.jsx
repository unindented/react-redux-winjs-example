import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import runOnTransition from 'runOnTransition'
import NoSelection from 'NoSelection'

import './SelectedUserPage.less'

@runOnTransition(['id'],
  (params, actions) => {
    actions.selectUser(params.id)
  },
  (params, actions) => {
    actions.selectUser(null)
  }
)
export default class SelectedUserPage extends Component {
  static propTypes = {
    selectedUser: ImmutablePropTypes.map
  }

  render () {
    const user = this.props.selectedUser

    if (!user) {
      return <NoSelection />
    }

    const name = `${user.get('firstName')} ${user.get('lastName')}`
    const avatar = user.get('avatar')

    return (
      <div className='SelectedUserPage'>
        <h2 className='SelectedUserPage-title win-type-title'>
          <img className='SelectedUserPage-avatar'
            src={avatar}
            alt='' />
          <span className='SelectedUserPage-name'>
            {name}
          </span>
        </h2>
      </div>
    )
  }
}
