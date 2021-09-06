import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AdminDashboardRouter } from './AdminDashboardRouter';
import { PublicDashboardRouter } from './PublicDashboardRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/admin" component={AdminDashboardRouter}  rol={'ADMIN'} />
          
          <PublicRoute path="/" component={PublicDashboardRouter} rol={'ADMIN'} />
        </Switch>
      </div>
    </Router>
  )
}
