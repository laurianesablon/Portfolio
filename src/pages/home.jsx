import LinkedinLogo from "../assets/LinkedIn-Logos/In-Blue-128.png";
import GitLogo from "../assets/github-mark/github-mark-white.svg";
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { DarkModeToggle } from "../components/darkModeToggle";
import { weather} from "../utils/apiRequest";
export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);

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
    <header>
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
        <h3>about me</h3>
        <p>hey! um, i use my nerdyness to browse the internet looking to build some codeing skills.  </p>
      </div>

    </main>
    </>
  )
}