import React, { Component } from "react";
import { connect } from "react-redux";
import getNewCar from "./../../actions/fetchNewCars";

class LastAddedModels extends Component {
  componentDidMount() {
    this.props.getNewCar();
  }
  LastAdd = () => {
    const data = Object.values(this.props.newCars);
    return data.map(cars => (
      <div className="clearAfter" key={cars.id}>
        <a href="#">
          <div className="immagine left" style={{ position: "relative" }}>
            <img
              src={`https://source.unsplash.com/1040x668/?${cars.name}`}
              alt={cars.name}
              style={{
                position: "absolute",
                height: "205px",
                width: "363px",
                maxWidth: "363px",
                top: "-2.5px",
                left: "0px"
              }}
            />
            <p className="car_title">{cars.name}</p>
          </div>
          <div className="car_info right clearAfter">
            <div className="left1">
              <p className="car_about">
                What better way to enjoy the warm winter weather than with this
                beautiful 2008 BMW Z4 convertible! Finished in a very desirable
                Alpine White over Dream Red interior, this 3.0 Z4 is sure to
                turn heads anywhere you drive it. This 3.0 liter inline six
                cylinder motor is pair with a smooth shifting 6-speed manual
                transmission. Options on this Z4 include heated seats, auto
                dimming mirrors, pw, pl, full
              </p>
            </div>
            <div className="left2">
              <ul className="list_info">
                <li>
                  <span className="list_left">Miles</span>
                  <span className="list_right"> {cars.miles}</span>
                </li>
                <li>
                  <span className="list_left">Drive</span>
                  <span className="list_right"> {cars.drive}</span>
                </li>
                <li>
                  <span className="list_left">Transmission</span>
                  <span className="list_right"> {cars.transmission}</span>
                </li>
                <li>
                  <span className="list_left">Exterior</span>
                  <span className="list_right"> {cars.exterior}</span>
                </li>
                <li>
                  <span className="list_left">Fuel Type:</span>
                  <span className="list_right"> {cars.fuel_type}</span>
                </li>
              </ul>
            </div>
            <div className="right">
              <p className="top_abs">
                <span className="valute">$</span>
                <span className="car_price">{cars.price}</span>
              </p>
              <p className="map_car">
                <i className="fa fa-map-marker" /> {cars.location}{" "}
              </p>
            </div>
          </div>
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <section>
          <h1>Last added models</h1>
          <p className="sect_info">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </p>
          <div className="container">
            <div
              className="browse_cars home_browse clearAfter"
              id="theme_variant"
            >
              {this.LastAdd("style/img/banner3.jpg")}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    newCars: state.newCars
  };
}
export default connect(mapStateToProps, { getNewCar })(LastAddedModels);
