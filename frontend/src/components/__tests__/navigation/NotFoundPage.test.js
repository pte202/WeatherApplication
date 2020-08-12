import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../navigation/NotFoundPage";

describe("NavigationLinksBar", function () {
  let mountedNotFoundPage;

  beforeEach(() => {
    mountedNotFoundPage = shallow(<NotFoundPage />);
  });

  it("renders without crashing", () => {
    let mountedNotFoundPage = shallow(<NotFoundPage />);
  });
});
