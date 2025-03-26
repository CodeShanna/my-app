import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tübingen" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://shannajonesportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shanna Jones
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/CodeShanna?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on Netlify.
        </footer>
        <br />
      </div>
    </div>
  );
}