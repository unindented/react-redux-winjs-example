import React, {Component} from 'react/addons'

import pureRender from 'pureRender'

const {TestUtils} = React.addons

describe('pureRender', () => {
  let instance

  beforeEach(() => {
    @pureRender
    class Parent extends Component {
      state = {
        point: {x: 0}
      }

      render () {
        return (
          <Child x={this.state.point.x} />
        )
      }
    }

    class Child extends Component {
      state = {
        point: {y: 0}
      }

      render () {
        return (
          <div>{this.props.x}:{this.state.point.y}</div>
        )
      }
    }

    instance = TestUtils.renderIntoDocument(
      <Parent />
    )

    spyOn(instance, 'render').and.callThrough()
  })

  it('renders correctly', () => {
    instance.setState({point: {x: 0}})

    let node = React.findDOMNode(instance)
    expect(node).toHaveText('0:0')
  })

  it('re-renders when the new values are different to the old ones', () => {
    instance.setState({point: {x: 0}})
    expect(instance.render).toHaveBeenCalled()
  })

  it('does not re-render when the new values are equal to the old ones', () => {
    instance.setState({point: instance.state.point})
    expect(instance.render).not.toHaveBeenCalled()
  })
})
