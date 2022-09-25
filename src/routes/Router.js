import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AddEmployees from '../pages/AddEmployees';
import Cons from '../pages/construction';
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
      <Route exact path="/cons" element={<Cons />} />
    </Routes>
  </Router>
  )
}

export default Myrouter
