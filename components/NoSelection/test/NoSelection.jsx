import React from 'react/addons'

import NoSelection from 'NoSelection'

const {TestUtils} = React.addons

describe('NoSelection', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <NoSelection />
    )
  })

  it('has the `NoSelection` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('NoSelection')
  })
})
