import React, {Component, PropTypes} from 'react'
import {Router, Route} from 'react-router'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import ApplicationContainer from 'ApplicationContainer'
import GroupsContainer from 'GroupsContainer'
import SelectedGroupContainer from 'SelectedGroupContainer'
import UsersContainer from 'UsersContainer'
import SelectedUserContainer from 'SelectedUserContainer'
import SettingsPage from 'SettingsPage'
import * as reducers from 'AllReducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

const renderRoutes = function (history) {
  return (
    <Router history={history}>
      <Route path='/' component={ApplicationContainer}>
        <Route path='groups' component={GroupsContainer}>
          <Route path=':id' component={SelectedGroupContainer} />
        </Route>
        <Route path='users' component={UsersContainer}>
          <Route path=':id' component={SelectedUserContainer} />
        </Route>
        <Route path='settings' component={SettingsPage} />
      </Route>
    </Router>
  )
}

export default class RootContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const {history} = this.props

    return (
      <Provider store={store}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}
