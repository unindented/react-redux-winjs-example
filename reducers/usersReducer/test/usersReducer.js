import Immutable from 'immutable'

import {ADD_USER, REMOVE_USER, UPDATE_USER, GET_USERS} from 'ActionTypes'
import users from 'usersReducer'

describe('usersReducer', () => {
  const state = Immutable.fromJS({
    '0': {id: '0', firstName: 'Foo', lastName: 'Bar'},
    '1': {id: '1', firstName: 'Foo', lastName: 'Baz'}
  })

  describe('DEFAULT', () => {
    it('returns the same state', function () {
      expect(users(state)).toBe(state)
    })
  })

  describe('ADD_USER', () => {
    it('adds a new user', function () {
      const payload = Immutable.fromJS({
        id: '2', firstName: 'Foo', lastName: 'Qux'
      })
      const action = {
        type: ADD_USER,
        payload: payload
      }

      expect(users(state, action))
        .toEqualImmutable(state.set(payload.get('id'), payload))
    })
  })

  describe('REMOVE_USER', () => {
    it('removes an existing user', function () {
      const payload = state.get('1')
      const action = {
        type: REMOVE_USER,
        payload: payload
      }

      expect(users(state, action))
        .toEqualImmutable(state.delete(payload.get('id')))
    })
  })

  describe('UPDATE_USER', () => {
    it('updates an existing user', function () {
      const payload = state.get('1').set('lastName', 'Rab')
      const action = {
        type: UPDATE_USER,
        payload: payload
      }

      expect(users(state, action))
        .toEqualImmutable(state.set(payload.get('id'), payload))
    })
  })

  describe('GET_USERS', () => {
    it('replaces all users', function () {
      const payload = Immutable.fromJS({
        '2': {id: '2', firstName: 'Foo', lastName: 'Qux'},
        '3': {id: '3', firstName: 'Foo', lastName: 'Quux'}
      })
      const action = {
        type: GET_USERS,
        payload: payload
      }

      expect(users(state, action)).toEqualImmutable(payload)
    })
  })
})
