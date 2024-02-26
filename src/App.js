import logo from './logo.svg';
import './App.css';

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "testid.c9s268qmu83p.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "data_for_7?",
  database: 'insite_spec_test'
});


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
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
