import LinkedinLogo from "../assets/LinkedIn-Logos/In-Blue-128.png";
import GitLogo from "../assets/github-mark/github-mark-white.svg";
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
      <header className="header">
        <MainBackground theme={theme} />
        <div className="column-1">
          <p className="location">PARIS,FRANCE {temperature}°C </p>
          <div>
            <div className="social-media-links">
              <a
                href="https://github.com/laurianesablon"
                target="_blank"
                className="gitLogo"
              >
                <img src={GitLogo} alt="GitHub Logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/lauriane-sablon/"
                target="_blank"
                className="linkedinLogo"
              >
                <img src={LinkedinLogo} alt="LinkedIn Logo" />
              </a>
            </div>

            <div className="name">
              <h1>LAURIANE</h1>
              <h1>SABLON</h1>
            </div>
            <h2>Frontend Developer.</h2>
          </div>
        </div>
        {/* <div className="mouse-container">
          <div className="mouse"></div>
          <div className="scroll">Scroll Down</div>
        </div> */}

        <div className="column-2">
          <DarkModeToggle onChange={toggleTheme} />
          <div>
            <a>
              <p>about me</p>
            </a>
            <a>
              <p>projects</p>
            </a>
            <a>
              <p>contact</p>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="about-me">
          <h3>ABOUT ME</h3>
          <p className="about-me-text">
            After studying in high-school for history, geography and social
            studies, I obviously decided to become a self-tought frontend
            developer... 
            I love using my nerdyness to learn about some new
            programming skills.
          </p>
        </div>
      </main>
    </>
  );
}
