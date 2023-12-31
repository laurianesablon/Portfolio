import { useEffect, useState } from "react";
import { Home } from "./pages/home";
import { createContext } from "react";
import { MainBackground } from "./components/mainBackground";

export const ThemeContext = createContext(null);
function App() {
  const localStorageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localStorageTheme || "dark");
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <div className="noise"></div>
        {/* <MainBackground /> */}
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
