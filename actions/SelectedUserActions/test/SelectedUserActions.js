import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import selectedUserId from 'selectedUserReducer'
import {selectUser} from 'SelectedUserActions'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers({selectedUserId})

describe('SelectedUserActions', () => {
  let store

  beforeEach(() => {
    store = createStoreWithMiddleware(reducer)
  })

  describe('.selectUser', () => {
    it('selects the user', () => {
      const user = '1'

      store.dispatch(selectUser(user))
      expect(store.getState().selectedUserId).toBe('1')
    })
  })
})
