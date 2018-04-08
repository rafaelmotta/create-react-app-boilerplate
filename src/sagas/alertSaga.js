import {
  call,
  all,
  takeLatest
} from 'redux-saga/effects'

import { ALERT_ERROR, ALERT_SUCCESS } from '../config/constants/actionTypes'

const showErrorAlert = function * showErrorAlert (action) {
  const { title, description } = action.payload
  yield call(alert, title || 'Ooops!', description)
}

const showSuccessAlert = function * showSuccessAlert (action) {
  const { title, description } = action.payload
  yield call(alert, title || 'Success!', description)
}

const watchAlertSaga = function * watchAlertSaga () {
  return yield all([
    takeLatest(ALERT_ERROR, showErrorAlert),
    takeLatest(ALERT_SUCCESS, showSuccessAlert)
  ])
}

export default watchAlertSaga
