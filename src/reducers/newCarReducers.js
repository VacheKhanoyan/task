import { FETCH_NEW_CARS } from './../actions/fetchNewCars';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NEW_CARS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
