import {createSelector} from 'reselect'

import usersSelector from 'usersSelector'

const selectedUserIdSelector = (state) => state.selectedUserId

export default createSelector(
  [usersSelector, selectedUserIdSelector],
  (users, selectedUserId) => users.get(selectedUserId)
)
