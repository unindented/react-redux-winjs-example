export const FRONT_URL = (process.env.NODE_ENV === 'production' ?
                          'https://unindented.github.io/react-redux-winjs-example/' :
                          'http://localhost:8000')
export const BACK_URL = (process.env.NODE_ENV === 'production' ?
                         'https://fort.herokuapp.com' :
                         'http://localhost:8001')

export const REALTIME_URL = `${BACK_URL.replace(/https?/, 'ws')}/realtime`

export const API_URL = `${BACK_URL}/api`
export const GROUPS_API_URL = `${API_URL}/groups`
export const GROUPS_BY_ID_API_URL = `${GROUPS_API_URL}/\${ids.join(',')}`
export const USERS_API_URL = `${API_URL}/users`
export const USERS_BY_ID_API_URL = `${USERS_API_URL}/\${ids.join(',')}`

export const ARTIFICIAL_DELAY = (process.env.NODE_ENV === 'test' ||
                                 process.env.NODE_ENV === 'production' ?
                                 0 :
                                 1000)
