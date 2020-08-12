using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Weather.Api.Models.Validation;

namespace Weather.Api.Models
{
    public class WeatherRequestDto : IValidatableObject
    {
        [FromQuery]
        public string CityName { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            var validator = new WeatherRequestDtoValidator();

            var result = validator.Validate(this);
            return result.Errors.Select(item => new ValidationResult(item.ErrorMessage, new[] { item.PropertyName }));
        }
    }
}