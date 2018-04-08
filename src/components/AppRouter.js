import React from 'react'

import { Switch } from 'react-router'
import { Router, Route, Redirect } from 'react-router-dom'
import history from '../config/initializers/history'

import { Me, About } from '../containers'

const AppRouter = () =>
  <Router history={history}>
    <Switch>
      <Route path="/me" component={Me} />
      <Route path="/about" component={About} />
      <Redirect path="*" to="/me" />
    </Switch>
  </Router>

export default AppRouter
