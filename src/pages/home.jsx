import LinkedinLogo from "../assets/LinkedIn-Logos/In-Blue-128.png";
import GitLogoWhite from "../assets/github-mark/github-mark-white.svg";
import GitLogoBlack from "../assets/github-mark/github-mark-black.svg";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { DarkModeToggle } from "../components/darkModeToggle";
import { Card } from "../components/card";
import kasaImg from "../assets/img/kasa.png";
import kasaVideo from "../assets/videos/KasaVideo.mp4";
import { Contact } from "../components/contact";
import Lauriane from "../assets/img/Lauriane.webp";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

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
                <span>FRONT</span>END <span>DEVEL</span>OPER
              </h1>
              <h2>
                <span>lauriane sab</span>lon
              </h2>
            </div>
          </div>
          <div className="banner-links ">
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
            <a className={theme} href="#aboutme">
              <p>about me</p>
            </a>
            <a className={theme} href="#projects">
              <p>projects</p>
            </a>
            <a className={theme} href="#contact">
              <p>contact</p>
            </a>
          </div>
        </div>
        <div id="aboutme" className="about-me">
          <h3>ABOUT ME</h3>
          <div className="about-me-content">
            <div className="about-me-text">
              <p className={theme}>
                After studying in high school for history, geography and social
                studies, I decided to <span>study urbanism and geography</span>{" "}
                become a self-taught frontend developer. I am a nerd who loves
                to learn new programming skills. Started with some basic HTML,
                CSS and JavaScript. I am now <span>a master</span> mastering in
                React. I also enjoy programming in Python and C.{" "}
                <span>This is not true nobody enjoys C programming</span>
              </p>
            </div>
            <img src={Lauriane} alt="Lauriane" />
          </div>
        </div>

        <div id="projects" className="projects">
          <h3>MY PROJECTS</h3>
          <div className="projects-container">
            <Card
              title="Kasa"
              imageUrl={kasaImg}
              content="Prototype of a rental accomodation app with React. It was done during my Openclassrooms online course. This was my first React project and I learned a lot about React, SCSS and manipulating data."
              videoUrl={kasaVideo}
              theme={theme}
              technologies={["React", "Sass"]}
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
        <div id="contact" className="contact">
          <h3>CONTACT ME!</h3>
          <Contact />
        </div>
        <footer>
          <p>© 2023 Lauriane Sablon, All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
