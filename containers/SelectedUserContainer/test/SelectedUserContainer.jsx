import Immutable from 'immutable'
import React from 'react/addons'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import SelectedUserContainer from 'SelectedUserContainer'
import * as reducers from 'AllReducers'

const {TestUtils} = React.addons

const user = Immutable.fromJS({
  id: '1', firstName: 'Foo', lastName: 'Bar'
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer, {user})

describe('SelectedUserContainer', () => {
  let instance

  beforeEach(() => {
    const data = {
      '@graph': [user.toJS()],
      '@meta': {}
    }

    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(data)))
    )

    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        {() => <SelectedUserContainer params={{id: '1'}} />}
      </Provider>
    )
  })

  it('is not empty', () => {
    let node = React.findDOMNode(instance)
    expect(node).not.toBeEmpty()
  })
})
