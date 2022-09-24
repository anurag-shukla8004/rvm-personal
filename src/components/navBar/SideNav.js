import React from 'react';

function SideNav() {
  return (
    <>
      {/* partial:partials/_sidebar.html */}
  <nav className="sidebar">
    <div className="sidebar-header">
      <a href="#" className="sidebar-brand">
        <img src="assets/images/logo.jpg" width="100%" alt="" />
      </a>
      <div className="sidebar-toggler not-active">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div className="sidebar-body">
      <ul className="nav">
        <li className="nav-item">
          <a href="homePage" className="nav-link">
            <i className="fa fa-home" />
            <span className="link-title">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#MachineMgmt"
            role="button"
            aria-expanded="false"
            aria-controls="MachineMgmt"
          >
            <i className="mdi mdi-fridge-top" />
            <span className="link-title">Machine Mgmt</span>
            <i className="link-arrow" data-feather="chevron-down" />
          </a>
          <div className="collapse" id="MachineMgmt">
            <ul className="nav sub-menu">
              <li className="nav-item">
                <a href="ListView.html" className="nav-link">
                  List View
                </a>
              </li>
              <li className="nav-item">
                <a href="MapView.html" className="nav-link">
                  Map View
                </a>
              </li>
              <li className="nav-item">
                <a href="AddMachines.html" className="nav-link">
                  Add/Update Machines
                </a>
              </li>
              <li className="nav-item">
                <a href="HeartBeats.html" className="nav-link">
                  HeartBeats
                </a>
              </li>
              <li className="nav-item">
                <a href="MaintenanceRecords.html" className="nav-link">
                  Maintenance Records
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#Employee"
            role="button"
            aria-expanded="false"
            aria-controls="emails"
          >
            <i className="mdi mdi-account-star" />
            <span className="link-title">Employee</span>
            <i className="link-arrow" data-feather="chevron-down" />
          </a>
          <div className="collapse" id="Employee">
            <ul className="nav sub-menu">
              <li className="nav-item">
                <a href="viewEmployees" className="nav-link">
                  View Employees
                </a>
              </li>
              <li className="nav-item">
                <a href="addEmployees" className="nav-link">
                  Add/Update Employees
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#PartnerMgmt"
            role="button"
            aria-expanded="false"
            aria-controls="emails"
          >
            <i className="fa fa-users" aria-hidden="true" />
            <span className="link-title">Partner</span>
            <i className="link-arrow" data-feather="chevron-down" />
          </a>
          <div className="collapse" id="PartnerMgmt">
            <ul className="nav sub-menu">
              <li className="nav-item">
                <a href="ViewWastePickers.html" className="nav-link">
                  View Waste Pickers
                </a>
              </li>
              <li className="nav-item">
                <a href="AddWastePickers.html" className="nav-link">
                  Add Waste Pickers
                </a>
              </li>
              <li className="nav-item">
                <a href="ViewRedemption.html" className="nav-link">
                  View Redemption
                </a>
              </li>
              <li className="nav-item">
                <a href="AddRedemption.html" className="nav-link">
                  Add/Update Redemption{" "}
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#BarCode"
            role="button"
            aria-expanded="false"
            aria-controls="emails"
          >
            <i className="mdi mdi-barcode" />
            <span className="link-title">Bar Code Mgmt</span>
            <i className="link-arrow" data-feather="chevron-down" />
          </a>
          <div className="collapse" id="BarCode">
            <ul className="nav sub-menu">
              <li className="nav-item">
                <a href="ViewallEAN.html" className="nav-link">
                  View all EAN
                </a>
              </li>
              <li className="nav-item">
                <a href="AddEAN.html" className="nav-link">
                  Add/Update EAN
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default SideNav
