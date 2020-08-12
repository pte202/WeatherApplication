using System.Threading.Tasks;
using Weather.Api.ExternalModels;

namespace Weather.Api.Services
{
    public interface IWeatherService
    {
        Task<ExternalWeatherResponseDto> GetCurrentWeatherDataByCityNameAsync(string cityName);
    }
}
