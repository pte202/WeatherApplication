import { formatCammelCaseProperties } from "../utils/helperFunctions/";

describe("formatCammelCaseProperties", function () {
  it("returns readable text from cammelcase in lowercase", function () {
    let value = "cityName";

    let expected = "city name";
    let actual = formatCammelCaseProperties(value);

    expect(actual).toEqual(expected);
  });

  it("returns readable text from cammelcase in starting capital leterrs", function () {
    let value = "cityName";

    let expected = "City Name";
    let actual = formatCammelCaseProperties(value, true);

    expect(actual).toEqual(expected);
  });

  it("returns readable text from cammelcase in starting capital leterrs and hyphen delimeters", function () {
    let value = "cityName";
    let delimeter = "-";

    let expected = "City-Name";
    let actual = formatCammelCaseProperties(value, true, delimeter);

    expect(actual).toEqual(expected);
  });
});
