import React from "react";
import "./Project.css";
import PropTypes from "prop-types";

export default function Project(props) {
  const { name, target, image } = props;
  return (
    <a href={target} target="_blank" className="project-title">
      <img src={image} />
      <p className="project-name">
        <span className="project-span">&#60; </span>
        {name}
        <span className="project-span">/></span>
      </p>
    </a>
  );
}
Project.propType = {
  name: PropTypes.string,
  target: PropTypes.string,
  image: PropTypes.string
};
