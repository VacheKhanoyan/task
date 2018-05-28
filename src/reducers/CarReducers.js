import { ADD_CAR } from './../actions/postCars';
import { GET_ALL_CARS } from './../actions/cars';
import { FETCH_CARS } from './../actions/fetchCar';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_CAR:
      return { ...state, cars: action.payload.data };
    case GET_ALL_CARS:
      return { ...state, ...action.payload };
    case FETCH_CARS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
