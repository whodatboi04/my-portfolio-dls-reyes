import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import Portfolio from './_portfolio/portfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Portfolio />
    </Router>
  )
}

export default App
