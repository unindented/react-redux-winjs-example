import React, {Component, PropTypes} from 'react'

import RealtimeConnection from 'RealtimeConnection'
import ApplicationHeader from 'ApplicationHeader'
import ApplicationContent from 'ApplicationContent'
import Navigation from 'Navigation'
import Content from 'Content'
import './Application.less'

export default class Application extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  }

  state = {
    paneOpened: false
  }

  handlePaneToggle () {
    this.setState({paneOpened: !this.state.paneOpened})
  }

  handlePaneClosed () {
    this.setState({paneOpened: false})
  }

  render () {
    const {actions, children} = this.props
    const {paneOpened} = this.state

    const paneComponent = (
      <Navigation onClick={this.handlePaneClosed.bind(this)} />
    )

    const contentComponent = (
      <Content>
        {children}
      </Content>
    )

    return (
      <div className='Application win-type-base' role='application'>
        <RealtimeConnection
          actions={actions} />

        <ApplicationHeader
          paneOpened={paneOpened}
          onPaneToggle={this.handlePaneToggle.bind(this)} />

        <ApplicationContent
          contentComponent={contentComponent}
          paneComponent={paneComponent}
          paneOpened={paneOpened}
          onPaneClosed={this.handlePaneClosed.bind(this)} />
      </div>
    )
  }
}
