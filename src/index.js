import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import myStore from './redux/store'
import './assets/scss/index.scss'
import App from './containers/App'

ReactDOM.render(
  <Provider store={ myStore }>
    <App />
  </Provider>,
  document.getElementById('root')
)
