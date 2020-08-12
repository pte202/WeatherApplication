import { combineReducers } from "redux";
import weather from "./weatherReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  weather,
  apiCallsInProgress,
});

export default rootReducer;
