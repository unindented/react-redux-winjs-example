import React, {Component, PropTypes} from 'react'
import ReactWinJS from 'react-winjs'

import './ApplicationContent.less'

export default class ApplicationContent extends Component {
  static propTypes = {
    contentComponent: PropTypes.element,
    paneComponent: PropTypes.element,
    paneOpened: PropTypes.bool,
    onPaneClosed: PropTypes.func
  }

  static defaultProps = {
    paneOpened: false,
    onPaneClosed: () => {}
  }

  render () {
    const {contentComponent, paneComponent, paneOpened, onPaneClosed} = this.props

    return (
      <div className='ApplicationContent'>
        <ReactWinJS.SplitView
          className='ApplicationContent-split'
          contentComponent={contentComponent}
          paneComponent={paneComponent}
          paneOpened={paneOpened}
          onAfterClose={onPaneClosed} />
      </div>
    )
  }
}
