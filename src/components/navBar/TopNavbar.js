import React from 'react';
import { Link } from 'react-router-dom';


function TopNavbar(props) {

  return (
    <>
      {/* partial:partials/_navbar.html */}
    <nav className="navbar">
      <Link to="#" className="sidebar-toggler">
        <i data-feather="menu" />
      </Link>
      <div className="navbar-content">
        <div className="d-flex align-items-center">
          <h2 className="page-title">{props.title}</h2>
        </div>
        <form className="search-form">
          <div className="input-group">
            <div className="input-group-text">
              <i data-feather="search" />
            </div>
            <input
              type="text"
              className="form-control"
              id="navbarForm"
              placeholder="Search here..."
            />
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="notificationDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="bell" />
              <div className="indicator">
                <div className="circle" />
              </div>
            </Link>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="notificationDropdown"
            >
              <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                <p>6 New Notifications</p>
                <Link to="/cons" className="text-muted">
                  Clear all
                </Link>
              </div>
              <div className="p-1">
                <Link
                  to="/cons"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i className="icon-sm text-white" data-feather="gift" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New Order Recieved</p>
                    <p className="tx-12 text-muted">30 min ago</p>
                  </div>
                </Link>
                <Link
                  to="/cons"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i
                      className="icon-sm text-white"
                      data-feather="alert-circle"
                    />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Server Limit Reached!</p>
                    <p className="tx-12 text-muted">1 hrs ago</p>
                  </div>
                </Link>
                <Link
                  to="/cons"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <img
                      className="wd-30 ht-30 rounded-circle"
                      src="https://via.placeholder.com/30x30"
                      alt="userr"
                    />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>New customer registered</p>
                    <p className="tx-12 text-muted">2 sec ago</p>
                  </div>
                </Link>
                <Link
                  to="/cons"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i className="icon-sm text-white" data-feather="layers" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Apps are ready for update</p>
                    <p className="tx-12 text-muted">5 hrs ago</p>
                  </div>
                </Link>
                <Link
                  to="/cons"
                  className="dropdown-item d-flex align-items-center py-2"
                >
                  <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                    <i className="icon-sm text-white" data-feather="download" />
                  </div>
                  <div className="flex-grow-1 me-2">
                    <p>Download completed</p>
                    <p className="tx-12 text-muted">6 hrs ago</p>
                  </div>
                </Link>
              </div>
              <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                <Link to="/cons">View all</Link>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="wd-30 ht-30 rounded-circle"
                src="https://via.placeholder.com/30x30"
                alt="profile"
              />
            </Link>
            <div
              className="dropdown-menu p-0"
              aria-labelledby="profileDropdown"
            >
              <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div className="mb-3">
                  <img
                    className="wd-80 ht-80 rounded-circle"
                    src="https://via.placeholder.com/80x80"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <p className="tx-16 fw-bolder">Amiah Burton</p>
                  <p className="tx-12 text-muted">amiahburton@gmail.com</p>
                </div>
              </div>
              <ul className="list-unstyled p-1">
                <li className="dropdown-item py-2">
                  <Link
                    to="pages/general/profile.html"
                    className="text-body ms-0"
                  >
                    <i className="me-2 icon-md" data-feather="user" />
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="dropdown-item py-2">
                  <Link to="/cons" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="edit" />
                    <span>Edit Profile</span>
                  </Link>
                </li>
                <li className="dropdown-item py-2">
                  <Link to="/cons" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="log-out" />
                    <span>Log Out</span>
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

export default TopNavbar
