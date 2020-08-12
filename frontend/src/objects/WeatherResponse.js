class WeatherResponse {
  constructor(location, temperature, pressure, humidity, sunrise, sunset) {
    this.location = location;
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}

export default WeatherResponse;
