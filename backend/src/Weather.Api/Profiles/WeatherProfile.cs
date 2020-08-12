using AutoMapper;
using System.Linq;
using Weather.Api.ExternalModels;
using Weather.Api.Models;

namespace Weather.Api.Profiles
{
    public class WeatherProfile : Profile
    {
        public WeatherProfile()
        {
            CreateMap<ExternalWeatherResponseDto, WeatherResponseDto>()
                .ForMember(dto => dto.Location, opt => opt.MapFrom(dto => dto.Name))
                .ForPath(dto => dto.Temperature.Current, opt => opt.MapFrom(dto => dto.Main.Temp))
                .ForPath(dto => dto.Temperature.Maximum, opt => opt.MapFrom(dto => dto.Main.TempMax))
                .ForPath(dto => dto.Temperature.Minimum, opt => opt.MapFrom(dto => dto.Main.TempMin))
                .ForMember(dto => dto.Pressure, opt => opt.MapFrom(dto => dto.Main.Pressure))
                .ForMember(dto => dto.Humidity, opt => opt.MapFrom(dto => dto.Main.Humidity))
                .ForMember(dto => dto.Sunrise, opt => opt.MapFrom(dto => dto.Sys.Sunrise))
                .ForMember(dto => dto.Sunset, opt => opt.MapFrom(dto => dto.Sys.Sunset)); 
        }
    }
}
