import React from 'react';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';
import AddNewMachine from '../pages/Machine/AddNewMachine'

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Route from "./PrivateRoutes";

export default function Routes() {
  return (
    <Router>
       <Switch>
         <Route path="/" exact component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/dashboard" component={Dashboard} isPrivate/>
         <Route path="/add-new-machine" component={AddNewMachine} isPrivate/>
       </Switch>
    </Router>
  )
}