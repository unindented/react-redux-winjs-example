import Immutable from 'immutable'
import React, {Component, PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ReactWinJS from 'react-winjs'
import WinJS from 'winjs'

import pureRender from 'pureRender'
import routerHistory from 'routerHistory'
import GroupItem from 'GroupItem'
import * as WinControlHelper from 'WinControlHelper'

const groupSort = (a, b) => {
  const an = a.name
  const bn = b.name

  if (an < bn) {
    return -1
  } else if (an > bn) {
    return 1
  } else {
    return 0
  }
}

const groupRenderer = ReactWinJS.reactRenderer((group) => (
  <GroupItem group={Immutable.fromJS(group.data)} />
))

@pureRender
@routerHistory
export default class GroupsList extends Component {
  static propTypes = {
    groups: ImmutablePropTypes.map.isRequired,
    selectedGroup: ImmutablePropTypes.map
  }

  static defaultProps = {
    onClick: () => {}
  }

  handleSelectionChanged (evt) {
    const {groups, history} = this.props
    const listView = evt.currentTarget.winControl

    WinControlHelper.getFirstSelectedItem(listView).then((item) => {
      const group = groups.get(item.id)
      history.pushState(null, `/groups/${group.get('id')}`)
    })
  }

  handleContentAnimating (evt) {
    if (evt.detail.type === 'entrance') {
      evt.preventDefault()
    }
  }

  componentDidUpdate () {
    const group = this.props.selectedGroup
    const groupId = group && group.get('id')
    const listView = this.refs.list.winControl

    WinControlHelper.setSelection(listView, (item) => (item.id === groupId))
  }

  render () {
    const {groups} = this.props
    const data = new WinJS.Binding.List(groups.valueSeq().toJS())
      .createSorted(groupSort)

    return (
      <ReactWinJS.ListView ref='list'
        className='GroupsList win-selectionstylefilled'
        layout={{type: WinJS.UI.ListLayout}}
        itemDataSource={data.dataSource}
        itemTemplate={groupRenderer}
        tapBehavior='directSelect'
        selectionMode='single'
        onSelectionChanged={this.handleSelectionChanged.bind(this)}
        onContentAnimating={this.handleContentAnimating.bind(this)} />
    )
  }
}
