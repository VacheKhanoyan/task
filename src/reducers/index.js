import { combineReducers } from 'redux';
import FetchCars from './CarReducers';
import FetchNewCars from './newCarReducers';
import postUser from './userReducer';
import notify from './notify';
import SearchCars from './SearchCars';


const rootReducer = combineReducers({
  cars: FetchCars,
  CarsList: SearchCars,
  newCars: FetchNewCars,
  user: postUser,
  notifyid: notify,
});

export default rootReducer;
