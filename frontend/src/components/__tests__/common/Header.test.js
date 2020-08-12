import React from "react";
import { shallow } from "enzyme";
import Header from "../../common/Header";

describe("Header", function () {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header text="Test Header" />);
  });

  it("renders without crashing", () => {
    let mountedHeader = shallow(<Header text="Test Header" />);
  });
});
