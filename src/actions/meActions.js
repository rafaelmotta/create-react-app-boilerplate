import {
  ME_REQUEST,
  ME_REQUEST_SUCCESS
} from '../config/constants/actionTypes'

export const meRequest = payload => {
  return {
    type: ME_REQUEST,
    payload
  }
}

export const meRequestSuccess = payload => {
  return {
    type: ME_REQUEST_SUCCESS,
    payload
  }
}
