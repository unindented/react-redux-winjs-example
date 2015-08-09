import React from 'react/addons'
import {Router, Route} from 'react-router'
import {createMemoryHistory} from 'history'

import Navigation from 'Navigation'

const {TestUtils} = React.addons
const history = createMemoryHistory(['/'])

describe('Navigation', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <Router history={history}>
        <Route path='/' component={Navigation} />
      </Router>
    )
  })

  it('has the `Navigation` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('Navigation')
  })
})
