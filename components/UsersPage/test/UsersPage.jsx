import Immutable from 'immutable'
import React from 'react/addons'

import UsersPage from 'UsersPage'

const {TestUtils} = React.addons

describe('UsersPage', () => {
  let instance

  beforeEach(() => {
    const users = Immutable.fromJS({
      '1': {id: '1', firstName: 'Foo', lastName: 'Bar'},
      '2': {id: '2', firstName: 'Foo', lastName: 'Baz'}
    })

    const actions = {
      getUsers: () => {},
      selectUser: () => {}
    }

    instance = TestUtils.renderIntoDocument(
      <UsersPage users={users} actions={actions} />
    )
  })

  it('has the `UsersPage` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('UsersPage')
  })
})
