import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/auth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ||
          location.pathname.includes("compartilhe-seus-resultados") ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname:
                isPrivate ||
                location.pathname.includes("compartilhe-seus-resultados")
                  ? "/"
                  : "dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
