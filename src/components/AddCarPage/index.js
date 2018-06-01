import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Caption from './caption';
import Container from './container';

class AddCarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: false,
    };

    this.notifys = this.notifys.bind(this);
    this.addSuccess = this.addSuccess.bind(this);
  }
  notifys = () => {
    toast.success('Success Car Add!', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  addSuccess() {
    this.setState({ notify: !this.state.notify });
  }
  render() {
    return (
      <div className="content">
        <ToastContainer />
        { this.state.notify && this.notifys() }
        <Caption />
        <Container addSuccess={this.addSuccess} />
      </div>
    );
  }
}


export default AddCarPage;
