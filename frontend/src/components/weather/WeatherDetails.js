import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import * as helperFunctions from "../../utils/helperFunctions";
import styles from "./WeatherDetails.module.css";

const WeatherDetails = ({ data, className }) => {
  let weatherDetailsClasses = styles.container + " " + className;

  return (
    <div className={weatherDetailsClasses}>
      {Object.keys(data).map((property, index) => {
        return property === "temperature" ? (
          Object.keys(data[property]).map((propertyEntry, entryIndex) => {
            return (
              <TextInput
                key={index + "-" + entryIndex}
                type="text"
                name={propertyEntry}
                label={helperFunctions.formatCammelCaseProperties(
                  propertyEntry,
                  true
                )}
                value={data[property][propertyEntry].toString()}
                disabled={true}
                valid={true}
              />
            );
          })
        ) : (
          <TextInput
            key={index}
            type="text"
            name={property}
            label={helperFunctions.formatCammelCaseProperties(property, true)}
            value={data[property].toString()}
            disabled={true}
            valid={true}
          />
        );
      })}
    </div>
  );
};

WeatherDetails.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default WeatherDetails;
