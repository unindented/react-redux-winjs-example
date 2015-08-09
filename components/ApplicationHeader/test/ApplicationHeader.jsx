import React from 'react/addons'

import ApplicationHeader from 'ApplicationHeader'

const {TestUtils} = React.addons

describe('ApplicationHeader', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <ApplicationHeader />
    )
  })

  it('has the `ApplicationHeader` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('ApplicationHeader')
  })
})
