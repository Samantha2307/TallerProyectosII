import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonPrimary = ({ empresa, className, divClassName, text = "Boton" }) => {
  return (
    <div className={`button-primary empresa-2-${empresa} ${className}`}>
      <div className={`boton-2 ${divClassName}`}>{text}</div>
    </div>
  );
};

ButtonPrimary.propTypes = {
  empresa: PropTypes.oneOf(["ghamec", "acm", "eco"]),
  text: PropTypes.string,
};