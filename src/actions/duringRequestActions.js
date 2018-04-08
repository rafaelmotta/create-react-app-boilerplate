import {
  REQUEST_START,
  REQUEST_END
} from '../config/constants/actionTypes'

export const requestStart = payload => {
  return {
    type: REQUEST_START,
    payload
  }
}

export const requestEnd = payload => {
  return {
    type: REQUEST_END,
    payload
  }
}
