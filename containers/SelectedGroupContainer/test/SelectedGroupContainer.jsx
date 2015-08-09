import Immutable from 'immutable'
import React from 'react/addons'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import SelectedGroupContainer from 'SelectedGroupContainer'
import * as reducers from 'AllReducers'

const {TestUtils} = React.addons

const group = Immutable.fromJS({
  id: '1', name: 'Foo Bar'
})

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer, {group})

describe('SelectedGroupContainer', () => {
  let instance

  beforeEach(() => {
    const data = {
      '@graph': [group.toJS()],
      '@meta': {}
    }

    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify(data)))
    )

    instance = TestUtils.renderIntoDocument(
      <Provider store={store}>
        {() => <SelectedGroupContainer params={{id: '1'}} />}
      </Provider>
    )
  })

  it('is not empty', () => {
    let node = React.findDOMNode(instance)
    expect(node).not.toBeEmpty()
  })
})
