import React, { useState, useEffect } from "react";

import './App.css';
import './Components/css/styles.css';
import './Components/css/font.css'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Components/Pages/Dashboard';
import DrawerAppBar from './Components/Layout/Navbar';
import AboutMePage from './Components/Pages/About/AboutMe';
import ProjectsPage from './Components/Pages/Project/Projects';
import ResumePage from './Components/Pages/Resume/Resume';
import QueueVistaDetails from './Components/Pages/Project/QueueVista/QueueVistaDetails';
import Footer from './Components/Layout/Footer';
import Preloader from './Components/Layout/Pre';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      
      {/* Loading Screen */}
      <Preloader load={load}/>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          
          {/* Navbar */}
          <DrawerAppBar/> 
            
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Portfolio-React" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/queuevista-details" element={<QueueVistaDetails />} />
            </Routes>

          {/* Footer */}
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
