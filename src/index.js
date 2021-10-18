import 'bulma'
import App from './App'
import React from 'react'
import Store from './App/Store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
