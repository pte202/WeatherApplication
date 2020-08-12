import React from "react";
import PropTypes from "prop-types";

import * as styles from "./TextInput.module.css";

const TextInput = ({
  itemKey,
  type,
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  valid,
  disabled,
  style,
}) => {
  let wrapperClass = styles.component;

  if ((error && error.length > 0) || !valid) {
    wrapperClass += " " + styles.inputAreaValidation;
  }

  return (
    <div className={wrapperClass} key={itemKey} style={style}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
};

export default TextInput;
