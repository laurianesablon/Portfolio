import LinkedinLogo from "./assets/LinkedIn-Logos/In-White-128.png";
import GitLogo from "./assets/github-mark/github-mark-white.png";
function App() {
  return (
    <div className="App">
      <div class="noise"></div>
      <header>
        <a
          href="https://github.com/laurianesablon"
          target="_blank"
          className="header-gitLogo"
        >
          <img src={GitLogo} alt="GitHub Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/lauriane-sablon/"
          target="_blank"
          className="header-linkedinLogo"
        >
          <img src={LinkedinLogo} alt="LinkedIn Logo" />
        </a>

        <div className="header-name">
          <h1>LAURIANE</h1>
          <h1>SABLON</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
