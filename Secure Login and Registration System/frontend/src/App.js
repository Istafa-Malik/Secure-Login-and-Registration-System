//Login Page

/*

import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
  return (
    <div>
    < LoginSignup/>
    </div>
  );
}

export default App;



//Reggistration Page



import React from 'react';
import './App.css';
import Reg from './reg'

function App() {
  return (
    <div className="App">
      <Reg />
    </div>
  );
}

export default App;
*/



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Reg from './reg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
    </Router>
  );
}

export default App;








 



