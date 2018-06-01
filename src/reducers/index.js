import { combineReducers } from 'redux';
import FetchCars from './CarReducers';
import FetchNewCars from './newCarReducers';
import AddCarsImage from './addImage';
import postUser from './userReducer';
import notify from './notify';


const rootReducer = combineReducers({
  cars: FetchCars,
  image: AddCarsImage,
  newCars: FetchNewCars,
  user: postUser,
  notifyId: notify,
});

export default rootReducer;
