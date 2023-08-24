import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Greeting from './Greeting';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </div>
);

export default App;
