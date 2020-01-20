const LOGIN_CLEAR_DATA = 'LOGIN_CLEAR_DATA'
const LOGIN_SET_DATA = 'LOGIN_SET_DATA'

const initialState = {
  email: null,
  password: null
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SET_DATA:
      return { ...state, ...action.data }
    case LOGIN_CLEAR_DATA:
      return { email: null, password: null }
    default:
      return state
  }
}
