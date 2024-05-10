import React from "react";
import { Box } from '@material-ui/core';

import './App.css';
import './Components/css/styles.css';

import Dashboard from './Components/Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box> 
          <Dashboard />
        </Box>
      </header>
      </div>
  );
}


export default App;
