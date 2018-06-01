import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

