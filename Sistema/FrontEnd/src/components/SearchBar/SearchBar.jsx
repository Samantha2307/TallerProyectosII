import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SearchBar = ({
  className,
  vector = "https://c.animaapp.com/8tseAcR4/img/vector-21.svg",
  divClassName,
}) => {
  return (
    <div className={`search-bar ${className}`}>
      <img className="vector" alt="Vector" src={vector} />
      <div className={`text-wrapper ${divClassName}`}>Buscar</div>
    </div>
  );
};

SearchBar.propTypes = {
  vector: PropTypes.string,
};
