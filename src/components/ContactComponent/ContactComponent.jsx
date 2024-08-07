import React from "react";
import "./contact.css";

function ContactComponent() {
  return (
    <div className="page-container-contact">
      <div className="contact-container">
        <h1>Contato</h1>
        <p className="contact-item">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lucas-carneiro-dos-santos-982a97268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu Perfil
          </a>
        </p>
        <p className="contact-item">
          GitHub:{" "}
          <a
            href="https://github.com/lucascarneiro88"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meu Perfil do GitHub
          </a>
        </p>
        <p className="contact-item">E-mail: carneirolucas88@gmail.com </p>
      </div>
    </div>
  );
}

export default ContactComponent;
