import Immutable from 'immutable'
import template from 'lodash/string/template'

import * as ApiHelper from 'ApiHelper'

import {
  GROUPS_API_URL,
  GROUPS_BY_ID_API_URL,
  USERS_API_URL,
  USERS_BY_ID_API_URL
} from 'Config'

describe('ApiHelper', () => {
  describe('#getGroups', () => {
    it('gets all groups', (done) => {
      const groups = {
        '1': {id: '1', name: 'Foo Bar'},
        '2': {id: '2', name: 'Foo Baz'}
      }
      const payload = {
        '@graph': Object.values(groups),
        '@meta': {}
      }

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(JSON.stringify(payload)))
      )

      ApiHelper.getGroups()
        .then((res) => {
          expect(window.fetch).toHaveBeenCalledWith(GROUPS_API_URL)
          expect(res).toEqualImmutable(Immutable.fromJS(groups))
          done()
        })
    })
  })

  describe('#getGroupsById', () => {
    it('gets the groups with the specified IDs', (done) => {
      const groups = {
        '1': {id: '1', name: 'Foo Bar'},
        '2': {id: '2', name: 'Foo Baz'}
      }
      const payload = {
        '@graph': Object.values(groups),
        '@meta': {}
      }

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(JSON.stringify(payload)))
      )

      ApiHelper.getGroupsById(['1', '2'])
        .then((res) => {
          const url = template(GROUPS_BY_ID_API_URL)({ids: ['1', '2']})
          expect(window.fetch).toHaveBeenCalledWith(url)
          expect(res).toEqualImmutable(Immutable.fromJS(groups))
          done()
        })
    })
  })

  describe('#getUsers', () => {
    it('gets all users', (done) => {
      const users = {
        '1': {id: '1', firstName: 'Foo', lastName: 'Bar'},
        '2': {id: '2', firstName: 'Foo', lastName: 'Baz'}
      }
      const payload = {
        '@graph': Object.values(users),
        '@meta': {}
      }

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(JSON.stringify(payload)))
      )

      ApiHelper.getUsers()
        .then((res) => {
          expect(window.fetch).toHaveBeenCalledWith(USERS_API_URL)
          expect(res).toEqualImmutable(Immutable.fromJS(users))
          done()
        })
    })
  })

  describe('#getUsersById', () => {
    it('gets the user', (done) => {
      const users = {
        '1': {id: '1', firstName: 'Foo', lastName: 'Bar'},
        '2': {id: '2', firstName: 'Foo', lastName: 'Baz'}
      }
      const payload = {
        '@graph': Object.values(users),
        '@meta': {}
      }

      spyOn(window, 'fetch').and.returnValue(
        Promise.resolve(new Response(JSON.stringify(payload)))
      )

      ApiHelper.getUsersById(['1', '2'])
        .then((res) => {
          const url = template(USERS_BY_ID_API_URL)({ids: ['1', '2']})
          expect(window.fetch).toHaveBeenCalledWith(url)
          expect(res).toEqualImmutable(Immutable.fromJS(users))
          done()
        })
    })
  })
})
