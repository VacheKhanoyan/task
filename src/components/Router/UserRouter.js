import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const UserRoute = ({ component: Component, ...rest }) => {
  const user1 = localStorage.getItem('user');
  let uid = '';
  if (user1) {
    const { id } = JSON.parse(user1);
    uid = id;
  }

  return (<Route
    {...rest}
    render={props => (uid ? (
      <Component {...props} />
        ) : (
          <Redirect to="/" />
        ))}
  />);
};

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
};


export default UserRoute;
