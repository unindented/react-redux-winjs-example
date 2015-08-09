import React, {Component} from 'react/addons'
import {Router, Route} from 'react-router'
import {createMemoryHistory} from 'history'

import routerHistory from 'routerHistory'

const {TestUtils} = React.addons
const history = createMemoryHistory(['/groups/1'])

describe('routerHistory', () => {
  let instance
  let enterSpy
  let leaveSpy

  beforeEach(() => {
    enterSpy = jasmine.createSpy()
    leaveSpy = jasmine.createSpy()

    @routerHistory
    class Test extends Component {
      render () {
        return (
          <div>{this.props.params.id}</div>
        )
      }
    }

    instance = TestUtils.renderIntoDocument(
      <Router history={history}>
        <Route path='/groups/:id' component={Test} />
      </Router>
    )
  })

  it('renders correctly', () => {
    let node = React.findDOMNode(instance)
    expect(node).toHaveText('1')
  })
})
