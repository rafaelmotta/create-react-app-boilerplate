import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './config/initializers/store'

import { AppRouter } from './components'
import './styles/index.css'

export const { store, persistor } = createStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
