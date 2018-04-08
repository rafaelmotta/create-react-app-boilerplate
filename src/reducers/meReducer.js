import {
  ME_REQUEST_SUCCESS
} from '../config/constants/actionTypes'

const initialState = {
  data: null
}

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case ME_REQUEST_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      }
    }

    default: {
      return state
    }
  }
}

export default meReducer
