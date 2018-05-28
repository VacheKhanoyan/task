import { combineReducers } from 'redux';
import FetchCars from './CarReducers';
import FetchNewCars from './newCarReducers';
// import AddCars from './addCars';
import postUser from './userReducer';


const rootReducer = combineReducers({
  cars: FetchCars,
  // addCars: AddCars,
  newCars: FetchNewCars,
  user: postUser,
});

export default rootReducer;
