import Immutable from 'immutable'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import users from 'usersReducer'
import {addUser, removeUser, updateUser, getUsers} from 'UsersActions'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers({users})

describe('UsersActions', () => {
  const state = Immutable.fromJS({
    '0': {id: '0', firstName: 'Foo', lastName: 'Bar'},
    '1': {id: '1', firstName: 'Foo', lastName: 'Baz'}
  })

  let store

  beforeEach(() => {
    store = createStoreWithMiddleware(reducer)
  })

  describe('.addUser', () => {
    it('adds a new user', () => {
      const user = Immutable.fromJS({
        id: '2', firstName: 'Foo', lastName: 'Baz'
      })

      store.dispatch(addUser(user))
      expect(store.getState().users.get('2')).toEqualImmutable(user)
    })
  })

  describe('.removeUser', () => {
    it('removes an existing user', () => {
      const user = state.get('1')

      store.dispatch(removeUser(user))
      expect(store.getState().users.get('1')).toBeUndefined()
    })
  })

  describe('.updateUser', () => {
    it('updates an existing user', () => {
      const user = state.get('1').set('lastName', 'Rab')

      store.dispatch(updateUser(user))
      expect(store.getState().users.get('1')).toEqualImmutable(user)
    })
  })

  describe('.getUsers', () => {
    it('replaces all users', (done) => {
      const users = Immutable.fromJS({
        '2': {id: '2', firstName: 'Foo', lastName: 'Baz'},
        '3': {id: '3', firstName: 'Foo', lastName: 'Qux'}
      })

      const response = {
        '@graph': users.valueSeq().toJS(),
        '@meta': {}
      }

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(JSON.stringify(response)))
      )

      store.subscribe(() => {
        expect(window.fetch).toHaveBeenCalled()
        expect(store.getState().users).toEqualImmutable(users)
        done()
      })

      store.dispatch(getUsers())
    })
  })
})
