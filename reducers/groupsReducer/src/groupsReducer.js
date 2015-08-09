import Immutable from 'immutable'

import {ADD_GROUP, REMOVE_GROUP, UPDATE_GROUP, GET_GROUPS} from 'ActionTypes'

const initialState = Immutable.Map()

export default (state = initialState, action = {}) => {
  if (action.error) {
    console.warn(action.payload.message)
    return state
  }

  switch (action.type) {
    case ADD_GROUP:
      return state.set(action.payload.get('id'), action.payload)

    case REMOVE_GROUP:
      return state.delete(action.payload.get('id'))

    case UPDATE_GROUP:
      return state.set(action.payload.get('id'), action.payload)

    case GET_GROUPS:
      return action.payload

    default:
      return state
  }
}
