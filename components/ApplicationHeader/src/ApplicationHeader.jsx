import React, {Component, PropTypes} from 'react'
import ReactWinJS from 'react-winjs'

import * as InfoHelper from 'InfoHelper'
import SkipToContent from 'SkipToContent'
import './ApplicationHeader.less'

export default class ApplicationHeader extends Component {
  static propTypes = {
    paneOpened: PropTypes.bool,
    onPaneToggle: PropTypes.func
  }

  static defaultProps = {
    paneOpened: false,
    onPaneToggle: () => {}
  }

  render () {
    const {paneOpened, onPaneToggle} = this.props

    return (
      <header className='ApplicationHeader win-ui-dark' role='banner'>
        <SkipToContent />

        <ReactWinJS.SplitViewPaneToggle
          className='ApplicationHeader-toggle'
          paneOpened={paneOpened}
          onInvoked={onPaneToggle} />

        <h1 className='ApplicationHeader-title win-type-title'>
          {`${InfoHelper.getName()} v${InfoHelper.getVersion()}`}
        </h1>
      </header>
    )
  }
}
