import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

export default function Header({ text, children, className }) {
  let headerClassNames = styles.mainHeader + " " + className;

  return (
    <div className={headerClassNames}>
      <h2>{text}</h2>
      <div className={styles.mainHeaderButton}>{children}</div>
    </div>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object,
  className: PropTypes.string,
};
