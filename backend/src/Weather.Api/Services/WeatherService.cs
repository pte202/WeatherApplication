using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Weather.Api.Configuration.AppSettings;
using Weather.Api.ExternalModels;

namespace Weather.Api.Services
{
    public class WeatherService : IWeatherService
    {
        private readonly AppSettings _appSettings;
        private readonly IHttpClientFactory _httpClientFactory;
        private CancellationTokenSource _cancellationTokenSource;

        public WeatherService(
            IOptions<AppSettings> appSettings,
            IHttpClientFactory httpClientFactory
            )
        {
            _appSettings = appSettings.Value ?? throw new ArgumentNullException(nameof(appSettings));
            _httpClientFactory = httpClientFactory ?? throw new ArgumentNullException(nameof(httpClientFactory));
        }

        public async Task<ExternalWeatherResponseDto> GetCurrentWeatherDataByCityNameAsync(string cityName)
        {
            var weatherEndpoint = "weather";
            var apiKey = _appSettings.WebServices.WeatherApi.Key;
            var requestParameters = new Dictionary<string, string>
            {
                {"q", cityName },
                {"appid", apiKey }
            };

            var httpClient = _httpClientFactory.CreateClient();

            httpClient.BaseAddress = new Uri(_appSettings.WebServices.WeatherApi.Url);
            var requestUri = QueryHelpers.AddQueryString(weatherEndpoint, requestParameters);

            var request = new HttpRequestMessage(HttpMethod.Post, requestUri);

            request.Headers.Add("Accept", "application/json");

            _cancellationTokenSource = new CancellationTokenSource();

            var response = await httpClient.SendAsync(request, _cancellationTokenSource.Token);

            if(response.IsSuccessStatusCode)
            {
                return JsonSerializer.Deserialize<ExternalWeatherResponseDto>(
                await response.Content.ReadAsStringAsync(), 
                new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true
                });
            }

            _cancellationTokenSource.Cancel();

            return null;
        }
    }
}
