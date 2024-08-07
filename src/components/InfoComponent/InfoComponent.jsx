import React from 'react';
import "./info.css";

function InfoComponent({ pageTitle }) {
  return (
    <div className='page-container-info'>
      <div className='info-container'>
        <section className='foto-perfil'>
          <img src="/img/foto-perfil/foto-perfil.jpg" alt="Minha Foto" />
        </section>
        
        <section className='text-section'>
          <h2>Habilidades Técnicas</h2>
          <ul class="custom-marker">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>C#</li>
              <li>.NET</li>
              <li>Python</li>
              <li>SQL Server</li>
              <li>My SQL</li>
              <li>GitHub</li>
              <li>Docker</li>
              <li>Cloud Computing</li>
              <li>Clean Code</li>
              <li>Figma</li>
          </ul>
        </section>
        
        <section className='text-section'>
          <h2>Documentos</h2>
          <ul class="custom-marker">
            <li><a href="/caminho/para/meu-curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a></li>
            <li><a href="/caminho/para/meu-certificado.pdf" target="_blank" rel="noopener noreferrer">Certificado de Curso Fullstack</a></li>
          </ul>
        </section>
        
        <section className='text-section'>
          <h2>Graduação em Análise e Desenvolvimento de Sistemas</h2>
          <ul class="custom-marker">
          <li>Faculdade UNINTER.</li>
          </ul>
        </section>
        
      </div>
    </div>
  );
}

export default InfoComponent;
