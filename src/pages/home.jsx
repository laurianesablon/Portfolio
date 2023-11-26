import LinkedinLogo from "../assets/LinkedIn-Logos/In-Blue-128.png";
import GitLogoWhite from "../assets/github-mark/github-mark-white.svg";
import GitLogoBlack from "../assets/github-mark/github-mark-black.svg";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { DarkModeToggle } from "../components/darkModeToggle";
import { Card } from "../components/card";
import kasaImg from "../assets/img/kasa.png";
import MetropleImg from "../assets/img/MetropleImg.png";
import SophieBluelImg from "../assets/img/SophieBluel.webp";
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
                CSS and JavaScript. I am now <span>a master</span> great at
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
              theme={theme}
              technologies={["React", "Sass"]}
              githubUrl={"https://github.com/laurianesablon/Kasa"}
              websiteUrl={"https://laurianesablon.github.io/Kasa/"}
            />
            <Card
              title="Un-named Parisian Subway project"
              imageUrl={MetropleImg}
              content="I want to do a game about the parisian metro system. Either a game where the user has to find as much subway stations as they can. Or a game where the user has to find the best itinerary to go from one station to an other. Maybe both? I'll see. This is my first real autonomous React project, i cannot wait to see how it will turn out."
              technologies={["React", "Sass", "D3"]}
              githubUrl={"https://github.com/laurianesablon/metrople"}
              theme={theme}
            />
            <Card
              title="Sophie Bluel's portfolio"
              imageUrl={SophieBluelImg}
              content="Prototype of a portfolio for a french artist. It was done during my Openclassrooms online course. I learned how to use API with this project and it was my first big JS project"
              technologies={["JS", "HTML", "Sass"]}
              githubUrl={"https://github.com/laurianesablon/Porfolio-Sophie-Bluel"}
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
