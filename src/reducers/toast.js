const SET_TOAST = 'SET_TOAST'

const initialState = {
  time: new Date(),
  message: '',
  type: ''
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TOAST:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
