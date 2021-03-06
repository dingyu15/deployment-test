import logo from './logo.svg';
import './App.css';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          // href={config.baseURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h1>Base URL: {config.baseURL}</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
