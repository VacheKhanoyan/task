import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './../signupPage/signup';
import SignIn from './../signupPage/signin';
import { loggedIn, notify } from '../../actions/userAction';
import getCar from './../../actions/fetchCar';


/* eslint-disable jsx-a11y/click-events-have-key-events,
 jsx-a11y/no-static-element-interactions,
  */

const user = localStorage.getItem('user');
let username = '';
let uid = '';
if (user) {
  const { firstname, id } = JSON.parse(user);
  username = firstname;
  uid = id;
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerShow: false,
      loginShow: false,
      success: localStorage.getItem('logout') || false,
      display: false,
    };
    this.regShow = this.regShow.bind(this);
    this.logShow = this.logShow.bind(this);
    this.logOut = this.logOut.bind(this);
    this.success = this.success.bind(this);
    this.notifys = this.notifys.bind(this);
    this.signup = this.signup.bind(this);
    this.profileShow = this.profileShow.bind(this);
  }
  // componentDidMount() {
  //   this.props.getCar();
  // }
  componentDidUpdate(prevProps, prevState) {
    const prop = Object.values(this.props.notifyid)[0];
    if (prop !== prevState.prop) { this.notifys(Object.values(this.props.notifyid)[0]); }
  }
  regShow() {
    this.setState({ registerShow: !this.state.registerShow, loginShow: false });
  }
  logShow() {
    this.setState({ loginShow: !this.state.loginShow, registerShow: false });
  }
  notifys = (elem) => {
    if (elem) {
      toast.success(`${elem} Success !`, {
        position: toast.POSITION.TOP_CENTER,
      });
      this.props.notify('');
    }
  };
  success() {
    localStorage.setItem('logout', !this.state.success);
    this.setState({ success: !this.state.success });
    this.props.loggedIn(uid);
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
  profileShow() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div>

        <header className="pos_abs">
          <div>
            <ToastContainer />
          </div>
          {}
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
                  {
                    this.state.success
                    ? <a href="#form...." onClick={this.logOut}> Logout </a>
                    : <a href="#form-reg" onClick={this.regShow}> SignUp </a>
                  }
                </li>
                <li className="drop_down" ><a href="#/" onClick={this.state.success ? this.profileShow : () => {}} className="menu_toggle"><i className="fa fa-user" /></a>
                  {
                    this.state.display &&
                    <ul className="drop_info" >
                      <li><a href="#favorites">Favorites <i className="fa fa-star-o" /></a></li>
                      <li><a href="#serach">Saved Search <i className="fa fa-paperclip" /></a></li>

                      <li><Link to="/editProfile"> <span onClick={this.profileShow}>Edit <i className="fa fa-pencil" /></span> </Link ></li>
                    </ul>
                  }
                </li>
              </ul>
            </div>
          </div>
          {this.state.registerShow &&
            <div >
              <SignUp show={this.regShow} signup={this.signup} />

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
  notify: PropTypes.func.isRequired,
  notifyid: PropTypes.shape({}).isRequired,

};

function mapStateToProps(state) {
  return {
    notifyid: state.notifyid,
    user: state.user,
  };
}

export default connect(mapStateToProps, { loggedIn, notify, getCar })(Header);
