import Immutable from 'immutable'
import React from 'react/addons'

import SelectedGroupPage from 'SelectedGroupPage'

const {TestUtils} = React.addons

describe('SelectedGroupPage', () => {
  let instance

  beforeEach(() => {
    const group = Immutable.fromJS({
      id: '1', name: 'Foo Bar'
    })

    const params = {
      id: '1'
    }

    const actions = {
      selectGroup: () => {}
    }

    instance = TestUtils.renderIntoDocument(
      <SelectedGroupPage selectedGroup={group} params={params} actions={actions} />
    )
  })

  it('has the `SelectedGroupPage` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('SelectedGroupPage')
  })
})
