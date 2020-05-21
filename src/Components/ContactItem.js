import React from "react";

export default function ContactItem(props) {
  return (
    <li className="contact-item">
      <a href={props.target} target="_blank">
        <i className={props.icon}></i>
        {props.name}
      </a>
    </li>
  );
}
