import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css";

function Error() {
  return (
    <div className="error-container">
      <h1>Página não encontrada</h1>
      <p className='p_error_page'>Desculpe, a página que você está tentando acessar não existe.</p>
      <Link to="/" className="error-link">Voltar para a página inicial</Link> {/* Link para retornar à página inicial */}
    </div>
  );
}

export default Error;
