import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import getAllCars from './../../actions/cars';


const ContactInfo = (props) => {
  const { data, errors } = props;
  return (
    <fieldset>
      <legend align="center">Enter Your Contact Info</legend>
      <div>
        <div className="twoRows">
          <div className="rows">
            <span>First Name</span>
            <input
              type="text"
              placeholder="First name"
              id="firstname"
              name="firstname"
              value={data.firstname}
              onChange={props.handleInput}
            />
            <div className="validate">{errors.firstname}</div>
          </div>
          <div className="rows">
            <span>Last Name</span>
            <input
              type="text"
              placeholder="Last name"
              id="lastname"
              name="lastname"
              value={data.lastname}
              onChange={props.handleInput}
            />
            <div className="validate">{errors.lastname}</div>
          </div>

        </div>
        <div className="twoRows">
          <div className="rows check_style">
            <span>Email Address</span>
            <span className="right_check">
              <label htmlFor="allow">
                <input type="checkbox" />
                <p className="check_text">Allow contact via email</p>
              </label>
            </span>
            <input
              type="text"
              placeholder="Email Address"
              id="email"
              name="email"
              value={data.email}
              onChange={props.handleInput}
            />
            <div className="validate">{errors.email}</div>
          </div>
          <div className="rows check_style">
            <span>Phone Number</span>
            <span className="right_check">
              <label htmlFor="allow">
                <input type="checkbox" />
                <p className="check_text">Allow contact via phone</p>
              </label>
            </span>
            <input
              type="text"
              placeholder="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={props.handleInput}
            />
            <div className="validate">{errors.phoneNumber}</div>
          </div>
        </div>
      </div>
    </fieldset>

  );
};

ContactInfo.propTypes = {
  handleInput: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({}).isRequired,
};

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

export default connect(mapStateToProps, { getAllCars })(ContactInfo);

