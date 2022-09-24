import React from 'react';
import Addemployees from '../components/Employee/AddEmployeesPage';
import SideNav from '../components/navBar/SideNav';

function AddEmployees() {
  return (
    <div className="mainConatainer">
      <SideNav />
      <div className="AeContainer">
        <Addemployees />
      </div>
    </div>
  );
}

export default AddEmployees;
