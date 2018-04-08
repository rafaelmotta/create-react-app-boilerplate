import { put } from 'redux-saga/effects'
import axios from '../config/initializers/axios'
import {
  REQUEST_START,
  REQUEST_END,
  ALERT_ERROR
} from '../config/constants/actionTypes'

export default function * (options = {}, extraOptions = {}) {
  yield put({ type: REQUEST_START, payload: extraOptions.requestType })

  const response = yield axios
    .request(options)
    .then(res => {
      return { response: res.data }
    })
    .catch(error => {
      if (error.response && error.response.data) {
        return {
          error: {
            code: error.response.status,
            description: error.response.data
          }
        }
      }

      return {
        error: {
          code: 503,
          description: 'timeout'
        }
      }
    })

  yield put({ type: REQUEST_END, payload: extraOptions.requestType })

  if (response.error) {
    const payload = {
      description: response.error.description
    }

    yield put({ type: ALERT_ERROR, payload })
  }

  return response
}
