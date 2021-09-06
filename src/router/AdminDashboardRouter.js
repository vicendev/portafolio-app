import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AdminScreen } from '../components/admin/AdminScreen';

import { Navbar } from '../components/ui/Navbar';

export const AdminDashboardRouter = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/admin/home" component={AdminScreen} />

        <Redirect to="/admin/home" />
      </Switch>
    </>
  )
}
