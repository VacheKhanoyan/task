import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from './components/homePage/header';
import Footer from './components/homePage/footer';
import HomePage from './components/homePage';
import AddCarPage from './components/AddCarPage';

import UserRouter from './components/Router/UserRouter';
import EditPage from './components/editProfilePage/editPage';
import Single from './components/single/single';


const App = () => (
  <div >
    <Header />
    <Route exact path="/" component={HomePage} />
    <UserRouter path="/single/:id" component={Single} />
    <UserRouter path="/addCar" component={AddCarPage} />
    <UserRouter path="/editProfile" component={EditPage} />
    <Footer />
  </div>
);

// App.propTypes = {
//   user: PropTypes.bool.isRequired,
// };

function mapStateToProps(state) {
  return {
    user: !!state.user.loggedIn,
  };
}


export default connect(mapStateToProps)(App);
