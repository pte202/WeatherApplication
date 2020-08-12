import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import WeatherForm from "./WeatherForm";
import WeatherRequest from "../../objects/WeatherRequest";
import * as weatherRequestValidator from "../../utils/weatherRequestValidator";
import * as weatherActions from "../../redux/actions/weatherActions";
import WeatherDetails from "./WeatherDetails";
import Header from "../common/Header";
import Spinner from "../common/Spinner";
import styles from "./WeatherPage.module.css";

function WeatherPage({ weather, loadWeather }) {
  const [weatherRequest, setWeatherRequest] = useState(new WeatherRequest(""));
  const [weatherFormErrors, setWeatherFormErrors] = useState({});
  const [requestLoading, setRequestLoading] = useState(false);

  useEffect(() => {}, [requestLoading]);

  function handleOnChange(event) {
    const { name, value } = event.target;

    setWeatherRequest((prev) => ({ ...prev, [name]: value }));
  }

  function handleOnClick() {
    const validWeatherRequest = validateWeatherRequest();

    if (validWeatherRequest) {
      setRequestLoading(true);

      loadWeather(weatherRequest).then(() => {
        setRequestLoading(false);
      });
    }
  }

  function validateWeatherRequest() {
    const validCityName = weatherRequestValidator.isValidLocation(
      weatherRequest.cityName
    );

    let updateWeatherFormErrors = { ...weatherFormErrors };

    if (validCityName) {
      const { cityName, ...cleanedWeatherFormErrors } = updateWeatherFormErrors;

      updateWeatherFormErrors = cleanedWeatherFormErrors;
    } else {
      updateWeatherFormErrors = {
        ...updateWeatherFormErrors,
        cityName: weatherRequest.cityName
          ? "Invalid City Name"
          : "City Name cannot be empty.",
      };
    }

    setWeatherFormErrors(updateWeatherFormErrors);

    return (
      Object.keys(updateWeatherFormErrors).length === 0 &&
      updateWeatherFormErrors.constructor === Object
    );
  }

  return (
    <>
      <Header
        text={"Find the weather in your city"}
        className={styles.header}
      />
      <WeatherForm
        data={weatherRequest}
        onChange={handleOnChange}
        onClick={handleOnClick}
        errors={weatherFormErrors}
        loading={requestLoading}
      />
      {requestLoading ? (
        <Spinner />
      ) : Object.keys(weather).length !== 0 &&
        !weather.constructor !== Object ? (
        <>
          <Header text={"Weather Details"} className={styles.header} />
          <WeatherDetails data={weather} className={styles.weatherDetails} />
        </>
      ) : (
        ""
      )}
    </>
  );
}

WeatherPage.propTypes = {
  weather: PropTypes.object.isRequired,
  loadWeather: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

const mapDispatchToProps = {
  loadWeather: weatherActions.loadWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
