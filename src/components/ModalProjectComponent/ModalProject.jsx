import React from "react";
import "./modal.css"; // Importa estilos CSS específicos para o modal

function ModalProject({ isOpen, setModalOpen, additionalInfo }) {
  // Verifica se o modal não está aberto ou se não há informações adicionais
  if (!isOpen || !additionalInfo) {
    return null; // Retorna nulo para não renderizar nada se as condições não forem atendidas
  }

  // Extrai as informações adicionais do objeto additionalInfo
  const { date, author, bibliotecas, tecnologias } = additionalInfo;

  return (
    <div className="backgroud-modal"> {/* Componente de fundo escuro para o modal */}
      <div className="modal-style"> {/* Estilo do modal */}
        <div>
<div>
  <p className="p_modal">
    <span className="p_modal_titulo">Data:</span> {date}
  </p>
  <p className="p_modal">
    <span className="p_modal_titulo">Autor:</span> {author}
  </p>
  <p className="p_modal">
    <span className="p_modal_titulo">Bibliotecas:</span> {bibliotecas}
  </p>
  <p className="p_modal">
    <span className="p_modal_titulo">Tecnologias:</span> {tecnologias}
  </p>
</div>

        </div>
        <button className="buton_modal" onClick={setModalOpen}>x</button> {/* Botão para fechar o modal */}
      </div>
    </div>
  );
}

export default ModalProject;
