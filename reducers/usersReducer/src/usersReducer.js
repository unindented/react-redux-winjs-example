import Immutable from 'immutable'

import {ADD_USER, REMOVE_USER, UPDATE_USER, GET_USERS} from 'ActionTypes'

const initialState = Immutable.Map()

export default (state = initialState, action = {}) => {
  if (action.error) {
    console.warn(action.payload.message)
    return state
  }

  switch (action.type) {
    case ADD_USER:
      return state.set(action.payload.get('id'), action.payload)

    case REMOVE_USER:
      return state.delete(action.payload.get('id'))

    case UPDATE_USER:
      return state.set(action.payload.get('id'), action.payload)

    case GET_USERS:
      return action.payload

    default:
      return state
  }
}
