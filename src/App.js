import React, { useState, useEffect } from "react";

import './App.css';
import './Components/css/styles.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './Components/Pages/Dashboard';
import DrawerAppBar from './Components/Layout/Navbar';
import AboutMePage from './Components/Pages/AboutMe';
import ProjectsPage from './Components/Pages/Projects';
import ResumePage from './Components/Pages/Resume';
import QueueVistaDetails from './Components/Pages/QueueVista/QueueVistaDetails';
import Footer from './Components/Layout/Footer';
import Preloader from './Components/Layout/Pre';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <Preloader load={load}/>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <DrawerAppBar/> 
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Portfolio-React" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about-me" element={<AboutMePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/queuevista-details" element={<QueueVistaDetails />} />
            </Routes>
            <Footer/>
          </div>
    </Router>
  );
}

export default App;
