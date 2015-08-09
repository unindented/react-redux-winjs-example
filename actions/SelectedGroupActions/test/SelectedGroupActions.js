import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import selectedGroupId from 'selectedGroupReducer'
import {selectGroup} from 'SelectedGroupActions'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers({selectedGroupId})

describe('SelectedGroupActions', () => {
  let store

  beforeEach(() => {
    store = createStoreWithMiddleware(reducer)
  })

  describe('.selectGroup', () => {
    it('selects the group', () => {
      const group = '1'

      store.dispatch(selectGroup(group))
      expect(store.getState().selectedGroupId).toBe('1')
    })
  })
})
