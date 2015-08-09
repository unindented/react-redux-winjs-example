import Immutable from 'immutable'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import groups from 'groupsReducer'
import {addGroup, removeGroup, updateGroup, getGroups} from 'GroupsActions'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers({groups})

const state = Immutable.fromJS({
  '0': {id: '0', name: 'Foo'},
  '1': {id: '1', name: 'Bar'}
})

describe('GroupsActions', () => {
  let store

  beforeEach(() => {
    store = createStoreWithMiddleware(reducer)
  })

  describe('.addGroup', () => {
    it('adds a new group', () => {
      const group = Immutable.fromJS({
        id: '2', name: 'Baz'
      })

      store.dispatch(addGroup(group))
      expect(store.getState().groups.get('2')).toEqualImmutable(group)
    })
  })

  describe('.removeGroup', () => {
    it('removes an existing group', () => {
      const group = state.get('1')

      store.dispatch(removeGroup(group))
      expect(store.getState().groups.get('1')).toBeUndefined()
    })
  })

  describe('.updateGroup', () => {
    it('updates an existing group', () => {
      const group = state.get('1').set('name', 'Rab')

      store.dispatch(updateGroup(group))
      expect(store.getState().groups.get('1')).toEqualImmutable(group)
    })
  })

  describe('.getGroups', () => {
    it('gets all groups', (done) => {
      const groups = Immutable.fromJS({
        '2': {id: '2', name: 'Baz'},
        '3': {id: '3', name: 'Qux'}
      })

      const response = {
        '@graph': groups.valueSeq().toJS(),
        '@meta': {}
      }

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(JSON.stringify(response)))
      )

      store.subscribe(() => {
        expect(window.fetch).toHaveBeenCalled()
        expect(store.getState().groups).toEqualImmutable(groups)
        done()
      })

      store.dispatch(getGroups())
    })
  })
})
