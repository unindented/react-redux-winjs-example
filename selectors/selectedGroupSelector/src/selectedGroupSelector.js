import {createSelector} from 'reselect'

import groupsSelector from 'groupsSelector'

const selectedGroupIdSelector = (state) => state.selectedGroupId

export default createSelector(
  [groupsSelector, selectedGroupIdSelector],
  (groups, selectedGroupId) => groups.get(selectedGroupId)
)
