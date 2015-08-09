import Immutable from 'immutable'
import pick from 'lodash/object/pick'
import template from 'lodash/string/template'
import 'whatwg-fetch'

import {
  GROUPS_API_URL,
  GROUPS_BY_ID_API_URL,
  USERS_API_URL,
  USERS_BY_ID_API_URL,
  ARTIFICIAL_DELAY
} from 'Config'

// HELPERS /////////////////////////////////////////////////////////////////////

const delay = (time) => {
  return !time ? null : (res) => {
    return new Promise((fulfill) => {
      setTimeout(() => {
        fulfill(res)
      }, time)
    })
  }
}

const jsonify = (res) => {
  return res.json()
}

const fetchApi = (url, params) => {
  return fetch(template(url)(params))
    .then(delay(ARTIFICIAL_DELAY * (Math.random() + 0.5)))
    .then(jsonify)
}

const massageEntity = (ent, props) => {
  // Pick attributes we're interested in.
  ent = pick(ent, ['µ:id', 'id'].concat(props))

  // Rename ID.
  if (ent.id == null) {
    ent.id = ent['µ:id']
    delete ent['µ:id']
  }

  // Bust image cache.
  if (ent.avatar != null) {
    ent.avatar = `${ent.avatar}?_=${ent.id}`
  }

  return ent
}

const massageGroup = (group) => {
  return massageEntity(group, [
    'name',
    'description',
    'avatar'
  ])
}

const massageUser = (user) => {
  return massageEntity(user, [
    'firstName',
    'lastName',
    'jobTitle',
    'avatar'
  ])
}

const generateGroups = (json) => {
  return json['@graph'].reduce((memo, group) => {
    group = massageGroup(group)
    memo[group.id] = group
    return memo
  }, {})
}

const generateUsers = (json) => {
  return json['@graph'].reduce((memo, user) => {
    user = massageUser(user)
    memo[user.id] = user
    return memo
  }, {})
}

// EXPORTS /////////////////////////////////////////////////////////////////////

export function getGroups () {
  return fetchApi(GROUPS_API_URL)
    .then((json) => (
      Immutable.fromJS(generateGroups(json))
    ))
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
