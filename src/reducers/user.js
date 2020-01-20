const USER_CLEAR_DATA = 'USER_CLEAR_DATA'
const GET_USER = 'GET_USER'

const initialState = {
  email: null,
  password: null
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER:
      return { ...state, ...action.data }
    case USER_CLEAR_DATA:
      return { email: null, password: null }
    default:
      return state
  }
}
