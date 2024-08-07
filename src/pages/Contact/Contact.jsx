import React from "react";
import ContactComponent from "../../components/ContactComponent/ContactComponent";
import NavBar from "../../components/NavBarComponent/NavBar";

function Contact() {
  return (
    <div>
      <NavBar pageTitle="Meus Contatos" />{" "}
      {/* Barra de navegação com título "Meus Contatos" */}
      <ContactComponent />{" "}
      {/* Componente que renderiza o formulário de contato */}
    </div>
  );
}

export default Contact;
