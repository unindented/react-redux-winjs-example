import Immutable from 'immutable'
import React from 'react/addons'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import GroupsContainer from 'GroupsContainer'
import * as reducers from 'AllReducers'

const {TestUtils} = React.addons

const groups = Immutable.fromJS({
  '1': {id: '1', name: 'Foo Bar'},
  '2': {id: '2', name: 'Baz Qux'}
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer, {groups})

describe('GroupsContainer', () => {
  let instance

  beforeEach(() => {
    const data = {
      '@graph': groups.valueSeq().toJS(),
      '@meta': {}
    }

    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(data)))
    )

    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        {() => <GroupsContainer />}
      </Provider>
    )
  })

  it('is not empty', () => {
    let node = React.findDOMNode(instance)
    expect(node).not.toBeEmpty()
  })
})
