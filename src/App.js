// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {' '}
          {/* Wrap your routes with Routes */}
          <Route path="/" element={<Greeting />} />
          {' '}
          {/* Use "element" instead of "component" */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
