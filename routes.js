import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './src/components/app/App'
import WelcomeLayout from './src/components/layout/WelcomeLayout'

const TuringRoutes = () =>
  <App>
      <Switch>
        <Route exact path="/" component={WelcomeLayout}/>
      </Switch>
  </App>

export default TuringRoutes