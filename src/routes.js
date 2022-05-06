import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
=======
import Login from '../src/pages/login/index';
import Register from '../src/pages/register/index';
>>>>>>> d2a62f89c295057b541a54a14233f2f56d881acf

export default function Routes() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path="/" exact component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/dashboard" component={Dashboard} />
       </Switch>
    </BrowserRouter>
  )
}