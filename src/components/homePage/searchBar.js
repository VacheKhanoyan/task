import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCar from './../../actions/fetchCar';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelect: '',
    };
    this.carTitle = this.carTitle.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.getCar();
  }

  onClick(elem) {
    this.setState({ menuSelect: this.state.menuSelect === elem ? '' : elem });
  }

  carTitle(elem) {
    const data = Object.values(this.props.cars);
    return data.map((d, i) => <option key={i.toString()}>{d[elem]}</option>);
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
                  <label htmlFor="type">
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
                  <label htmlFor="type">
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon2.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label htmlFor="type">
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon3.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label htmlFor="type">
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon4.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label htmlFor="type">
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon5.png" alt="icons" />
                  </label>
                </li>
                <li>
                  <label htmlFor="type">
                    <input type="radio" name="type" value="body_type" />
                    <img src="style/img/icons/icon6.png" alt="icons" />
                  </label>
                </li>
              </ul>
              <div className="select">
                <ul>
                  <select className="select-box">
                    <option
                      value="select"
                      onClick={() => this.onClick('marks')}
                    >
                      All Marks
                    </option>
                    {this.carTitle('marks')}
                  </select>
                  <ul />
                </ul>
              </div>
              <div className="select">
                <ul>
                  <select className="select-box">
                    <option
                      value="select"
                      onClick={() => this.onClick('models')}
                    >
                      All Models
                    </option>
                    {this.carTitle('models')}
                  </select>
                  <ul />
                </ul>
              </div>
              <div className="select">
                <ul>
                  <select className="select-box">
                    <option
                      value="select"
                      onClick={() => this.onClick('price')}
                    >
                      All Models
                    </option>
                    {this.carTitle('price')}
                  </select>
                  <ul />
                </ul>
              </div>
              <div className="select">
                <ul>
                  <select className="select-box">
                    <option
                      value="select"
                      onClick={() => this.onClick('miles')}
                    >
                      All Models
                    </option>
                    {this.carTitle('miles')}
                  </select>
                  <ul />
                </ul>
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

SearchBar.propTypes = {
  getCar: PropTypes.func.isRequired,
  cars: PropTypes.shape({
    marks: PropTypes.string,
    models: PropTypes.string,
    miles: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, { getCar })(SearchBar);
