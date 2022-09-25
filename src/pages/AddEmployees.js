import React from 'react';
import Addemployees from '../components/Employee/AddEmployeesPage';
import SideNav from '../components/navBar/SideNav';
import NavBar from "../components/navBar/TopNavbar";

function AddEmployees() {
  return (
    <div className="mainConatainer">
      <SideNav />
      
      <div className="AeContainer">
      <NavBar title="Employee Registration"/>
        <Addemployees />
      </div>
    </div>
  );
}

export default AddEmployees;
