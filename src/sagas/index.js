import { fork, all } from 'redux-saga/effects'

import watchAlertSaga from './alertSaga'
import watchMeSaga from './meSaga'

const startForman = function * startForman () {
  yield all([
    fork(watchAlertSaga),
    fork(watchMeSaga)
  ])
}

export default startForman
