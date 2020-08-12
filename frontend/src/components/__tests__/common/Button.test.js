import React from "react";
import { shallow } from "enzyme";
import Button from "../../common/Button";

describe("Button", function () {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(
      <Button type="button" text="Submit" className={"btnPrimary"} />
    );
  });

  it("renders without crashing", () => {
    let mountedButton = shallow(
      <Button type="button" text="Submit" className={"btnPrimary"} />
    );
  });

  it("renders a button", () => {
    const button = mountedButton.find("button");
    expect(button.length).toBe(1);
  });

  it("call a function passed to it when clicked", () => {
    const mockCallBack = jest.fn();
    const mountedButtonWithCallback = shallow(
      <Button
        type="button"
        text="Submit"
        className={"btnPrimary"}
        onClick={mockCallBack}
      />
    );
    mountedButtonWithCallback.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
