import Immutable from 'immutable'

import usersSelector from 'usersSelector'

describe('usersSelector', () => {
  const state = {
    users: Immutable.fromJS({
      '0': {id: '0', name: 'Foo'},
      '1': {id: '1', name: 'Bar'}
    })
  }

  it('selects all users', function () {
    expect(usersSelector(state)).toBe(state.users)
  })
})
