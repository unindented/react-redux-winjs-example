import {SELECT_GROUP} from 'ActionTypes'

export function selectGroup (id) {
  return {
    type: SELECT_GROUP,
    payload: id
  }
}
