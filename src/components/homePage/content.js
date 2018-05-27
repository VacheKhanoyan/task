import React from 'react';
import SlideBar from './slideBar';
import SearchBar from './searchBar';
import LastAddedModels from './LastAdd';
import AddCar from './addCar';
import BrowseCar from './browseCar';
import ContactPage from './contactPage';


const Content = () => (
  <div>
    <SlideBar />
    <SearchBar />
    <LastAddedModels />
    <AddCar />
    <BrowseCar />
    <ContactPage />

  </div>
);

export default Content;
