import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom para navegação entre páginas
import { ThemeContext } from "../../context/ThemeContext"; // Importa o contexto do tema
import "./navBar.css"; // Importa os estilos CSS específicos para o componente
import ThemeToggleIcons from "../ThemeToggleIcons/ThemeToggleIcons"; // Importa o componente ThemeToggleIcons para alternar entre temas

function NavBar({ pageTitle }) {
  const { theme, toggleTheme } = useContext(ThemeContext); // Usa o hook useContext para acessar o contexto do tema
  const [menuOpen, setMenuOpen] = useState(false); // Estado local para controlar a abertura e fechamento do menu móvel

  // Função para alternar o estado do menu móvel
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      {" "}
      {/* Navbar principal com tema dinâmico */}
      <div className="navbar-content">
        {" "}
        {/* Conteúdo da barra de navegação */}
        <h1 className="page-title">{pageTitle}</h1>{" "}
        {/* Título da página atual */}
        <div className="theme-toggle">
          {" "}
          {/* Toggle de tema */}
          <input
            type="checkbox"
            className="checkbox"
            id="chk"
            onChange={toggleTheme} // Chama a função toggleTheme do contexto quando o checkbox é alterado
          />
          <label className="label" htmlFor="chk">
            {" "}
            {/* Rótulo do toggle de tema */}
            <ThemeToggleIcons theme={theme} /> {/* Ícones de toggle de tema */}
            <div className="ball"></div>{" "}
            {/* Bola para indicar o estado do toggle */}
          </label>
        </div>
        <div
          className="hamburger-menu"
          id="hamburger-menu-nav"
          onClick={handleMenuToggle}
        >
          {" "}
          {/* Ícone do menu hamburger para telas menores */}
          {/* Barras do ícone do menu hamburger */}
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        </div>
      </div>
      <ul className={`links-nav ${menuOpen ? "open" : ""}`}>
        {" "}
        {/* Lista de links de navegação */}
        <li>
          <Link to="/">Home</Link> {/* Link para a página Home */}
        </li>
        <li>
          <Link to="/projects">Projetos</Link>{" "}
          {/* Link para a página de Projetos */}
        </li>
        <li>
          <Link to="/info">Informações</Link>{" "}
          {/* Link para a página de Informações */}
        </li>
        <li>
          <Link to="/contact">Contato</Link>{" "}
          {/* Link para a página de Contato */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
