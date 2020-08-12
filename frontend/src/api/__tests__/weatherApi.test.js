import * as weatherApi from "../../api/weatherApi";
import WeatherRequest from "../../objects/WeatherRequest";
import WeatherResponse from "../../objects/WeatherResponse";

describe("weatherApi", () => {
  beforeEach(() => {
    process.env = Object.assign(process.env, {
      REACT_APP_WEATHER_API_BASE_URL: "https://localhost:5001/",
    });
  });

  it("fetches data from server when server returns a successful response", (done) => {
    const weatherRequest = new WeatherRequest("London");

    const weatherResponse = new WeatherResponse(
      "London",
      {
        current: 302.22,
        maximum: 303.71,
        minimum: 299.82,
      },
      1013,
      54,
      1597120819,
      1597174271
    );

    const onResponse = jest.fn();
    const onError = jest.fn();

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          json: () => {
            return weatherResponse;
          },
        });
      });
    });

    weatherApi.getWeather(weatherRequest);

    expect(global.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockClear();
    done();
  });
});
