import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://fullstack.edu.vn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in F8 fullstack course
        </a>
      </header>
    </div>
  );
}

export default App;
