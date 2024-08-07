import { createContext, useState } from "react";

// Criação do contexto ThemeContext
export const ThemeContext = createContext();

// Componente ThemeProvider que fornece o contexto de tema para toda a aplicação
export const ThemeProvider = ({ children }) => {
    // Estado local para controlar o tema atual, iniciando com "light" por padrão
    const [theme, setTheme] = useState("light");

    // Função toggleTheme alternará entre "light" e "dark" ao ser chamada
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Retorna o provedor de contexto ThemeContext.Provider, que fornece o estado do tema e a função toggleTheme para os componentes filhos
    return ( 
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
