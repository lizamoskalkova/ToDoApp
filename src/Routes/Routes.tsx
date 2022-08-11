import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./list";

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              key={`route ${route.path}`}
            >
              <route.component />
            </Route>
          );
        })}
        <Route />
      </Switch>
    </Router>
  );
};

export default Routes;
