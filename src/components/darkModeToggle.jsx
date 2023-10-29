import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function DarkModeToggle({ onChange }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    const mode = !isDarkMode;
    setIsDarkMode(mode);
    localStorage.setItem('darkMode', mode);
    onChange(mode); // Call the onChange prop with the updated mode
  };

  return (
    <div className="dark-mode-toggle" onClick={handleToggle}>
      <div className={`sun sun-logo ${isDarkMode ? "animate-sun" : ""}`}>
        <FontAwesomeIcon icon={faSun} />
      </div>
      <div className={`moon moon-logo ${isDarkMode ? "animate-moon" : ""}`}>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  );
}