// import React from 'react';
// import Routes from '../routes';

// export default (props) => <>{Routes}</>;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;