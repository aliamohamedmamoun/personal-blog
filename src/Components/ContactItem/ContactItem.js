import React from "react";
import "./ContactItem.css";
import PropTypes from "prop-types";

export default function ContactItem({ target, name, icon }) {
  return (
    <li className="contact-item">
      <a href={target} target="_blank">
        <i className={icon}></i>
        {name}
      </a>
    </li>
  );
}

ContactItem.propType = {
  target: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string
};
