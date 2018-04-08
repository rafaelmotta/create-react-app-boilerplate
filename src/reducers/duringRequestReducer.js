import {
  REQUEST_START,
  REQUEST_END
} from '../config/constants/actionTypes'

const initialState = {}

const duringRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START: {
      return {
        [action.payload]: true
      }
    }

    case REQUEST_END: {
      return {
        [action.payload]: false
      }
    }

    default: {
      return state
    }
  }
}

export default duringRequestReducer
