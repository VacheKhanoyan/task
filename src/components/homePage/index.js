import React, { Component } from "react";
import Header from "./header";
import Content from "./content";

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Content />
      </div>
    );
  }
}

export default HomePage;
