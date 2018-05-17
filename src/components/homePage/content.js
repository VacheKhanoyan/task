import React, { Component } from "react";
import SlideBar from "./slideBar";
import SearchBar from "./searchBar";
import LastAddedModels from "./LastAdd";
import AddCar from "./addCar";
import BrowseCar from "./browseCar";
import ContactPage from "./contactPage";
import Footer from "./footer";

class Content extends Component {
  render() {
    return (
      <div>
        <SlideBar />
        <SearchBar />
        <LastAddedModels />
        <AddCar />
        <BrowseCar />
        <ContactPage />
        <Footer />
      </div>
    );
  }
}

export default Content;
