import React from 'react'
import {createHashHistory} from 'history'

import RootContainer from 'RootContainer'

export default class DesktopLauncher {
  renderTo (target, options = {history: createHashHistory()}) {
    React.render(<RootContainer history={options.history} />, target)
  }
}
