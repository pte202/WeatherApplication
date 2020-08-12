using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Weather.Api.Configuration.v1;
using Weather.Api.ExternalModels;
using Weather.Api.Models;
using Weather.Api.Services;

namespace Weather.Api.Controllers.v1
{
    [ApiController]
    [Produces("application/json")]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherService _weatherService;
        private readonly IMapper _mapper;

        public WeatherController(
            IWeatherService weatherService,
            IMapper mapper)
        {
            _weatherService = weatherService;
            _mapper = mapper;
        }

        /// <summary>
        /// Get weather given a city name
        /// </summary>
        /// <response code="200">Returns weather information on given city name</response>
        [HttpGet(ApiRoutes.Weather.Get, Name = "GetWeather")]
        [ProducesResponseType(typeof(WeatherResponseDto), statusCode: 200)]
        public async Task<IActionResult> Get([FromQuery] WeatherRequestDto dto)
        {
            var result = await _weatherService.GetCurrentWeatherDataByCityNameAsync(dto.CityName);

            if (result != null)
            {
                var responseDto =_mapper.Map<ExternalWeatherResponseDto, WeatherResponseDto>(result);

                return new OkObjectResult(responseDto);
            }

            return BadRequest();
        }
    }
}
