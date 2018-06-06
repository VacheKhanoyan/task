import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, updateUser, notify } from './../../actions/userAction';
import { signUpValidate } from './../validate';

/* eslint-disable react/no-did-mount-set-state */
const user = localStorage.getItem('user');

let uid = '';
if (user) {
  const { id } = JSON.parse(user);
  uid = id;
}

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  async componentDidMount() {
    const elem = { id: uid };
    await this.props.getUser(elem);
    this.setState({ data: this.props.user[0] });
  }

  onChange(e) {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  }
  async onClick() {
    const errors = signUpValidate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      await this.props.updateUser(uid, this.state.data);
      await this.props.notify('update');
      this.props.history.push('/');
    }
  }

  render() {
    const { data, errors } = this.state;
    return (
      <section className="user_page">
        <div className="page_caption">
          <div className="container">
            <h1>In tis page you can see you can change your information</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis numquam doloribus, inventore animi.
               At ad, deleniti soluta eveniet qui consequuntur odit,
               unde ut ab dolorum architecto dolore sunt porro fugit!
            </span>
          </div>
        </div>
        <div className="container">
          <div className="tabs">
            <ul className="tab-links">
              <li><a href="#/"><span>My Favorite items</span><i className="fa fa-star-o" /></a></li>
              <li><a href="#/"><span>My searched items</span><i className="fa fa-paperclip" /></a></li>
              <li className="active"><a href="user_edit.html"><span>Edit</span><i className="fa fa-pencil" /></a></li>
            </ul>
            <div className="tab-content">
              <div id="tab3">
                <ul className="set_input" >
                  <li>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="firstname"
                      name="firstname"
                      value={data.firstname || ''}
                      onChange={this.onChange}
                    />
                  </li>
                  <div className="validate">{errors.firstname}</div>
                  <li><input
                    type="text"
                    placeholder="Last name"
                    id="lastname"
                    name="lastname"
                    value={data.lastname || ''}
                    onChange={this.onChange}
                  />
                  </li>
                  <div className="validate">{errors.lastname}</div>
                  <li><input
                    type="text"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    value={data.email || ''}
                    onChange={this.onChange}
                  />
                  </li>
                  <div className="validate">{errors.email}</div>
                  <li><input
                    type="text"
                    placeholder="Phone number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={data.phoneNumber || ''}
                    onChange={this.onChange}
                  />
                  </li>
                  <div className="validate">{errors.phoneNumber}</div>
                  <li> <input
                    type="text"
                    placeholder="Zip Code"
                    id="zipCode"
                    name="zipCode"
                    value={data.zipCode || ''}
                    onChange={this.onChange}
                  />
                  </li>
                  <div className="validate">{errors.zipCode}</div>
                  <li><input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password || ''}
                    onChange={this.onChange}
                  />
                    <div className="validate">{errors.password}</div>
                  </li>
                  <li>
                    <input type="submit" value="Save Changes" onClick={this.onClick} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

EditPage.propTypes = {
  getUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  notify: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  user: PropTypes.shape({}).isRequired,
  // data: PropTypes.shape({
  //   firstname: PropTypes.string,
  //   lastname: PropTypes.string,
  //   email: PropTypes.string,
  //   phoneNumber: PropTypes.string,
  // }).isRequired,
  // errors: PropTypes.shape({}).isRequired,
};


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { getUser, updateUser, notify })(EditPage);

