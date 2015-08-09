import React from 'react/addons'
import {Router, Route} from 'react-router'
import {createMemoryHistory} from 'history'

import Application from 'Application'

const {TestUtils} = React.addons
const history = createMemoryHistory(['/'])

describe('Application', () => {
  let instance

  beforeEach(() => {
    instance = TestUtils.renderIntoDocument(
      <Router history={history}>
        <Route path='/' component={Application} />
      </Router>
    )
  })

  it('has the `Application` class', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveClass('Application')
  })
})
