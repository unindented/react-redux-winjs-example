import React, {Component} from 'react/addons'
import {Router, Route} from 'react-router'
import {createMemoryHistory} from 'history'

import runOnTransition from 'runOnTransition'

const {TestUtils} = React.addons
const history = createMemoryHistory(['/groups/1'])

describe('runOnTransition', () => {
  let instance
  let enterSpy
  let leaveSpy

  beforeEach(() => {
    enterSpy = jasmine.createSpy()
    leaveSpy = jasmine.createSpy()

    @runOnTransition(['id'],
      (params, actions) => {
        const {id} = params
        enterSpy(id)
      },
      leaveSpy
    )
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

  it('runs the `enter` action', () => {
    expect(enterSpy).toHaveBeenCalledWith('1')
  })

  it('does not run the `leave` action', () => {
    expect(leaveSpy).not.toHaveBeenCalled()
  })
})
