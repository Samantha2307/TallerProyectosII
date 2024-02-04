import PropTypes from "prop-types";
import React from "react";
import { ButtonPrimary } from "../ButtonPrimary";
import { SearchBar } from "../SearchBar";
import "./style.css";

export const Header = ({
  property1,
  className,
  searchBarVector = "https://c.animaapp.com/8tseAcR4/img/vector-25.svg",
  vector = "https://c.animaapp.com/8tseAcR4/img/vector-22.svg",
  frameClassName,
  ellipse = "https://c.animaapp.com/8tseAcR4/img/ellipse-14-1@2x.png",
  hasFrame = true,
}) => {
  return (
    <div className={`header ${className}`}>
      <SearchBar
        className="search-bar-instance"
        divClassName={`${property1 === "default" && "class-7"}`}
        vector={searchBarVector}
      />
      <div className="frame">
        <img
          className="img"
          alt="Vector"
          src={property1 === "variant-2" ? vector : "https://c.animaapp.com/8tseAcR4/img/vector-24.svg"}
        />
        <div className={`div-wrapper ${frameClassName}`}>
          <div className="div">2</div>
        </div>
      </div>
      <div className={`frame-2 ${property1}`}>
        {property1 === "default" && (
          <>
            <ButtonPrimary
              className="button-primary-instance"
              divClassName="instance-node"
              empresa="eco"
              text="Iniciar Sesión"
            />
            <div className="button-secondary">
              <div className="boton">Registrarse</div>
            </div>
          </>
        )}

        {property1 === "variant-2" && (
          <div className="frame-3">
            <img className="ellipse" alt="Ellipse" src={ellipse} />
            {hasFrame && (
              <img className="frame-4" alt="Frame" src="https://c.animaapp.com/8tseAcR4/img/frame-2699.svg" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  searchBarVector: PropTypes.string,
  vector: PropTypes.string,
  ellipse: PropTypes.string,
  hasFrame: PropTypes.bool,
};
