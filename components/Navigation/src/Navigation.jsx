import React, {Component, PropTypes} from 'react'
import ReactWinJS from 'react-winjs'

import routerHistory from 'routerHistory'
import './Navigation.less'

const links = [
  {url: '/groups', label: 'Groups', icon: 'people'},
  {url: '/users', label: 'Users', icon: 'contact'},
  {url: '/settings', label: 'Settings', icon: 'settings'}
]

@routerHistory
export default class Navigation extends Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => {}
  }

  handleClick (url) {
    this.props.onClick()
    this.props.history.pushState(null, url)
  }

  render () {
    return (
      <nav className='Navigation' role='navigation'>
        {links.map((link) => (
          <ReactWinJS.SplitView.Command
            className='Navigation-command'
            key={link.url}
            label={link.label}
            icon={link.icon}
            onInvoked={this.handleClick.bind(this, link.url)} />
        ))}
      </nav>
    )
  }
}
