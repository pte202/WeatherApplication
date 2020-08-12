import * as weatherApi from "../../api/weatherApi";
import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadWeatherSuccess(weather) {
  return { type: types.LOAD_WEATHER_SUCCESS, weather };
}

export function loadWeather(weatherRequest) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return weatherApi
      .getWeather(weatherRequest)
      .then((weatherResponse) => {
        dispatch(loadWeatherSuccess(weatherResponse));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
