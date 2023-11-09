import LinkedinLogo from "../assets/LinkedIn-Logos/In-Blue-128.png";
import GitLogoWhite from "../assets/github-mark/github-mark-white.svg";
import GitLogoBlack from "../assets/github-mark/github-mark-black.svg";
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { DarkModeToggle } from "../components/darkModeToggle";
import { weather } from "../utils/apiRequest";
import { MainBackground } from "../components/mainBackground";
export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await weather();
      setTemperature(response.temperature);
      setIcon(response.icon);
    };

    fetchData();
  }, []);
  return (
    <>
      <header className={theme}>
        <p>lauriane sablon</p>
        <DarkModeToggle onChange={toggleTheme} />
      </header>
      <main>
        <MainBackground />
        <div className="banner">
          <div className="red-square"> 
          <div className="banner-text">
            <h1><span>FRONT</span>END <span>DEVEL</span>OPPER</h1>
            <h2><span>lauriane sab</span>lon</h2>
          </div>
          </div>
          <div className="banner-links" >
            <a href="https://www.linkedin.com/in/lauriane-sablon/" target="_blank"><img src={LinkedinLogo} alt="linkedin" /></a>
            <a href="https://github.com/laurianesablon/" target="_blank"><img src={theme === "dark" ? GitLogoWhite : GitLogoBlack} alt="github" /></a>
            <p>about me</p>
            <p>projects</p>
            <p>contact</p>
          </div>
          
        </div>
        <div className="about-me">
          <h3>ABOUT ME</h3>
          <p className="about-me-text">
            After studying in high-school for history, geography and social
            studies, I decided to <span>study urbanism and geography</span>{" "}
            become a self-tought frontend developer. I am a nerd that loves to
            learn some new programming skills. Started with some basic HTML, CSS
            and JavaScript. I am now a master in React. I also enjoy programming
            in Python and C.
          </p>
        </div>
      </main>
    </>
  );
}
