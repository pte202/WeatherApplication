using FluentAssertions;
using Microsoft.AspNetCore.WebUtilities;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Weather.Api.Configuration.v1;
using Weather.Api.Models;
using Xunit;

namespace Weather.Api.IntegrationTests
{
    public class WeatherControllerTests : IClassFixture<TestFixture<Startup>>
    {
        private HttpClient Client;

        public WeatherControllerTests(TestFixture<Startup> fixture)
        {
            Client = fixture.Client;
        }

        [Fact]
        public async Task GetWeather_ReturnsWeatherResponseDto_WhenWeatherApiRequestisSuccessful()
        {
            // arrange
            var weatherRequestDto = new WeatherRequestDto
            {
                CityName = "London"
            };

            var query = new Dictionary<string, string>
            {
                ["cityName"] = weatherRequestDto.CityName
            };

            // act
            var response = await Client.GetAsync(QueryHelpers.AddQueryString(ApiRoutes.Weather.Get, query));

            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var weatherResponseDto = JsonSerializer.Deserialize<WeatherResponseDto>(
                await response.Content.ReadAsStringAsync(),
                new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true
                });

            weatherResponseDto.Location.Should().Be(weatherRequestDto.CityName);
        }     

        [Fact]
        public async Task GetWeather_ReturnsbadRequest_WhenCityNameIsEmpty()
        {
            // arrange

            // act
            var response = await Client.GetAsync(ApiRoutes.Weather.Get);

            // assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task GetWeather_ReturnsbadRequest_WhenCityNameContainsDigits()
        {
            // arrange
            var weatherRequestDto = new WeatherRequestDto
            {
                CityName = "L0nd0n"
            };

            var query = new Dictionary<string, string>
            {
                ["cityName"] = weatherRequestDto.CityName
            };

            // act
            var response = await Client.GetAsync(QueryHelpers.AddQueryString(ApiRoutes.Weather.Get, query));

            // assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task GetWeather_ReturnsbadRequest_WhenCityNameContainsInvalidCharacters()
        {
            // arrange
            var weatherRequestDto = new WeatherRequestDto
            {
                CityName = "P@r!s"
            };

            var query = new Dictionary<string, string>
            {
                ["cityName"] = weatherRequestDto.CityName
            };

            // act
            var response = await Client.GetAsync(QueryHelpers.AddQueryString(ApiRoutes.Weather.Get, query));

            // assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }
    }
}
