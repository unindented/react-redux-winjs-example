import {SELECT_USER} from 'ActionTypes'

export function selectUser (id) {
  return {
    type: SELECT_USER,
    payload: id
  }
}
