import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

//import { useAuth } from "../hooks/auth";

const Route = ({ isPrivate, isAuthenticated, ...rest }) => {
  //const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (
        isAuthenticated
        ? (
          isPrivate
        ) : (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: location }
            }}
          />
        ))
      }
    />
  );
};

export default Route;

