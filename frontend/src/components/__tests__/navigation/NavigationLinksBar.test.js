import React from "react";
import { shallow, mount } from "enzyme";
import NavigationLinksBar from "../../navigation/NavigationLinksBar";
import NavigationBurgerMenu from "../../navigation/NavigationBurgerMenu";
import { Link, MemoryRouter } from "react-router-dom";

describe("NavigationLinksBar", function () {
  let mountedNavigationLinksBar;

  beforeEach(() => {
    mountedNavigationLinksBar = shallow(<NavigationLinksBar />);
  });

  it("renders without crashing", () => {
    let mountedNavigationLinksBar = shallow(<NavigationLinksBar />);
  });

  it("displays navigation links bar with burger menu", () => {
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

    let wrapper = mount(
      <MemoryRouter>
        <NavigationLinksBar
          menuItems={navigationData[0].menuItems}
          burgerData={navigationData}
        />
      </MemoryRouter>
    );

    const navigationLinksBar = wrapper.find(NavigationLinksBar);

    expect(navigationLinksBar.length).toBe(1);

    const navigationBurgerMenu = wrapper.find(NavigationBurgerMenu);
    expect(navigationBurgerMenu.length).toBe(1);

    const links = wrapper.find(Link);
    expect(links.length).toBe(4);
  });

  it("displays navigation links bar without burger menu", () => {
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

    let wrapper = mount(
      <MemoryRouter>
        <NavigationLinksBar menuItems={navigationData[0].menuItems} />
      </MemoryRouter>
    );

    NavigationBurgerMenu;

    const navigationLinksBar = wrapper.find(NavigationLinksBar);
    expect(navigationLinksBar.length).toBe(1);

    const navigationBurgerMenu = navigationLinksBar.find(NavigationBurgerMenu);
    expect(navigationBurgerMenu.length).toBe(0);

    const links = wrapper.find(Link);
    expect(links.length).toBe(2);
  });
});
