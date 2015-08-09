import Immutable from 'immutable'
import React from 'react/addons'

import SelectedUserPage from 'SelectedUserPage'

const {TestUtils} = React.addons

describe('SelectedUserPage', () => {
  let instance

  beforeEach(() => {
    const user = Immutable.fromJS({
      id: '1', firstName: 'Foo', lastName: 'Bar'
    })

    const params = {
      id: '1'
    }

    const actions = {
      selectUser: () => {}
    }

    instance = TestUtils.renderIntoDocument(
      <SelectedUserPage selectedUser={user} params={params} actions={actions} />
    )
  })

  it('has the `SelectedUserPage` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('SelectedUserPage')
  })
})
