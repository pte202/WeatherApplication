import React from "react";
import { shallow } from "enzyme";
import Spinner from "../../common/Spinner";

describe("Spinner", function () {
  let mountedSpinner;

  beforeEach(() => {
    mountedSpinner = shallow(<Spinner />);
  });

  it("renders without crashing", () => {
    let mountedSpinner = shallow(<Spinner />);
  });
});
