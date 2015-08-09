import {SELECT_USER} from 'ActionTypes'

export default (state = null, action = {}) => {
  if (action.error) {
    console.warn(action.payload.message)
    return state
  }

  switch (action.type) {
    case SELECT_USER:
      return action.payload

    default:
      return state
  }
}
