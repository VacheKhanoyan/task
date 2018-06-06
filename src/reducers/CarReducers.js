import { ADD_CAR } from './../actions/postCars';
import { GET_ALL_CARS, GET_SINGLE_CAR } from './../actions/cars';


export default function (state = {}, action) {
  switch (action.type) {
    case ADD_CAR:
      return { ...state, cars: action.payload.data };
    case GET_ALL_CARS:
      return { ...state, ...action.payload };
    case GET_SINGLE_CAR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
