import {SELECT_GROUP} from 'ActionTypes'
import selectedGroupId from 'selectedGroupReducer'

describe('selectedGroupReducer', () => {
  const state = '1'

  describe('DEFAULT', () => {
    it('returns the same state', function () {
      expect(selectedGroupId(state)).toBe(state)
    })
  })

  describe('SELECT_GROUP', () => {
    it('returns the new selected group ID', function () {
      const payload = '2'
      const action = {
        type: SELECT_GROUP,
        payload: payload
      }

      expect(selectedGroupId(state, action)).toBe(payload)
    })
  })
})
