import { combineReducers } from 'redux';
import FetchCars from './CarReducers';
import FetchNewCars from './newCarReducers';
import postUser from './userReducer';


const rootReducer = combineReducers({
  cars: FetchCars,
  newCars: FetchNewCars,
  user: postUser,
});

export default rootReducer;
