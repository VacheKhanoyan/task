import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from './../signupPage/signup';
import SignIn from './../signupPage/signin';
import { loggedIn } from '../../actions/userAction';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerShow: false,
      loginShow: false,
      success: localStorage.getItem('logout') || false,
      notify: false,
    };
    this.regShow = this.regShow.bind(this);
    this.logShow = this.logShow.bind(this);
    this.logOut = this.logOut.bind(this);
    this.success = this.success.bind(this);
    this.notifys = this.notifys.bind(this);
    this.signup = this.signup.bind(this);
  }
  regShow() {
    this.setState({ registerShow: !this.state.registerShow, loginShow: false });
  }
  logShow() {
    this.setState({ loginShow: !this.state.loginShow, registerShow: false });
  }
  notifys = () => {
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  success() {
    localStorage.setItem('logout', !this.state.success);
    this.setState({ success: !this.state.success });
  }
  signup() {
    this.setState({ notify: !this.state.notify });
  }
  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('logout');
    this.setState({ success: !this.state.success });
    const id = '';
    this.props.loggedIn(id);
  }

  render() {
    const user = localStorage.getItem('user');
    let username = '';
    if (user) {
      const { firstname } = JSON.parse(user);
      username = firstname;
    }
    return (
      <div>
        <header className="pos_abs">
          <div className="container clearAfter">
            <div className="logo">
              <a href="#to">
                <img src="img/logo3.png" alt="logo" />
              </a>
            </div>
            <div className="header_menu clearAfter">
              <div id="topToggle" className="drawspan">
                <span />
                <span />
                <span />
              </div>
              <ul id="slidetoggle">
                <li>
                  <a href="#to">Buy</a>
                </li>
                <li>
                  <a href="#to">Sell &amp; Trade</a>
                </li>
                <li>
                  <a href="#to">Service &amp; Repai</a>
                </li>
                <li>
                  <a href="#to">News</a>
                </li>
                <li className="inline-popups">
                  <a href="#form-login" onClick={this.logShow}>{this.state.success ? <p> {username} </p> : 'Sign In' }</a>
                </li>
                <li className="inline-popups">
                  {this.state.success
                    ? <a href="#form...." onClick={this.logOut}> Logout </a>
                    : <a href="#form-reg" onClick={this.regShow}> SignUp </a>
                  }
                </li>
                <li className="drop_down">
                  <a href="#to" className="menu_toggle">
                    <i className="fa fa-user" />
                  </a>
                  <ul className="drop_info">
                    <li>
                      <a href="#to">
                        Favorites <i className="fa fa-star-o" />
                      </a>
                    </li>
                    <li>
                      <a href="#to">
                        Saved Search <i className="fa fa-paperclip" />
                      </a>
                    </li>
                    <li>
                      <a href="#to">
                        Edit <i className="fa fa-pencil" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {this.state.registerShow &&
            <div >
              <SignUp show={this.regShow} signup={this.signup} />
              {this.state.notify &&
              <div> {this.notifys()}
                <ToastContainer />
              </div>
           }
            </div>
          }
          {this.state.loginShow &&
            <div >
              <SignIn show={this.logShow} success={this.success} />
            </div>
          }

        </header>

      </div>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.func.isRequired,
};


export default connect(null, { loggedIn })(Header);
