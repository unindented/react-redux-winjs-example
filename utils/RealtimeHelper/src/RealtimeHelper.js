import Immutable from 'immutable'

import * as ApiHelper from 'ApiHelper'
import {REALTIME_URL} from 'Config'

// HELPERS /////////////////////////////////////////////////////////////////////

class WebSocketWrapper {
  constructor () {
    this.socket = new WebSocket(REALTIME_URL)
  }

  on (type, callback) {
    this.socket[`on${type}`] = callback
  }

  close () {
    this.socket.close()
  }
}

// EXPORTS /////////////////////////////////////////////////////////////////////

export function createConnection () {
  return new WebSocketWrapper()
}

export function getGroupsById (ids) {
  return fetchApi(GROUPS_BY_ID_API_URL, {ids: ids.map(encodeURIComponent)})
    .then((json) => (
      Immutable.fromJS(generateGroups(json))
    ))
}

export function getUsers () {
  return fetchApi(USERS_API_URL)
    .then((json) => (
      Immutable.fromJS(generateUsers(json))
    ))
}

export function getUsersById (ids) {
  return fetchApi(USERS_BY_ID_API_URL, {ids: ids.map(encodeURIComponent)})
    .then((json) => (
      Immutable.fromJS(generateUsers(json))
    ))
}
