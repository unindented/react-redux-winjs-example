import React from 'react/addons'

import ListHeader from 'ListHeader'

const {TestUtils} = React.addons

describe('ListHeader', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <ListHeader header='Foo' />
    )
  })

  it('has the `ListHeader` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('ListHeader')
  })

  it('renders the header', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveText('Foo')
  })
})
