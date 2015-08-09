import Immutable from 'immutable'
import React from 'react/addons'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import UsersContainer from 'UsersContainer'
import * as reducers from 'AllReducers'

const {TestUtils} = React.addons

const users = Immutable.fromJS({
  '1': {id: '1', firstName: 'Foo', lastName: 'Bar'},
  '2': {id: '2', firstName: 'Baz', lastName: 'Qux'}
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer, {users})

describe('UsersContainer', () => {
  let instance

  beforeEach(() => {
    const data = {
      '@graph': users.valueSeq().toJS(),
      '@meta': {}
    }

    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(data)))
    )

    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        {() => <UsersContainer />}
      </Provider>
    )
  })

  it('is not empty', () => {
    let node = React.findDOMNode(instance)
    expect(node).not.toBeEmpty()
  })
})
