import { useEffect, useState } from "react";
import { Home } from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <div className="noise"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
