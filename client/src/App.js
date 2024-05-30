import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
    
      <div className="App">
        <header className="App-header">
          <div className="title_text">FUNDS TRACKER</div>
          <button className="register_Button"><a href="/signup">Sign Up!</a></button>
          <button className="login_Button">login</button>
          
        </header>
      </div>
      <Router>
        
      </Router>
    </BrowserRouter>
  );
}

export default App;
