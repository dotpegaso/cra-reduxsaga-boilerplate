// import React from 'react'
import { put, takeEvery } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import Swal from 'sweetalert2'
import CONFIG from '../../constants/config'

function* login({ payload }) {
  try {
    yield put({ type: 'LOGIN_SET_DATA', data: { ...payload } })
    yield put(replace(`${CONFIG.BASE_URL}/dashboard`))
  } catch ({ message, response }) {
    // eslint-disable-next-line no-console
    console.warn('login generator ERROR', { message, response })
  }
}

function* recoveryPassword({ payload }) {
  try {
    yield put({ type: 'LOGIN_CLEAR_DATA' })
    Swal.fire({
      icon: 'success',
      title: 'Enviado!',
      text:
        'Verifique sua caixa de entrada e siga os passos para recuperar sua senha',
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      footer: `${JSON.stringify(payload.email)}`,
      onClose: () => {
        window.location.href = '/'
      }
    })
  } catch ({ message, response }) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo deu errado ao tentar recuperar a senha',
      footer: `${message}`
    })
  }
}

export default function* loginSagas() {
  yield takeEvery('LOGIN', login)
  yield takeEvery('RECOVERY_PASSWORD', recoveryPassword)
}
