// Info.jsx
import React from "react";
import InfoComponent from "../../components/InfoComponent/InfoComponent"; // Importa o componente de informações
import NavBar from "../../components/NavBarComponent/NavBar"; // Importa o componente de barra de navegação

function Info() {
  return (
    <div>
      <NavBar pageTitle="Minhas informações" /> {/* Renderiza a barra de navegação com o título "Minhas informações" */}
      <InfoComponent /> {/* Renderiza o componente de informações */}
    </div>
  );
}

export default Info;
