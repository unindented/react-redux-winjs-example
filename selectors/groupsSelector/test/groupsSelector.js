import Immutable from 'immutable'

import groupsSelector from 'groupsSelector'

describe('groupsSelector', () => {
  const state = {
    groups: Immutable.fromJS({
      '0': {id: '0', name: 'Foo'},
      '1': {id: '1', name: 'Bar'}
    })
  }

  it('selects all groups', function () {
    expect(groupsSelector(state)).toBe(state.groups)
  })
})
