import Immutable from 'immutable'

import selectedUserSelector from 'selectedUserSelector'

describe('selectedUserSelector', () => {
  const state = {
    users: Immutable.fromJS({
      '0': {id: '0', name: 'Foo'},
      '1': {id: '1', name: 'Bar'}
    }),
    selectedUserId: '1'
  }

  it('selects the selected user', function () {
    expect(selectedUserSelector(state)).toBe(state.users.get('1'))
  })
})
