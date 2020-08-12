import React from "react";
import { shallow, mount } from "enzyme";
import WeatherDetails from "../../weather/WeatherDetails";
import TextInput from "../../common/TextInput";
import WeatherResponse from "../../../objects/WeatherResponse";

describe("WeatherDetails", function () {
  let mountedWeatherDetails;

  beforeEach(() => {
    mountedWeatherDetails = shallow(<WeatherDetails data={{}} />);
  });

  it("renders without crashing", () => {
    let mountedWeatherDetails = shallow(<WeatherDetails data={{}} />);
  });

  it("displays weather details from object", () => {
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

    let wrapper = mount(<WeatherDetails data={weatherResponse} />);

    const weatherDetails = wrapper.find(WeatherDetails);

    expect(weatherDetails.length).toBe(1);

    const textInputs = wrapper.find(TextInput);
    expect(textInputs.length).toBe(8);
  });
});
