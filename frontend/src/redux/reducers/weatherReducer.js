import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function weatherReducer(state = initialState.weather, action) {
  switch (action.type) {
    case types.LOAD_WEATHER_SUCCESS:
      return action.weather;
    default:
      return state;
  }
}
