import React, { Component } from "react";
import { connect } from "react-redux";
import getCar from "./../../actions/fetchCar";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelect: ""
    };
    this.carTitle = this.carTitle.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.getCar();
  }
  carTitle = elem => {
    const data = this.props.cars;
    for (let cars in data) {
      if (cars === elem) {
        return data[cars].map(data => {
          return <li key={data}>{data}</li>;
        });
      }
    }
  };
  onClick(elem) {
    console.log(elem);
    this.setState({ menuSelect: this.state.menuSelect === elem ? "" : elem });
  }

  render() {
    return (
      <div>
        <section className="search_section padd_0">
          <div className="container">
            <div className="banner_heading">
              <h1>Search Cars for Sale</h1>
            </div>
            <div className="search_form">
              <ul className="car_type">
                <li>
                  <label>
                    <input
                      type="radio"
                      className="show_me"
                      name="type"
                      value="body_type"
                    />
                    <img src="style/img/icons/icon1.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon2.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon3.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon4.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon5.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon6.png" alt="icons" />
                  </label>
                </li>
              </ul>
              <div className="select">
                <ul onClick={() => this.onClick("marks")}>
                  <li className="dt">
                    <span>Am General</span>
                  </li>
                  <li>
                    <ul
                      style={{
                        display:
                          this.state.menuSelect === "marks" ? "block" : "none"
                      }}
                    >
                      {this.carTitle("marks")}
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="select">
                <ul onClick={() => this.onClick("models")}>
                  <li className="dt">
                    <span>All Models</span>
                  </li>
                  <li className="dd">
                    <ul
                      style={{
                        display:
                          this.state.menuSelect === "models" ? "block" : "none"
                      }}
                    >
                      {this.carTitle("models")}
                    </ul>
                  </li>
                </ul>
                <input type="hidden" value="" className="select_value" />
              </div>
              <div className="select">
                <ul onClick={() => this.onClick("price")}>
                  <li className="dt">
                    <span>Select a Price</span>
                  </li>
                  <li className="dd">
                    <ul
                      style={{
                        display:
                          this.state.menuSelect === "price" ? "block" : "none"
                      }}
                    >
                      {this.carTitle("price")}
                    </ul>
                  </li>
                </ul>
                <input type="hidden" value="" className="select_value" />
              </div>
              <div className="select">
                <ul onClick={() => this.onClick("miles")}>
                  <li className="dt">
                    <span>All Miles</span>
                  </li>
                  <li className="dd">
                    <ul
                      style={{
                        display:
                          this.state.menuSelect === "miles" ? "block" : "none"
                      }}
                    >
                      {this.carTitle("miles")}
                    </ul>
                  </li>
                </ul>
                <input type="hidden" value="" className="select_value" />
              </div>
              <div className="line_search">
                <input type="submit" value="Search" className="submit" />
              </div>
              <div className="clear" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps, { getCar })(SearchBar);
