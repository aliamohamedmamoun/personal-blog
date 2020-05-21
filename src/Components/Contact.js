import React, { Component } from "react";
import ContactItem from "./ContactItem";

export class Contact extends Component {
  state = {
    contacts: [
      {
        name: "Facebook",
        target: "https://www.facebook.com/freecodecamp",
        icon: "fab fa-facebook-square"
      },
      {
        name: "GitHub",
        target: "https://github.com/freecodecamp",
        icon: "fab fa-github"
      },
      {
        name: "Twitter",
        target: "https://twitter.com/freecodecamp",
        icon: "fab fa-twitter"
      },
      {
        name: "Send a mail",
        target: "mailto:someone@example.com?Subject=Hello%20again",
        icon: "fas fa-at"
      },
      { name: " Call me", target: "tel:5554280940", icon: "fas fa-mobile-alt" }
    ]
  };
  render() {
    return (
      <section id="contact">
        <h1 id="contact-header">Let's Work together...</h1>
        <p id="contact-paragraph">How do you take your coffee?</p>
        <ul id="contact-list">
          {this.state.contacts.map(contact => (
            <ContactItem
              name={contact.name}
              target={contact.target}
              icon={contact.icon}
              key={contact.name}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Contact;
