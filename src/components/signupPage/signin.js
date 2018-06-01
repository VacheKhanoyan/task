import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signUpData } from './../util';
import { loginValidate } from './../validate';

import { getUser, loggedIn } from './../../actions/userAction';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      data: signUpData,
      errors: {},
      exist: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },

    });
  }
  async onSubmit() {
    const user = { email: this.state.data.email, password: this.state.data.password };
    const errors = loginValidate(user);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      await this.props.getUser(user);
      const data = { id: this.props.user[0].id, firstname: this.props.user[0].firstname };
      this.props.loggedIn(data.id);
      localStorage.setItem('user', JSON.stringify(data));
      this.props.success();
      this.props.show();
    }
  }
  render() {
    const { data, errors } = this.state;

    return (
      <div className="fullscreen">
        <div id="form-login" className="modal-content mfp-with-anim mfp-hide">
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
          <div className="modal-body login-sections">
            <div id="login_sect">
              <h3 className="white">Sign in</h3>
              <div className="form_area signin_form">
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
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="validate">{errors.password} </div>
                <div className="clearAfter">
                  <div className="left check_style">
                    <label htmlFor="remember">
                      <input type="checkbox" />
                      <p className="check_text">Remember me</p>
                    </label>
                  </div>
                  <div className="right">
                    <input
                      type="submit"
                      className="submit"
                      value="Sign In"
                      onClick={this.onSubmit}
                    />
                  </div>
                </div>
                <div className="clearAfter">
                  <div className="left inline-popups">
                    <a href="#form-reg">Don`t have an account yet</a>
                  </div>
                  <p className="right forgot"><a href="#to" id="forgotBtn">Forgot password?</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  getUser: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  loggedIn: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { getUser, loggedIn })(SignIn);
