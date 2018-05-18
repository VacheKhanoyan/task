import React, { Component } from "react";
import { connect } from "react-redux";
import { sign_Up_Data } from "./../util";
import validate from "./../validate";
import { postUser, getUser } from "./../../actions/userAction";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      data: sign_Up_Data,
      errors: {},
      exist: ""
    };
    this.click = this.click.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  click = () => {
    this.setState({ show: !this.state.show });
  };
  _onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  userExist = email => {
    this.props.getUser(email);
    console.log("aaaaaaaaaaaa", this.props.user.email);
    if (this.props.user[0] !== "undefined") {
      this.setState({ exist: "already exist" });
    }
  };
  _onSubmit = e => {
    e.preventDefault();
    const errors = validate(this.state.data);
    this.userExist(this.state.email);

    this.setState({ errors });

    console.log(this.state.errors);
    if (Object.keys(this.state.errors).length === 0 && !this.state.exist) {
      postUser(this.state.data, () => {
        this.setState({ show: !this.state.show });
      });
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        {this.state.show && (
          <div className="fullscreen">
            <div id="form-reg" class="modal-content mfp-with-anim mfp-hide">
              <button
                title="Close (Esc)"
                type="text"
                className="mfp-close"
                onClick={this.click}
                style={{
                  float: "right",
                  background: "transparent",
                  overflow: "visible",
                  border: "0",
                  display: "block",
                  width: "44px",
                  height: "44px",
                  fontSize: "28px"
                }}
              >
                ×
              </button>
              <div class="modal-body reg-sections">
                <h3 class="white">Sign up</h3>

                <div class="form_area signup_form">
                  <div>
                    <input
                      type="text"
                      placeholder="First name"
                      id="firstname"
                      name="firstname"
                      value={data.firstname}
                      onChange={this._onChange}
                    />
                  </div>
                  <div class="validate">
                    {errors.firstname && (
                      <div class="validate">{errors.firstname}</div>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last name"
                      id="lastname"
                      name="lastname"
                      value={data.lastname}
                      onChange={this._onChange}
                    />
                  </div>
                  {errors.lastname && (
                    <div class="validate">{errors.lastname}</div>
                  )}
                  <div>
                    <input
                      type="text"
                      placeholder="Email address"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={this._onChange}
                    />
                  </div>
                  {errors.email ||
                    (this.state.exist && (
                      <div class="validate">{errors.email}</div>
                    ))}
                  <div>
                    <input
                      type="text"
                      placeholder="Phone number"
                      id="phone_number"
                      name="phone_number"
                      value={data.phone_number}
                      onChange={this._onChange}
                    />
                  </div>
                  {errors.email && (
                    <div className="validate">{errors.phone_number} </div>
                  )}
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      id="zip_code"
                      name="zip_code"
                      value={data.zip_code}
                      onChange={this._onChange}
                    />
                  </div>
                  <div className="validate">{errors.zip_code} </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={this._onChange}
                    />
                  </div>
                  <div className="validate">{errors.password} </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      id="onfirm_password"
                      name="confirm_password"
                      value={data.confirm_password}
                      onChange={this._onChange}
                    />
                  </div>
                  <div className="validate">{errors.confirm_password} </div>
                  <div class="clearAfter">
                    <div class="left inline-popups">
                      <a href="#form-login" class="line_height42">
                        Already Registered?
                      </a>
                    </div>
                    <div class="right">
                      <input
                        type="submit"
                        class="submit"
                        value="Sign Up"
                        onClick={this._onSubmit}
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

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { postUser, getUser })(SignUp);