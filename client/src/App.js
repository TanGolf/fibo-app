import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import otherPage from './otherPage'
import Fib from './Fib'
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to="/">Home</Link>
            <Link to="/otherPage">Other Page</Link>
          </header>
          <Route exact path = "/" component={Fib}/>
          <Route path = "/otherPage" component={otherPage}/>
        </div>
    </Router>
  );
}

export default App;
