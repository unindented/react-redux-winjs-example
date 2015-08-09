import Immutable from 'immutable'

import {ADD_GROUP, REMOVE_GROUP, UPDATE_GROUP, GET_GROUPS} from 'ActionTypes'
import groups from 'groupsReducer'

describe('groupsReducer', () => {
  const state = Immutable.fromJS({
    '0': {id: '0', name: 'Foo'},
    '1': {id: '1', name: 'Bar'}
  })

  describe('DEFAULT', () => {
    it('returns the same state', function () {
      expect(groups(state)).toBe(state)
    })
  })

  describe('ADD_GROUP', () => {
    it('adds a new group', function () {
      const payload = Immutable.fromJS({
        id: '2', name: 'Baz'
      })
      const action = {
        type: ADD_GROUP,
        payload: payload
      }

      expect(groups(state, action))
        .toEqualImmutable(state.set(payload.get('id'), payload))
    })
  })

  describe('REMOVE_GROUP', () => {
    it('removes an existing group', function () {
      const payload = state.get('1')
      const action = {
        type: REMOVE_GROUP,
        payload: payload
      }

      expect(groups(state, action))
        .toEqualImmutable(state.delete(payload.get('id')))
    })
  })

  describe('UPDATE_GROUP', () => {
    it('updates an existing group', function () {
      const payload = state.get('1').set('name', 'Rab')
      const action = {
        type: UPDATE_GROUP,
        payload: payload
      }

      expect(groups(state, action))
        .toEqualImmutable(state.set(payload.get('id'), payload))
    })
  })

  describe('GET_GROUPS', () => {
    it('replaces all groups', function () {
      const payload = Immutable.fromJS({
        '2': {id: '2', name: 'Baz'},
        '3': {id: '3', name: 'Qux'}
      })
      const action = {
        type: GET_GROUPS,
        payload: payload
      }

      expect(groups(state, action)).toEqualImmutable(payload)
    })
  })
})
