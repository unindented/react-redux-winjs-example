import Immutable from 'immutable'
import React from 'react/addons'

import GroupItem from 'GroupItem'

const {TestUtils} = React.addons

describe('GroupItem', () => {
  let instance

  beforeEach(() => {
    const group = Immutable.Map({id: '1', name: 'Foo Bar'})

    instance = TestUtils.renderIntoDocument(
      <GroupItem group={group} />
    )
  })

  it('has the `GroupItem` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('GroupItem')
  })

  it('displays the name', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveDescendantWithText('.GroupItem-name', 'Foo Bar')
  })

  it('displays the avatar', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveDescendant('.GroupItem-avatar')
  })
})
