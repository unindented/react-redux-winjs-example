import React from 'react/addons'

import SettingsPage from 'SettingsPage'

const {TestUtils} = React.addons

describe('SettingsPage', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <SettingsPage />
    )
  })

  it('has the `SettingsPage` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('SettingsPage')
  })
})
