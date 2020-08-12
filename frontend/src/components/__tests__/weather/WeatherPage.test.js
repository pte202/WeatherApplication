import React from "react";
import { shallow, mount } from "enzyme";
import WeatherPage from "../../weather/WeatherPage";
import Header from "../../common/Header";
import WeatherForm from "../../weather/WeatherForm";
import configureStore from "../../../redux/configureStore";
import { Provider } from "react-redux";

describe("WeatherPage", function () {
  let mountedWeatherPage;
  const store = configureStore();

  beforeEach(() => {
    mountedWeatherPage = shallow(
      <Provider store={store}>
        <WeatherPage />
      </Provider>
    );
  });

  it("renders without crashing", () => {
    let mountedWeatherPage = shallow(
      <Provider store={store}>
        <WeatherPage />
      </Provider>
    );
  });

  it("displays header and weather form", () => {
    const wrapper = mount(
      <Provider store={store}>
        <WeatherPage />
      </Provider>
    );

    const weatherPage = wrapper.find(WeatherPage);

    expect(weatherPage.length).toBe(1);

    const header = wrapper.find(Header);
    expect(header.length).toBe(1);

    const weatherForm = wrapper.find(WeatherForm);
    expect(weatherForm.length).toBe(1);
  });
});
