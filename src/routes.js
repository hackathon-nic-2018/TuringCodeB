import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/app/App'
import WelcomeLayout from './components/layout/WelcomeLayout'

const TuringRoutes = () =>
  <App>
      <Switch>
        <Route exact path="/" component={WelcomeLayout}/>
      </Switch>
  </App>

export default TuringRoutes