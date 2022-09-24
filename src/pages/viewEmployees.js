import React from 'react';
import ViewEmployees from '../components/Employee/ViewEmployees';
import SideNav from '../components/navBar/SideNav';

function AddEmployees() {
  return (
    <div className="mainConatainer">
      <SideNav />
      <div className="vwContainer">
        <ViewEmployees />
      </div>
    </div>
  );
}

export default AddEmployees;