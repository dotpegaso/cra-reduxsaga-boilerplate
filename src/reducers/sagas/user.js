// import React from 'react'
import { put, takeEvery } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import Swal from 'sweetalert2'
import CONFIG from '../../constants/config'

function* getUser({ payload }) {
  try {
    // eslint-disable-next-line no-console
    console.log('getUser payload', payload)
    yield put(replace(`${CONFIG.BASE_URL}/dashboard`))
  } catch ({ message, response }) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo deu errado ao tentar buscar o usuário',
      footer: `${message}`
    })
  }
}

function* updateUser({ payload }) {
  try {
    yield put({ type: 'LOGIN_SET_DATA', data: { ...payload } })
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Usuário atualizado',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      footer: `Redirecionando você para a Dashboard`,
      onClose: () => {
        window.location.href = '/dashboard'
      }
    })
  } catch ({ message, error }) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo deu errado ao tentar atualizar o usuário',
      footer: `${message}`
    })
  }
}

export default function* userSagas() {
  yield takeEvery('GET_USER', getUser)
  yield takeEvery('UPDATE_USER', updateUser)
}
