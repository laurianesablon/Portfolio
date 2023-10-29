import LinkedinLogo from "../assets/LinkedIn-Logos/In-White-128.png";
import GitLogo from "../assets/github-mark/github-mark-white.png";
import { ThemeContext } from '../App';
import { useContext} from "react";
import { DarkModeToggle } from "../components/darkModeToggle";

export function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  const handleToggleTheme = () => {
    toggleTheme(); // Call the toggleTheme function to toggle the theme
    console.log("Theme toggled");
  };
  return (
    <main>
      <div className="column-1">
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

        <div className="name">
          <h1>LAURIANE</h1>
          <h1>SABLON</h1>
        </div>
        <h2>Frontend Developer.</h2>
      </div>

      <div className="column-2">
        <DarkModeToggle onChange={handleToggleTheme} />
        <p>about me</p>
        <p>projects</p>
        <p>contact</p>
      </div>
    </main>
  );
}
