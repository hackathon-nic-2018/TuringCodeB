import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import TuringRoutes from './routes'

render(
    <Router>
      <TuringRoutes/>
    </Router>,
  document.getElementById('root')
)
serviceWorker.unregister()