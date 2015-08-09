import React, {Component, PropTypes} from 'react'
import pick from 'lodash/object/pick'
import shallowEqual from 'shallowequal'

export default function (paramKeys, enter, leave) {
  if (typeof paramKeys === 'function') {
    leave = enter
    enter = paramKeys
    paramKeys = []
  }

  return (DecoratedComponent) => (
    class RunOnTransitionDecorator extends Component {
      static propTypes = {
        actions: PropTypes.object.isRequired
      }

      componentWillMount () {
        if (enter) {
          enter(pick(this.props.params, paramKeys), this.props.actions)
        }
      }

      componentWillUnmount () {
        if (leave) {
          leave(pick(this.props.params, paramKeys), this.props.actions)
        }
      }

      componentDidUpdate (prevProps) {
        const params = pick(this.props.params, paramKeys)
        const prevParams = pick(prevProps.params, paramKeys)

        if (enter && !shallowEqual(params, prevParams)) {
          enter(params, this.props.actions)
        }
      }

      render () {
        return (
          <DecoratedComponent {...this.props} />
        )
      }
    }
  )
}
