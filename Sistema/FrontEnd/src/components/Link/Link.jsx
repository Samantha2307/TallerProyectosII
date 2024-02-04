import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Link = ({
  empresa,
  stateProp,
  className,
  group = "https://c.animaapp.com/8tseAcR4/img/group-2640-58@2x.png",
  text = "Cursos",
  divClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    empresa: empresa || "acm",
    state: stateProp || "hover-2",
  });

  return (
    <div
      className={`link ${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`icon state-${state.state} ${state.empresa}`}>
        <img
          className="group"
          alt="Group"
          src={
            state.state === "active"
              ? "https://c.animaapp.com/8tseAcR4/img/group-2640-58@2x.png"
              : state.state === "default"
              ? group
              : state.empresa === "ghamec" && ["hover-2", "hover"].includes(state.state)
              ? "https://c.animaapp.com/8tseAcR4/img/group-2640-11@2x.png"
              : state.empresa === "eco" && ["hover-2", "hover"].includes(state.state)
              ? "https://c.animaapp.com/8tseAcR4/img/group-2640-7@2x.png"
              : "https://c.animaapp.com/8tseAcR4/img/group-2640-15@2x.png"
          }
        />
      </div>
      <div
        className={`cursos state-0-${state.state} empresa-${state.empresa} ${
          ["default", "hover"].includes(state.state) ? divClassName : undefined
        }`}
      >
        {text}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.empresa === "acm" && state.state === "active") {
    switch (action) {
      case "mouse_enter":
        return {
          empresa: "acm",
          state: "hover-2",
        };
    }
  }

  if (state.empresa === "acm" && state.state === "hover-2") {
    switch (action) {
      case "mouse_leave":
        return {
          empresa: "acm",
          state: "active",
        };
    }
  }

  if (state.empresa === "acm" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          empresa: "acm",
          state: "hover",
        };
    }
  }

  if (state.empresa === "acm" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          empresa: "acm",
          state: "default",
        };
    }
  }

  if (state.empresa === "ghamec" && state.state === "active") {
    switch (action) {
      case "mouse_enter":
        return {
          empresa: "ghamec",
          state: "hover-2",
        };
    }
  }

  if (state.empresa === "ghamec" && state.state === "hover-2") {
    switch (action) {
      case "mouse_leave":
        return {
          empresa: "ghamec",
          state: "active",
        };
    }
  }

  if (state.empresa === "ghamec" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          empresa: "ghamec",
          state: "hover",
        };
    }
  }

  if (state.empresa === "ghamec" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          empresa: "ghamec",
          state: "default",
        };
    }
  }

  if (state.empresa === "eco" && state.state === "active") {
    switch (action) {
      case "mouse_enter":
        return {
          empresa: "eco",
          state: "hover-2",
        };
    }
  }

  if (state.empresa === "eco" && state.state === "hover-2") {
    switch (action) {
      case "mouse_leave":
        return {
          empresa: "eco",
          state: "active",
        };
    }
  }

  if (state.empresa === "eco" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          empresa: "eco",
          state: "hover",
        };
    }
  }

  if (state.empresa === "eco" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          empresa: "eco",
          state: "default",
        };
    }
  }

  return state;
}

Link.propTypes = {
  empresa: PropTypes.oneOf(["ghamec", "acm", "eco"]),
  stateProp: PropTypes.oneOf(["default", "hover-2", "active", "hover"]),
  group: PropTypes.string,
  text: PropTypes.string,
};
