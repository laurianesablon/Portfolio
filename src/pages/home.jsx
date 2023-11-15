import LinkedinLogo from "../assets/LinkedIn-Logos/In-Blue-128.png";
import GitLogoWhite from "../assets/github-mark/github-mark-white.svg";
import GitLogoBlack from "../assets/github-mark/github-mark-black.svg";
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { DarkModeToggle } from "../components/darkModeToggle";
import { weather } from "../utils/apiRequest";
import { MainBackground } from "../components/mainBackground";
import { Card } from "../components/card";
import kasaImg from "../assets/img/kasa.png";
import kasaVideo from "../assets/videos/KasaVideo.mp4";

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
        <div className="banner">
          <div className="red-square">
            <div className="banner-text">
              <h1>
                <span>FRONT</span>END <span>DEVEL</span>OPPER
              </h1>
              <h2>
                <span>lauriane sab</span>lon
              </h2>
            </div>
          </div>
          <div className="banner-links">
            <a
              href="https://www.linkedin.com/in/lauriane-sablon/"
              target="_blank"
            >
              <img src={LinkedinLogo} alt="linkedin" />
            </a>
            <a href="https://github.com/laurianesablon/" target="_blank">
              <img
                src={theme === "dark" ? GitLogoWhite : GitLogoBlack}
                alt="github"
              />
            </a>
            <p>about me</p>
            <p>projects</p>
            <p>contact</p>
          </div>
        </div>
        <div className="about-me">
          <h3>ABOUT ME</h3>
          <div className="about-me-text">
            <p className={theme}>
              After studying in high-school for history, geography and social
              studies, I decided to <span>study urbanism and geography</span>{" "}
              become a self-tought frontend developer. I am a nerd that loves to
              learn some new programming skills. Started with some basic HTML,
              CSS and JavaScript. I am now <span>a master</span> mastering in React. I also enjoy
              programming in Python and C.
            </p>
          </div>
        </div>

        <div id="projects" className="projects">
          <h3>PROJECTS</h3>
          <div className="projects-container">
            <Card
              title="Kasa"
              imageUrl={kasaImg}
              content="Developpement of a real estate application with React"
              videoUrl={kasaVideo}
              theme={theme}
              technologies={["React", "Sass", "Redux"]}
            />
            <Card
              title="Kasa"
              imageUrl={kasaImg}
              content="Developpement d'un application de location immobilière avec React"
              theme={theme}
            />
            <Card
              title="Kasa"
              imageUrl={kasaImg}
              content="Developpement d'un application de location immobilière avec React"
              theme={theme}
            />
          </div>
        </div>
      </main>
    </>
  );
}
