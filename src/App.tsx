import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import { GlobalStyle } from './styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Routes />
      </header>
    </div>
  );
}

export default App;
