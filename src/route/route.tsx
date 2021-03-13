import React from 'react';
import { Route, Switch, SwitchProps, RouteProps } from 'react-router-dom';


function renderRoutes(params: {
  routes: RouteProps[];
  switchProps?: SwitchProps;
}) {
  const { switchProps, routes } = params;
  return (
    <Switch {...switchProps}>
      {
        routes.map((route, index) => {
          return (
            <Route key={index} path={route.path} exact component={route.component}></Route>
          )
        })
      }
    </Switch>
  );
}

export default renderRoutes;
