import React from 'react';
import "./themeToggleIcons.css";

function ThemeToggleIcons() {
  return (
    <>
      {/* Ícone da Lua para o tema escuro */}
      <img className="lua" src="/img/icon-toggle-theme/lua.png" alt="Lua" />

      {/* Ícone do Sol para o tema claro */}
      <img className="sol" src="/img/icon-toggle-theme/sol.png" alt="Sol" />
    </>
  );
}

export default ThemeToggleIcons;
