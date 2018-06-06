
import { NOTIFY } from '../actions/userAction';

export default function (state = {}, action) {
  switch (action.type) {
    case NOTIFY: {
      return { ...state, notyfy: action.payload };
    }
    default:
      return state;
  }
}
