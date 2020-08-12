import React from "react";
import styles from "./NotFoundPage.module.css";

import Header from "../common/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header text={"Not Found"} className={styles.header} />
      <div className={styles.body}>
        <p>We are sorry, but the page you have requested cannot be found!</p>
      </div>
    </>
  );
}
