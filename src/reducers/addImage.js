import { ADD_CAR_IMAGE } from '../actions/postImage';


export default function (state = {}, action) {
  switch (action.type) {
    case ADD_CAR_IMAGE: {
      return { ...state, image: action.payload.data };
    }
    default:
      return state;
  }
}
