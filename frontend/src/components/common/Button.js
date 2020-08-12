import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

export default function Button({
  type,
  text,
  className,
  style,
  disabled,
  onClick,
}) {
  return (
    <button
      className={
        disabled === "disabled" ? styles.btnDisabled : styles[className]
      }
      style={style}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.string,
  onClick: PropTypes.func,
};
