import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/ui/Navbar';

export const PublicDashboardRouter = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomeScreen}/>


        <Redirect to="/" />
      </Switch>
    </>
  )
}
