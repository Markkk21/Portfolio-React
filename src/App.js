import React, { useEffect } from "react";
import { Box } from '@material-ui/core';

import './App.css';
import './Components/css/styles.css';

import AboutMePage from './Components/Pages/AboutMe';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Box> 
            <Dashboard />
            <Routes>
            <Route path="/about-me" element={<AboutMePage />} />
            </Routes>
          </Box>
        </header>
        </div>
    </Router>
  );
}

export default App;
