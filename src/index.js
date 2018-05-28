import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import thunk from 'redux-thunk';

// import App from './App';
import reducers from './reducers';

import HomePage from './components/homePage';
import AddCarPage from './components/AddCarPage';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter >

      <Switch>

        <Route path="/addCar" component={AddCarPage} />
        <Route path="/" component={HomePage} />
      </Switch>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
