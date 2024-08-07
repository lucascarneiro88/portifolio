import React from "react";
import ProjectCard from "../../components/ProjectCardComponent/ProjectCard"; // Importa o componente de cartão de projeto
import NavBar from "../../components/NavBarComponent/NavBar"; // Importa o componente de barra de navegação
import projectsData from "../../data/projectsData"; // Importa os dados dos projetos

function Projects() {
  return (
    <div>
      <NavBar pageTitle="Meus Projetos" /> {/* Renderiza a barra de navegação com o título "Meus Projetos" */}
      <div className="card-container"> {/* Container para os cartões de projeto */}
        {projectsData.map((project) => ( // Mapeia os dados dos projetos para renderizar cartões individuais
          <ProjectCard key={project.id} project={project} /> // Renderiza um cartão de projeto para cada item dos dados
        ))}
      </div>
    </div>
  );
}

export default Projects;
