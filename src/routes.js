import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/app/App'
import WelcomeLayout from './components/layout/welcome/WelcomeLayout'
import BusinessLayout from './components/layout/business/BusinessLayout'
import Error404 from './components/ui/error/Error404'

const TuringRoutes = () =>
  <App>
      <Switch>
        <Route exact path="/" component={WelcomeLayout}/>
        <Route exact path="/business" component={BusinessLayout}/>
        <Route exact path="/business/:type" component={BusinessLayout}/>
        <Route exact path="/profile/:name" component={BusinessLayout}/>
        <Route component={Error404}/>
      </Switch>
  </App>

export default TuringRoutes