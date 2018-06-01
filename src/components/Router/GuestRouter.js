// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

// console.log('aaaaaaaaaaaaaaaaaaa', localStorage.getItem('user'));
// const UserRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       (!localStorage.getItem('user') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/" />
//       ))}
//   />
// );

// UserRoute.propTypes = {
//   component: PropTypes.func.isRequired,
//   user: PropTypes.bool.isRequired,
// };

// // function mapStateToProps(state) {
// //   return {
// //     isAuthenticated: !!state.user.token,
// //   };
// // }

// export default connect()(UserRoute);
