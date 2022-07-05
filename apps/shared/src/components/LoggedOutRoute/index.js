import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function LoggedOutRoute(props) {
  const { component: Component, ...rest } = props;
  const isLoggedIn = useSelector((state) => !!state.user.user);
  return (
    <Route
      {...rest}
      render={() => {
        if (!isLoggedIn) return <Component {...props} />;
        return <Redirect to="/dashboard" />;
      }}
    />
  );
}

export default LoggedOutRoute;
