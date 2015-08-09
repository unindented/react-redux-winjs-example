import React from 'react/addons'
import {createMemoryHistory} from 'history'

import RootContainer from 'RootContainer'

const {TestUtils} = React.addons
const history = createMemoryHistory(['/'])

describe('RootContainer', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <RootContainer history={history} />
    )
  })

  it('is not empty', () => {
    let node = React.findDOMNode(instance)
    expect(node).not.toBeEmpty()
  })
})
