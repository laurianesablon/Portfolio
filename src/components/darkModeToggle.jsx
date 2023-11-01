import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function DarkModeToggle({ onChange }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    onChange(newTheme);
  };

  return (
    <div className="dark-mode-toggle" onClick={handleToggle}>
      <div className={`sun sun-logo ${theme === 'dark' ? 'animate-sun' : ''}`}>
        <FontAwesomeIcon icon={faSun} />
      </div>
      <div className={`moon moon-logo ${theme === 'dark' ? 'animate-moon' : ''}`}>
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  );
}