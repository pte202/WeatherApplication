import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import * as helperFunctions from "../../utils/helperFunctions";
import styles from "./WeatherForm.module.css";

const WeatherForm = ({ data, onChange, onClick, errors = {}, loading }) => {
  return (
    <div className={styles.container}>
      {Object.keys(data).map((property, index) => {
        return (
          <TextInput
            key={index}
            type="text"
            name={property}
            placeholder={property === "cityName" ? "London" : ""}
            label={helperFunctions.formatCammelCaseProperties(property, true)}
            value={data[property]}
            onChange={onChange}
            error={errors[property]}
            valid={!errors.hasOwnProperty(property)}
            style={{ marginBottom: 20 }}
          />
        );
      })}
      <Button
        type="button"
        text="Submit"
        className={"btnPrimary"}
        onClick={onClick}
        disabled={loading ? "disabled" : ""}
      />
    </div>
  );
};

WeatherForm.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.object,
  loading: PropTypes.bool,
};

export default WeatherForm;
