import Immutable from 'immutable'

import selectedGroupSelector from 'selectedGroupSelector'

describe('selectedGroupSelector', () => {
  const state = {
    groups: Immutable.fromJS({
      '0': {id: '0', name: 'Foo'},
      '1': {id: '1', name: 'Bar'}
    }),
    selectedGroupId: '1'
  }

  it('selects the selected group', function () {
    expect(selectedGroupSelector(state)).toBe(state.groups.get('1'))
  })
})
