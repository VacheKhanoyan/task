import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const UserRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
        console.log(user);
        return (user ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        ));
      }}
  />);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.bool.isRequired,
};


export default UserRoute;
