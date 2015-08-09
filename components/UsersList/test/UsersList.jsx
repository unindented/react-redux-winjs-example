import Immutable from 'immutable'
import React from 'react/addons'

import UsersList from 'UsersList'

const {TestUtils} = React.addons

describe('UsersList', () => {
  let instance

  beforeEach(() => {
    const users = Immutable.fromJS({
      '1': {id: '1', firstName: 'Foo', lastName: 'Bar'},
      '2': {id: '2', firstName: 'Baz', lastName: 'Qux'}
    })

    instance = TestUtils.renderIntoDocument(
      <UsersList users={users} />
    )
  })

  it('has the `UsersList` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('UsersList')
  })
})
