import React from "react";
import { shallow } from "enzyme";
import HomePage from "../../home/HomePage";

describe("HomePage", function () {
  let mountedHomePage;

  beforeEach(() => {
    mountedHomePage = shallow(<HomePage />);
  });

  it("renders without crashing", () => {
    let mountedHomePage = shallow(<HomePage />);
  });
});
