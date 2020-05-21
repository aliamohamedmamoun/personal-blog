import React from "react";

export default function Project(props) {
  return (
    <a href={props.target} target="_blank" className="project-title">
      <img src={props.image} />
      <p className="project-name">
        <span className="project-span">&#60; </span>
        {props.name}
        <span className="project-span">/></span>
      </p>
    </a>
  );
}
