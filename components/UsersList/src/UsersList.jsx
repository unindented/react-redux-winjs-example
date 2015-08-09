import Immutable from 'immutable'
import React, {Component, PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ReactWinJS from 'react-winjs'
import WinJS from 'winjs'

import pureRender from 'pureRender'
import routerHistory from 'routerHistory'
import ListHeader from 'ListHeader'
import UserItem from 'UserItem'
import * as WinControlHelper from 'WinControlHelper'

const groupKey = (data) => (
  data.firstName.charAt(0).toUpperCase()
)

const groupData = (data) => (
  {title: groupKey(data)}
)

const userSort = (a, b) => {
  const an = a.firstName
  const bn = b.firstName

  if (an < bn) {
    return -1
  } else if (an > bn) {
    return 1
  } else {
    return 0
  }
}

const headerRenderer = ReactWinJS.reactRenderer((header) => (
  <ListHeader header={header.data.title} />
))

const userRenderer = ReactWinJS.reactRenderer((user) => (
  <UserItem user={Immutable.fromJS(user.data)} />
))

@pureRender
@routerHistory
export default class UsersList extends Component {
  static propTypes = {
    users: ImmutablePropTypes.map.isRequired,
    selectedUser: ImmutablePropTypes.map
  }

  handleSelectionChanged (evt) {
    const {users, history} = this.props
    const listView = evt.currentTarget.winControl

    WinControlHelper.getFirstSelectedItem(listView).then((item) => {
      const user = users.get(item.id)
      history.pushState(null, `/users/${user.get('id')}`)
    })
  }

  handleContentAnimating (evt) {
    if (evt.detail.type === 'entrance') {
      evt.preventDefault()
    }
  }

  componentDidUpdate () {
    const user = this.props.selectedUser
    const userId = user && user.get('id')
    const listView = this.refs.list.winControl

    WinControlHelper.setSelection(listView, (item) => (item.id === userId))
  }

  render () {
    const {users} = this.props
    const data = new WinJS.Binding.List(users.valueSeq().toJS())
      .createSorted(userSort)
      .createGrouped(groupKey, groupData)

    return (
      <ReactWinJS.ListView ref='list'
        className='UsersList win-selectionstylefilled'
        layout={{type: WinJS.UI.ListLayout}}
        itemDataSource={data.dataSource}
        itemTemplate={userRenderer}
        groupDataSource={data.groups.dataSource}
        groupHeaderTemplate={headerRenderer}
        tapBehavior='directSelect'
        selectionMode='single'
        onSelectionChanged={this.handleSelectionChanged.bind(this)}
        onContentAnimating={this.handleContentAnimating.bind(this)} />
    )
  }
}
