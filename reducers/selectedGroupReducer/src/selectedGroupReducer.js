import {SELECT_GROUP} from 'ActionTypes'

export default (state = null, action = {}) => {
  if (action.error) {
    console.warn(action.payload.message)
    return state
  }

  switch (action.type) {
    case SELECT_GROUP:
      return action.payload

    default:
      return state
  }
}
