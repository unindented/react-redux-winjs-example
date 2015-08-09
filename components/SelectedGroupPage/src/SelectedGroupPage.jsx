import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

import runOnTransition from 'runOnTransition'
import NoSelection from 'NoSelection'

import './SelectedGroupPage.less'

@runOnTransition(['id'],
  (params, actions) => {
    actions.selectGroup(params.id)
  },
  (params, actions) => {
    actions.selectGroup(null)
  }
)
export default class SelectedGroupPage extends Component {
  static propTypes = {
    selectedGroup: ImmutablePropTypes.map
  }

  render () {
    const group = this.props.selectedGroup

    if (!group) {
      return <NoSelection />
    }

    const name = group.get('name')
    const avatar = group.get('avatar')

    return (
      <div className='SelectedGroupPage'>
        <h2 className='SelectedGroupPage-title win-type-title'>
          <img className='SelectedGroupPage-avatar'
            src={avatar}
            alt='' />
          <span className='SelectedGroupPage-name'>
            {name}
          </span>
        </h2>
      </div>
    )
  }
}
