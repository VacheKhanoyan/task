import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const UserRoute = ({ user, component: Component, ...rest }) => {
  const user1 = localStorage.getItem('user');
  let uid = '';
  if (user1) {
    const { id } = JSON.parse(user1);
    uid = id;
  }
  console.log('sssssssssss', uid);
  return (<Route
    {...rest}
    render={(props) => {
        console.log('ppppppppppppppppppppppp', uid);
        return (uid ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        ));
      }}
  />);
};

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  user: PropTypes.bool.isRequired,
};


export default UserRoute;
