import React from 'react';
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      {/* partial:partials/_sidebar.html */}
  <nav className="sidebar">
    <div className="sidebar-header">
      <a href="/homePage" className="sidebar-brand">
        <img src="assets/images/logo.jpg" width="100%" alt="logo" />
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
          <Link to="/homePage" className="nav-link">
            <i className="fa fa-home" />
            <span className="link-title">Dashboard</span>
          </Link>
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
                <Link to="/cons" className="nav-link">
                  List View
                </Link>
              </li>
              <li className="nav-item">
                <Link  to="/cons" className="nav-link">
                  Map View
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  Add/Update Machines
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  HeartBeats
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  Maintenance Records
                </Link>
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
                <Link to="/viewEmployees" className="nav-link">
                  View Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addEmployees" className="nav-link">
                  Add/Update Employees
                </Link>
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
                <Link to="/cons" className="nav-link">
                  View Waste Pickers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  Add Waste Pickers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  View Redemption
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  Add/Update Redemption{" "}
                </Link>
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
                <Link to="/cons" className="nav-link">
                  View all EAN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cons" className="nav-link">
                  Add/Update EAN
                </Link>
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
