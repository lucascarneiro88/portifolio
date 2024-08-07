import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
import "./index.css";

import Home from "../src/pages/Home/Home.jsx"
import Info from "./pages/Info/Info.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Error from "./pages/Error/Error.jsx";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route
          path="/info"
          element={
            <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
              <Info />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
              <Contact />
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
              <Projects />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
              <Error />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
