import {ADD_GROUP, REMOVE_GROUP, UPDATE_GROUP, GET_GROUPS} from 'ActionTypes'
import * as ApiHelper from 'ApiHelper'

export function addGroup (group) {
  return {
    type: ADD_GROUP,
    payload: group
  }
}

export function removeGroup (group) {
  return {
    type: REMOVE_GROUP,
    payload: group
  }
}

export function updateGroup (group) {
  return {
    type: UPDATE_GROUP,
    payload: group
  }
}

export function getGroups () {
  return (dispatch, getState) => {
    const {groups} = getState()

    // Only run if we have no groups.
    if (groups.count()) {
      return
    }

    ApiHelper.getGroups()
      .then((groups) => dispatch({
        type: GET_GROUPS,
        payload: groups
      }))
      .catch((error) => dispatch({
        type: GET_GROUPS,
        error: true,
        payload: new Error(`Cannot get groups: ${error.message}`)
      }))
  }
}
