import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AddEmployees from '../pages/AddEmployees';
import HomePage from '../pages/homepage';
import Login from '../pages/login';
import ViewEmployees from '../pages/viewEmployees';

function Myrouter() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/homePage" element={<HomePage />} />
      <Route exact path="/AddEmployees" element={<AddEmployees />} />
      <Route exact path="/viewEmployees" element={<ViewEmployees />} />
    </Routes>
  </Router>
  )
}

export default Myrouter
