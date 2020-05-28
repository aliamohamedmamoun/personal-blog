import React, { useState } from "react";
import "./Contact.css";
import ContactItem from "../ContactItem/ContactItem";

function Contact() {
  const [contacts, setContacts] = useState([
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
  ]);
  return (
    <section id="contact">
      <h1 id="contact-header">Let's Work together...</h1>
      <p id="contact-paragraph">How do you take your coffee?</p>
      <ul id="contact-list">
        {contacts.map((contact, index) => (
          <ContactItem
            name={contact.name}
            target={contact.target}
            icon={contact.icon}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Contact;
