import React, { Component } from 'react';

class Caption extends Component {
  render() {
    return (
      <div>
        <div className="page_caption">
          <div className="container">
            <ul className="add_serv">
              <li>
                <h1><i className="fa fa-circle-o" /></h1>
                <h3>Absolutely free</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odit dolores assumenda accusantium unde doloribus sapiente repellendus, nemo provident deserunt, temporibus explicabo iure cum, corporis. Blanditiis quisquam doloribus maiores possimus.</p>
              </li>
              <li>
                <h1><i className="fa fa-fighter-jet" /></h1>
                <h3>Very fast sell</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odit dolores assumenda accusantium unde doloribus sapiente repellendus, nemo provident deserunt, temporibus explicabo iure cum, corporis. Blanditiis quisquam doloribus maiores possimus.</p>
              </li>
              <li>
                <h1><i className="fa fa-clock-o" /></h1>
                <h3>Save time</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium odit dolores assumenda accusantium unde doloribus sapiente repellendus, nemo provident deserunt, temporibus explicabo iure cum, corporis. Blanditiis quisquam doloribus maiores possimus.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Caption;
