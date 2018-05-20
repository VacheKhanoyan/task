import React, { Component } from "react";
import SignUp from "./../signupPage/signup";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.onShow = this.onShow.bind(this);
  }
  onShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <header className="pos_abs">
          <div className="container clearAfter">
            <div className="logo">
              <a href="#">
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
                  <a href="#">Buy</a>
                </li>
                <li>
                  <a href="#">Sell &amp; Trade</a>
                </li>
                <li>
                  <a href="#">Service &amp; Repai</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li className="inline-popups">
                  <a href="#form-login">Sign In</a>
                </li>
                <li className="inline-popups">
                  <a href="#form-reg" onClick={this.onShow}>
                    Sign Up
                  </a>
                </li>
                <li className="drop_down">
                  <a href="#" className="menu_toggle">
                    <i className="fa fa-user" />
                  </a>
                  <ul className="drop_info">
                    <li>
                      <a href="#">
                        Favorites <i className="fa fa-star-o" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Saved Search <i className="fa fa-paperclip" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Edit <i className="fa fa-pencil" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {this.state.show && (
          <div>
            <SignUp show={this.onShow}/>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
