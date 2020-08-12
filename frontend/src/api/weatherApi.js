import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_WEATHER_API_BASE_URL + "api/v1/weather";

export function getWeather(weatherRequest) {
  console.log(baseUrl);

  const url = new URL(baseUrl);

  url.search = new URLSearchParams(weatherRequest).toString();

  return fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(handleResponse)
    .catch(handleError);
}
