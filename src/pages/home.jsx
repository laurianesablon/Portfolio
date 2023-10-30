import LinkedinLogo from "../assets/LinkedIn-Logos/In-White-128.png";
import GitLogo from "../assets/github-mark/github-mark-white.png";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { DarkModeToggle } from "../components/darkModeToggle";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => {
    toggleTheme(); 
  };
  return (
    <header>
      <div className="column-1">
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
        <DarkModeToggle onChange={handleToggleTheme} />
      </div>
    </header>
  );
}
