import React from 'react/addons'

import Content from 'Content'

const {TestUtils} = React.addons

describe('Content', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <Content>
        <div>OHAI</div>
      </Content>
    )
  })

  it('has the `Content` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('Content')
  })
})
