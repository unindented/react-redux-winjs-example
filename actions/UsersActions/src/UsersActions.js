import {ADD_USER, REMOVE_USER, UPDATE_USER, GET_USERS} from 'ActionTypes'
import * as ApiHelper from 'ApiHelper'

export function addUser (user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

export function removeUser (user) {
  return {
    type: REMOVE_USER,
    payload: user
  }
}

export function updateUser (user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export function getUsers () {
  return (dispatch, getState) => {
    const {users} = getState()

    // Only run if we have no users.
    if (users.count()) {
      return
    }

    ApiHelper.getUsers()
      .then((json) => dispatch({
        type: GET_USERS,
        payload: json
      }))
      .catch((error) => dispatch({
        type: GET_USERS,
        error: true,
        payload: new Error(`Cannot get users: ${error.message}`)
      }))
  }
}
