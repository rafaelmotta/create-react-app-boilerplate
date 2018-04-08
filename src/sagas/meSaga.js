import {
  put,
  call,
  all,
  takeLatest
} from 'redux-saga/effects'

import {
  ME_REQUEST,
  ME_REQUEST_SUCCESS
} from '../config/constants/actionTypes'

import {
  fetch
} from '../services/meService'

const meRequest = function * meRequest (action) {
  const request = yield call(fetch, action.payload)

  if (request.response) {
    yield put({ type: ME_REQUEST_SUCCESS, payload: request.response.data })
  }
}

const watchMeSaga = function * watchMeSaga () {
  return yield all([
    takeLatest(ME_REQUEST, meRequest)
  ])
}

export default watchMeSaga
