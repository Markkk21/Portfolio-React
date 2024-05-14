import React, { useEffect } from "react";
import { Box } from '@material-ui/core';

import './App.css';
import './Components/css/styles.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Components/Pages/Dashboard';
import DrawerAppBar from './Components/Layout/Navbar';
import AboutMePage from './Components/Pages/AboutMe';
import ProjectsPage from './Components/Pages/Projects';
import ResumePage from './Components/Pages/Resume';
import QueueVistaDetails from './Components/Pages/QueueVista/QueueVistaDetails';

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
          <DrawerAppBar/> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/queuevista-details" element={<QueueVistaDetails />} />
            </Routes>
          </header>
          </div>
    </Router>
  );
}

export default App;
