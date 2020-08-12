import React from "react";
import { shallow, mount } from "enzyme";
import NavigationBurgerMenu from "../../navigation/NavigationBurgerMenu";
import { Link, MemoryRouter } from "react-router-dom";

describe("NavigationBurgerMenu", function () {
  let mountedNavigation;

  beforeEach(() => {
    mountedNavigation = shallow(<NavigationBurgerMenu data={[]} />);
  });

  it("renders without crashing", () => {
    let mountedNavigation = shallow(<NavigationBurgerMenu data={[]} />);
  });

  it("displays burger menu links", () => {
    const navigationData = [
      {
        title: "Menu",
        menuItems: [
          {
            link: "/home",
            text: "Home",
            absolutePath: "/home",
          },
          {
            link: "/weather",
            text: "Weather",
            absolutePath: "/weather",
          },
        ],
      },
    ];

    const wrapper = mount(
      <MemoryRouter>
        <NavigationBurgerMenu data={navigationData} />
      </MemoryRouter>
    );

    const links = wrapper.find(Link);
    expect(links.length).toBe(2);
  });
});
