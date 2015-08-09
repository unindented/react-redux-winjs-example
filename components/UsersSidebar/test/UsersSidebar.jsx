import Immutable from 'immutable'
import React from 'react/addons'

import UsersSidebar from 'UsersSidebar'

const {TestUtils} = React.addons

describe('UsersSidebar', () => {
  let instance

  beforeEach(() => {
    const users = Immutable.fromJS({
      '1': {id: '1', firstName: 'Foo', lastName: 'Bar'},
      '2': {id: '2', firstName: 'Baz', lastName: 'Qux'}
    })

    const actions = {
      getUsers: () => {}
    }

    instance = TestUtils.renderIntoDocument(
      <UsersSidebar users={users} actions={actions} />
    )
  })

  it('has the `UsersSidebar` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('UsersSidebar')
  })
})
