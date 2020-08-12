import React from "react";
import { shallow, mount } from "enzyme";
import WeatherForm from "../../weather/WeatherForm";
import TextInput from "../../common/TextInput";
import Button from "../../common/Button";
import WeatherRequest from "../../../objects/WeatherRequest";

describe("WeatherDetails", function () {
  let mountedWeatherForm;

  beforeEach(() => {
    mountedWeatherForm = shallow(
      <WeatherForm data={{}} onChange={jest.fn()} onClick={jest.fn()} />
    );
  });

  it("renders without crashing", () => {
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn();

    const weatherRequest = new WeatherRequest("London");

    let mountedWeatherForm = shallow(
      <WeatherForm
        data={weatherRequest}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );
  });

  it("displays weather form with text input and buttons", () => {
    const mockOnChange = jest.fn();
    const mockOnClick = jest.fn();

    const weatherRequest = new WeatherRequest("London");

    let wrapper = mount(
      <WeatherForm
        data={weatherRequest}
        onChange={mockOnChange}
        onClick={mockOnClick}
      />
    );

    const weatherForm = wrapper.find(WeatherForm);

    expect(weatherForm.length).toBe(1);

    const textInputs = wrapper.find(TextInput);
    expect(textInputs.length).toBe(1);

    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(1);

    wrapper.find("button").simulate("click");
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
