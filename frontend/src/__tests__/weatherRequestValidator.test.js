import { isValidLocation } from "../utils/weatherRequestValidator/";

describe("isValidLocation", function () {
  it("returns valid location when input is city name", function () {
    let value = "London";

    let expected = true;
    let actual = isValidLocation(value);

    expect(actual).toEqual(expected);
  });

  it("returns valid location when input is city name and country", function () {
    let value = "London, UK";

    let expected = true;
    let actual = isValidLocation(value);

    expect(actual).toEqual(expected);
  });

  it("returns invalid location when input includes digits", function () {
    let value = "L0nd0n";

    let expected = false;
    let actual = isValidLocation(value);

    expect(actual).toEqual(expected);
  });

  it("returns invalid location when input includes special characters", function () {
    let value = "P@r!s";

    let expected = false;
    let actual = isValidLocation(value);

    expect(actual).toEqual(expected);
  });

  it("returns invalid location when input includes city name and country with hyphen", function () {
    let value = "Paris - France";

    let expected = false;
    let actual = isValidLocation(value);

    expect(actual).toEqual(expected);
  });
});
