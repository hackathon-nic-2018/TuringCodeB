import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/app/App'
import WelcomeLayout from './components/layout/welcome/WelcomeLayout'
import BusinessLayout from './components/layout/business/BusinessLayout'
import Error404 from './components/ui/error/Error404'
import ProfileLayout from './components/layout/profile/ProfileLayout'
import BusinessLayoutType from './components/layout/business/BusinessLayoutType'
import Sitemap from './components/ui/Sitemap'

const TuringRoutes = () =>
  <App>
      <Switch>
        <Route exact path="/" component={WelcomeLayout}/>
        <Route exact path="/business" component={BusinessLayout}/>
        <Route exact path="/business/:type" component={BusinessLayoutType}/>
        <Route exact path="/profile/:name" component={ProfileLayout}/>
        <Route exact path="/sitemap" component={Sitemap}/>
        <Route component={Error404}/>
      </Switch>
  </App>

export default TuringRoutes