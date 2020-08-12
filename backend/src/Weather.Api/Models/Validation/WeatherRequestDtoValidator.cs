using FluentValidation;

namespace Weather.Api.Models.Validation
{
    public class WeatherRequestDtoValidator : AbstractValidator<WeatherRequestDto>
    {
        const string OnlyLettersAndCommaRegex = @"^[\sa-zA-Z,]+$";

        public WeatherRequestDtoValidator()
        {
            RuleFor(dto => dto.CityName).NotEmpty().WithMessage("Cannot be empty").DependentRules(() =>
            {
                RuleFor(dto => dto.CityName).Matches(OnlyLettersAndCommaRegex).WithMessage("Cannot contain invalid characters");
            });
        }
    }
}
