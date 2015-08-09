import {SELECT_USER} from 'ActionTypes'
import selectedUserId from 'selectedUserReducer'

describe('selectedUserReducer', () => {
  const state = '1'

  describe('DEFAULT', () => {
    it('returns the same state', function () {
      expect(selectedUserId(state)).toBe(state)
    })
  })

  describe('SELECT_USER', () => {
    it('returns the new selected user ID', function () {
      const payload = '2'
      const action = {
        type: SELECT_USER,
        payload: payload
      }

      expect(selectedUserId(state, action)).toEqualImmutable(payload)
    })
  })
})
