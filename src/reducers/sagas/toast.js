import { put, takeEvery } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { css } from 'glamor'
import 'react-toastify/dist/ReactToastify.css'

function* fireToast({ payload }) {
  try {
    if (toast.isActive('activeToast')) {
      return
    }

    const { type, message } = payload
    const options = {
      position: toast.POSITION.BOTTOM_CENTER,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: true,
      bodyClassName: css({
        textAlign: 'center'
      }),
      toastId: 'activeToast'
    }

    toast.configure(options)

    yield put({
      type: 'SET_TOAST',
      payload: { type, message, options, time: new Date() }
    })

    switch (type) {
      case 'success':
        toast[type](message, options)
        break
      case 'error':
        toast[type](message, options)
        break
      case 'warn':
        toast[type](message, options)
        break
      case 'info':
        toast[type](message, options)
        break
      default:
        toast(message, options)
    }
  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('[toast.js : callToats]', { message, response })
  }
}

export default function* toastSagas() {
  yield takeEvery('TOAST', fireToast)
}
