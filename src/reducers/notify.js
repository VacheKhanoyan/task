
import { POST_NOTIFY } from '../actions/postCars';


export default function (state = {}, action) {
  switch (action.type) {
    case POST_NOTIFY: {
      return { ...state, notyfyId: action.payload.data };
    }
    default:
      return state;
  }
}
