import shallowEqual from 'shallowequal'

const shouldComponentUpdate = function (nextProps, nextState) {
  return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
}

export default (DecoratedComponent) => {
  if (DecoratedComponent.prototype.shouldComponentUpdate) {
    throw new Error('Called on a component that already implements `shouldComponentUpdate`')
  }

  DecoratedComponent.prototype.shouldComponentUpdate = shouldComponentUpdate
  return DecoratedComponent
}
