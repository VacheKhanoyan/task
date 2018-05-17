import { combineReducers } from "redux";
import FetchCars from "./CarReducers";
import FetchNewCars from "./newCarReducers";

const rootReducer = combineReducers({
  cars: FetchCars,
  newCars: FetchNewCars
});

export default rootReducer;
