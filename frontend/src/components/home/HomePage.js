import React from "react";

import styles from "./HomePage.module.css";

import Header from "../common/Header";

function HomePage() {
  return (
    <>
      <Header text={"Home"} className={styles.header} />
      <div className={styles.body}>
        <p>
          Sample web application which allows users to enter a location and view
          details about the weather in that area. The design of the application
          consists of frontend built with React.Js and backend built with .NET
          Core.
        </p>
        <p>
          Please click the weather menu item if you want to know more about the
          weather details in a sepcific location.
        </p>
      </div>
    </>
  );
}

export default HomePage;
