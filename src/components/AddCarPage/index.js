import React from 'react';
import Header from './../homePage/header';
import Footer from './../homePage/footer';
import Caption from './caption';
import Container from './container';

const HomePage = () => (
  <div className="content">
    <Header />
    <Caption />
    <Container />
    <Footer />
  </div>
);

export default HomePage;
