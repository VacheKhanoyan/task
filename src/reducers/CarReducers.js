import { FETCH_CARS } from "./../actions/fetchCar";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
