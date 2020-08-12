import React from "react";
import { shallow } from "enzyme";
import Navigation from "../../navigation/Navigation";

describe("Navigation", function () {
  let mountedNavigation;

  beforeEach(() => {
    mountedNavigation = shallow(<Navigation />);
  });

  it("renders without crashing", () => {
    let mountedNavigation = shallow(<Navigation />);
  });
});
