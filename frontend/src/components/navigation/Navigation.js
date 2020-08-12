import React from "react";

import NavigationLinksBar from "./NavigationLinksBar";

function Navigation() {
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

  return (
    <div>
      <NavigationLinksBar
        menuItems={navigationData[0].menuItems}
        burgerData={navigationData}
        style={{ marginTop: 20 }}
      />
    </div>
  );
}

export default Navigation;
