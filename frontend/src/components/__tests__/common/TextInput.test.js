import React from "react";
import { shallow } from "enzyme";
import TextInput from "../../common/TextInput";

describe("TextInput", function () {
  let mountedTextInput;

  beforeEach(() => {
    mountedTextInput = shallow(
      <TextInput name="test" label="Test" value="test" />
    );
  });

  it("renders without crashing", () => {
    let mountedTextInput = shallow(
      <TextInput name="test" label="Test" value="test" />
    );
  });
});
