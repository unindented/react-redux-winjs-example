import Immutable from 'immutable'
import React from 'react/addons'

import GroupsSidebar from 'GroupsSidebar'

const {TestUtils} = React.addons

describe('GroupsSidebar', () => {
  let instance

  beforeEach(() => {
    const groups = Immutable.fromJS({
      '1': {id: '1', name: 'Foo Bar'},
      '2': {id: '2', name: 'Baz Qux'}
    })

    const actions = {
      getGroups: () => {}
    }

    instance = TestUtils.renderIntoDocument(
      <GroupsSidebar groups={groups} actions={actions} />
    )
  })

  it('has the `GroupsSidebar` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('GroupsSidebar')
  })
})
