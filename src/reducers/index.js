import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import me from './meReducer'
import duringRequest from './duringRequestReducer'

// Redux persist settings
const config = {
  key: 'root',
  storage,
  whitelist: [
    'me',
    'duringRequest'
  ]
}

const reducers = persistCombineReducers(config, {
  me,
  duringRequest
})

export default reducers
