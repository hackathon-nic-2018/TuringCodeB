import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import TuringRoutes from './routes'
import store from './stores/stores'
import 'bootstrap/js/src/index'

render(
  <Provider store={store}>
    <Router>
      <TuringRoutes/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()