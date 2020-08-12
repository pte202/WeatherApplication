namespace Weather.Api.Models
{
    public class WeatherResponseDto
    {
        public string Location { get; set; }
        public TemperatureDto Temperature { get; set; }
        public string Pressure { get; set; }
        public string Humidity { get; set; }
        public string Sunrise { get; set; }
        public string Sunset { get; set; }
    }
}