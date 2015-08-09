import React from 'react/addons'

import ApplicationContent from 'ApplicationContent'

const {TestUtils} = React.addons

describe('ApplicationContent', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <ApplicationContent />
    )
  })

  it('has the `ApplicationContent` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('ApplicationContent')
  })
})
