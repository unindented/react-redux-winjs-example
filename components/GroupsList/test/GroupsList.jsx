import Immutable from 'immutable'
import React from 'react/addons'

import GroupsList from 'GroupsList'

const {TestUtils} = React.addons

describe('GroupsList', () => {
  let instance

  beforeEach(() => {
    const groups = Immutable.fromJS({
      '1': {id: '1', name: 'Foo Bar'},
      '2': {id: '2', name: 'Baz Qux'}
    })

    instance = TestUtils.renderIntoDocument(
      <GroupsList groups={groups} />
    )
  })

  it('has the `GroupsList` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('GroupsList')
  })
})
