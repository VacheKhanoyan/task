import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUpData } from './../util';
import { signUpValidate } from './../validate';

import { postUser, getUser } from './../../actions/userAction';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      data: signUpData,
      errors: {},
      exist: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    await this.props.getUser(this.state.data.email);
    const exist = this.props.user[0];

    if (exist) {
      this.setState({ exist: exist.email });
    }
    const errors = signUpValidate(this.state.data, this.state.exist);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      postUser(this.state.data, () => {
        this.props.signup();
      }, () => {
        this.props.show();
      });
    }
  }

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        {this.state.show && (
        <div className="fullscreen">
          <div id="form-reg" className="modal-content mfp-with-anim mfp-hide">
            <button
              title="Close (Esc)"
              type="text"
              className="mfp-close"
              onClick={this.props.show}
              style={{
                  float: 'right',
                  background: 'transparent',
                  overflow: 'visible',
                  border: '0',
                  display: 'block',
                  width: '44px',
                  height: '44px',
                  fontSize: '28px',
                }}
            >
                ×
            </button>
            <div className="modal-body reg-sections">
              <h3 className="white">Sign up</h3>
              <div className="form_area signup_form">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    id="firstname"
                    name="firstname"
                    value={data.firstname}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">
                  <div className="validate">{errors.firstname}</div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    id="lastname"
                    name="lastname"
                    value={data.lastname}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.lastname}</div>
                <div>
                  <input
                    type="text"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.email}</div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.phoneNumber} </div>
                <div>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    id="zipCode"
                    name="zipCode"
                    value={data.zipCode}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.zipCode} </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.password} </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.confirmPassword} </div>
                <div className="clearAfter">
                  <div className="left inline-popups">
                    <a href="#form-login" className="line_height42">
                        Already Registered?
                    </a>
                  </div>
                  <div className="right">
                    <input
                      type="submit"
                      className="submit"
                      value="Sign Up"
                      onClick={this.onSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

SignUp.propTypes = {
  getUser: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    zipCode: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { postUser, getUser })(SignUp);

// formrender = () => {
//   return Object.keys(this.state.data).map(key => {
//     return (
//       <div key={key}>
//         <div>
//           <input
//             type="text"
//             placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//             id={key}
//             name={key}
//             value={this.state.data[key]}
//             onChange={this._onChange}
//           />
//         </div>
//         <div class="validate">
//           {this.state.errors[key] && (
//             <div class="validate">{this.state.errors[key]}</div>
//           )}
//         </div>
//       </div>
//     );
//   });
// };
