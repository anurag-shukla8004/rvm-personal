import React from 'react';
import ViewEmployees from '../components/Employee/ViewEmployees';
import SideNav from '../components/navBar/SideNav';
import NavBar from "../components/navBar/TopNavbar";

function ViewEmp() {
  return (
    <div className="mainConatainer">
      <SideNav />
      <div className="vwContainer">
      <NavBar title="View Employees"/>
        <ViewEmployees />
      </div>
    </div>
  );
}

export default ViewEmp;