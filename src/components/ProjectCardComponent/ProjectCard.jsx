import React, { useState } from "react";
import "./project-card.css"; // Importa estilos CSS específicos para o componente
import ModalProject from "../ModalProjectComponent/ModalProject"; // Importa o componente ModalProject para exibir detalhes adicionais do projeto

function ProjectCard({ project }) {
  const [openModal, setOpenModal] = useState(false); // Estado local para controlar a abertura do modal

  // Função para abrir o modal
  const handleModalOpen = () => {
    setOpenModal(true);
  };

  // Função para fechar o modal
  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="page-container"> {/* Container principal */}
      {/* Renderiza o modal somente se openModal for true */}
      {openModal && (
        <ModalProject
          isOpen={openModal}
          setModalOpen={handleModalClose}
          project={project}
          additionalInfo={project.additionalInfo}
        ></ModalProject>
      )}

      <div className="project-card-container"> {/* Container do cartão do projeto */}
        <div className="image-container"> {/* Container da imagem do projeto */}
          <img src={project.image} alt={project.alt} /> {/* Imagem do projeto */}
        </div>
        <div className="card-content"> {/* Conteúdo do cartão */}
          <h2  id="titulo_Projeto">{project.title}</h2> {/* Título do projeto */}
          <p id="description">{project.description}</p> {/* Descrição do projeto */}
          <div className="stacks-container"> {/* Container das tecnologias utilizadas */}
            {/* Mapeia e exibe os logos das tecnologias */}
            {project.stacks &&
              Array.isArray(project.stacks) &&
              project.stacks.map((stack, index) => (
                <img key={index} src={stack} alt="Logo da tecnologia" />
              ))}
          </div>
          <div className="btn-container"> {/* Container dos botões */}
            {/* Botão para deploy do projeto */}
            <button className="btn">
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy
              </a>
            </button>
            {/* Botão para acesso ao repositório no GitHub */}
            <button className="btn">
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
            {/* Botão "Ver mais" para abrir o modal */}
            <button className="btn-ver-mais" onClick={handleModalOpen}>
              Ver mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
