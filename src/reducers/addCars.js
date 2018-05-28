import { ADD_CAR } from './../actions/postCars';


export default function (state = {}, action) {
  switch (action.type) {
    case ADD_CAR:
      return { ...state, cars: action.payload.data };
    default:
      return state;
  }
}
