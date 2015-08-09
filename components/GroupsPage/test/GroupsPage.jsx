import Immutable from 'immutable'
import React from 'react/addons'

import GroupsPage from 'GroupsPage'

const {TestUtils} = React.addons

describe('GroupsPage', () => {
  let instance

  beforeEach(() => {
    const groups = Immutable.fromJS({
      '1': {id: '1', name: 'Foo'},
      '2': {id: '2', name: 'Bar'}
    })

    const actions = {
      getGroups: () => {},
      selectGroup: () => {}
    }

    instance = TestUtils.renderIntoDocument(
      <GroupsPage groups={groups} actions={actions} />
    )
  })

  it('has the `GroupsPage` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('GroupsPage')
  })
})
