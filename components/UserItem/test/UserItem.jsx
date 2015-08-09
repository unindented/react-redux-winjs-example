import Immutable from 'immutable'
import React from 'react/addons'

import UserItem from 'UserItem'

const {TestUtils} = React.addons

describe('UserItem', () => {
  let instance

  beforeEach(() => {
    const user = Immutable.Map({
      id: '1',
      firstName: 'Foo',
      lastName: 'Bar',
      jobTitle: 'Baz',
      avatar: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    })

    instance = TestUtils.renderIntoDocument(
      <UserItem user={user} />
    )
  })

  it('has the `UserItem` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('UserItem')
  })

  it('displays the first and last names', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveDescendantWithText('.UserItem-name', 'Foo Bar')
  })

  it('displays the job title', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveDescendantWithText('.UserItem-misc', 'Baz')
  })

  it('displays the avatar', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveDescendant('.UserItem-avatar')
  })
})
