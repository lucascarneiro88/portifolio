import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./home.css"; 
import About from '../../components/AboutComponent/About';

function Home() {
  // Estado para controlar o texto animado
  const [text] = useTypewriter({
    words: ["Desenvolvedor fullstack"], // Palavras exibidas na animação de datilografia
    loop: { loopCount: 1 }, // Configuração para datilografar apenas uma vez
    typeSpeed: 120, // Velocidade de datilografia (milissegundos por caractere)
    deleteSpeed: 80, // Velocidade de deleção (milissegundos por caractere)
  });

  // Estado para controlar a abertura do menu hambúrguer
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o estado do menu hambúrguer
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="home-container">
      {" "}
      {/* Container principal da página */}
      <div className="meu-logo">
        <img
          src="/meu-logo-portifolio.png"
          alt="logo portifólio desenvolvedor"
        />
      </div>
      <nav className="navBar-home">
        <div className="hamburger-menu-home" onClick={handleMenuToggle}>
          {/* Ícone do menu hambúrguer para dispositivos móveis */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`links-home ${menuOpen ? "open" : ""}`} id="link-home">
          {/* Lista de links para navegação principal */}
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/info">Informações</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <section>
        {/* Título principal da página */}
        <h1 className="nome">Lucas Carneiro dos Santos</h1>
        {/* Texto animado com efeito de datilografia */}
        <h2 className="stack">
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </h2>
        {/* Logotipo do GitHub */}
        <div className="github-logo">
          <a
            href="https://github.com/lucascarneiro88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github-logo"
              src="./img/logos-redes-sociais/logo-github.png"
              alt="logo do github"
            />
          </a>
        </div>
        {/* Logotipo do LinkedIn */}
        <div className="linkedin-logo">
          <a
            href="https://www.linkedin.com/in/lucas-carneiro-dos-santos-982a97268/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="linkedin-logo"
              src="./img/logos-redes-sociais/logo-linkedin.png"
              alt="logo do linkedin"
            />
          </a>
        </div>
      </section>
      <aside>
        {/* Componente de descrição sobre o desenvolvedor */}
        <div className="about">
          <About />
        </div>
        {/* Logotipo da linguagem C# */}
        <div className="logo-csharp">
          <img src="/img/logo-stacks/logo-csharp.png" alt="logo stack csharp" />
        </div>
        {/* Logotipo da biblioteca React */}
        <div className="logo-react">
          <img src="/img/logo-stacks/logo-react.png" alt="logo stack react" />
        </div>
        {/* Logotipo da linguagem JavaScript */}
        <div className="logo-js">
          <img src="/img/logo-stacks/logo-js.png" alt="logo stack java sript" />
        </div>
      </aside>
    </main>
  );
}

export default Home;
