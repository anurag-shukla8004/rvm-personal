import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Dashbord() {

  return (
    <div className="App">
      
      <Helmet>
        {/* <script src="assets/vendors/core/core.js"></script> */}
        <script src="assets/vendors/chartjs/Chart.min.js"></script>
        <script src="assets/vendors/jquery.flot/jquery.flot.js"></script>
        <script src="assets/vendors/jquery.flot/jquery.flot.resize.js"></script>

        <script src="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>

        <script src="assets/vendors/apexcharts/apexcharts.min.js"></script>

        <script src="assets/vendors/feather-icons/feather.min.js"></script>

        <script src="assets/js/template.js"></script>

        <script src="assets/vendors/chartjs/Chart.min.js"></script>
        <script src="assets/js/chartjs-light.js"></script>
        <script src="assets/js/dashboard-light.js"></script>
      </Helmet>
      <div className="main-wrapper">
        <div className="page-wrapper">
          {/* partial */}
          <div className="page-content">
            <div className="row">
              <div className="col-lg-7 mb-4 order-0">
                <div className="card card-shadow">
                  <div className="d-flex align-items-end row">
                    <div className="col-sm-12">
                      <div className="card-body">
                        <div className="nav-item d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control border-0 shadow-none"
                            placeholder="Search..."
                            aria-label="Search..."
                          />
                          <Link to="#" className="btn btn-primary btn-search">
                            {' '}
                            <i className="fa fa-search" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-4">
                <label htmlFor="" className="mb-2">
                  {' '}
                  Suggestions
                </label>
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-rounded"
                  >
                    Country
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-rounded"
                  >
                    Province
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-rounded"
                  >
                    City
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-rounded"
                  >
                    District
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="card dasboard-card">
                  <div className="card-body">
                    <h5 className="mb-0">Machines</h5>
                    <table className="table table-borderless table-custom-l-r">
                      <tbody>
                        <tr>
                          <td style={{ width: '50%' }}>Total</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Active</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Inactive</td>
                          <td>120</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-icons">
                      <img
                        src="assets/images/icons/washing-machine.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card dasboard-card">
                  <div className="card-body">
                    <h5 className="mb-0">Total Bags</h5>
                    <table className="table table-borderless table-custom-l-r">
                      <tbody>
                        <tr>
                          <td style={{ width: '50%' }}>Total</td>
                          <td>250</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Plugged</td>
                          <td>130</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Full</td>
                          <td>17</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-icons">
                      <img
                        src="../assets/images/icons/clarity_coin-bag-solid.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card dasboard-card">
                  <div className="card-body">
                    <h5 className="mb-0">Todays active waste picker</h5>
                    <table className="table table-borderless table-custom-l-r">
                      <tbody>
                        <tr>
                          <td style={{ width: '50%' }}>Daily</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Weekly</td>
                          <td>110</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Monthly</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-icons">
                      <img src="../assets/images/icons/bin-solid.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card dasboard-card">
                  <div className="card-body">
                    <h5 className="mb-0">Todays Tokens</h5>
                    <table className="table table-borderless table-custom-l-r">
                      <tbody>
                        <tr>
                          <td style={{ width: '50%' }}>Tokens</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Printed</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Online</td>
                          <td>120</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-icons">
                      <img
                        src="../assets/images/icons/ic_outline-token.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card dasboard-card">
                  <div className="card-body">
                    <h5 className="mb-0">Total active housewives</h5>
                    <table className="table table-borderless table-custom-l-r">
                      <tbody>
                        <tr>
                          <td style={{ width: '50%' }}>Daily</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Weekly</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <td style={{ width: '50%' }}>Monthly</td>
                          <td>120</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-icons">
                      <img src="../assets/images/icons/woman.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="mt-30">
              <div className="row">
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-25">
                        <div className="col-md-6">
                          {' '}
                          <h4 className="card-title">Plastic Collected</h4>
                        </div>
                        <div className="col-md-6 text-end">
                          <div className="me-2">
                            <div
                              className="input-group date datepicker  me-2 mb-2 mb-md-0"
                              id="dashboardDate"
                            >
                              <span className="input-group-text input-group-addon bg-transparent border-primary btn-xs">
                                <i
                                  data-feather="calendar"
                                  className=" text-primary"
                                />
                              </span>
                              <input
                                type="text"
                                className="form-control border-primary bg-transparent"
                              />
                            </div>
                            <button
                              className="btn btn-outline-primary dropdown-toggle  btn-xs"
                              data-bs-toggle="dropdown"
                              type="button"
                            >
                              Country <span className="caret" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="#">
                                Country
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Province
                              </Link>
                              <Link className="dropdown-item" to="#">
                                District
                              </Link>
                              <Link className="dropdown-item" to="#">
                                City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <canvas id="chartjsGroupedBar" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-25">
                        <div className="col-md-6">
                          {' '}
                          <h4 className="card-title">Redeme Amount Cash</h4>
                        </div>
                        <div className="col-md-6 text-end">
                          <div className="me-2">
                            <div
                              className="input-group date datepicker  me-2 mb-2 mb-md-0"
                              id="dashboardDate"
                            >
                              <span className="input-group-text input-group-addon bg-transparent border-primary btn-xs">
                                <i
                                  data-feather="calendar"
                                  className=" text-primary"
                                />
                              </span>
                              <input
                                type="text"
                                className="form-control border-primary bg-transparent"
                                placeholder="15-September-2022"
                              />
                            </div>
                            <button
                              className="btn btn-outline-primary dropdown-toggle  btn-xs"
                              data-bs-toggle="dropdown"
                              type="button"
                            >
                              Country <span className="caret" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="#">
                                Country
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Province
                              </Link>
                              <Link className="dropdown-item" to="#">
                                District
                              </Link>
                              <Link className="dropdown-item" to="#">
                                City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="revenueChart" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-30">
              <div className="row">
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-25">
                        <div className="col-md-6">
                          {' '}
                          <h4 className="card-title">Tannage Collected</h4>
                        </div>
                        <div className="col-md-6 text-end">
                          <div className="me-2">
                            <div
                              className="input-group date datepicker  me-2 mb-2 mb-md-0"
                              id="dashboardDate"
                            >
                              <span className="input-group-text input-group-addon bg-transparent border-primary btn-xs">
                                <i
                                  data-feather="calendar"
                                  className=" text-primary"
                                />
                              </span>
                              <input
                                type="text"
                                className="form-control border-primary bg-transparent"
                                placeholder="15-September-2022"
                              />
                            </div>
                            <button
                              className="btn btn-outline-primary dropdown-toggle  btn-xs"
                              data-bs-toggle="dropdown"
                              type="button"
                            >
                              Country <span className="caret" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="#">
                                Country
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Province
                              </Link>
                              <Link className="dropdown-item" to="#">
                                District
                              </Link>
                              <Link className="dropdown-item" to="#">
                                City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <canvas id="tannage-collected" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-25">
                        <div className="col-md-6">
                          {' '}
                          <h4 className="card-title">Redeme Amount Coupons</h4>
                        </div>
                        <div className="col-md-6 text-end">
                          <div className="me-2">
                            <div
                              className="input-group date datepicker  me-2 mb-2 mb-md-0"
                              id="dashboardDate"
                            >
                              <span className="input-group-text input-group-addon bg-transparent border-primary btn-xs">
                                <i
                                  data-feather="calendar"
                                  className=" text-primary"
                                />
                              </span>
                              <input
                                type="text"
                                className="form-control border-primary bg-transparent"
                                placeholder="15-September-2022"
                              />
                            </div>
                            <button
                              className="btn btn-outline-primary dropdown-toggle  btn-xs"
                              data-bs-toggle="dropdown"
                              type="button"
                            >
                              Country <span className="caret" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="#">
                                Country
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Province
                              </Link>
                              <Link className="dropdown-item" to="#">
                                District
                              </Link>
                              <Link className="dropdown-item" to="#">
                                City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="monthlySalesChart" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-30">
              <div className="row">
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-25">
                        <div className="col-md-6">
                          {' '}
                          <h4 className="card-title">Bottles Rejected</h4>
                        </div>
                        <div className="col-md-6 text-end">
                          <div className="me-2">
                            <div
                              className="input-group date datepicker  me-2 mb-2 mb-md-0"
                              id="dashboardDate"
                            >
                              <span className="input-group-text input-group-addon bg-transparent border-primary btn-xs">
                                <i
                                  data-feather="calendar"
                                  className=" text-primary"
                                />
                              </span>
                              <input
                                type="text"
                                className="form-control border-primary bg-transparent"
                                placeholder="15-September-2022"
                              />
                            </div>
                            <button
                              className="btn btn-outline-primary dropdown-toggle  btn-xs"
                              data-bs-toggle="dropdown"
                              type="button"
                            >
                              Country <span className="caret" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="#">
                                Country
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Province
                              </Link>
                              <Link className="dropdown-item" to="#">
                                District
                              </Link>
                              <Link className="dropdown-item" to="#">
                                City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <canvas id="chartjsDoughnut" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="row mb-25">
                        <div className="col-md-6">
                          {' '}
                          <h4 className="card-title">Incidents</h4>
                        </div>
                        <div className="col-md-6 text-end">
                          <div className="me-2">
                            <div
                              className="input-group date datepicker  me-2 mb-2 mb-md-0"
                              id="dashboardDate"
                            >
                              <span className="input-group-text input-group-addon bg-transparent border-primary btn-xs">
                                <i
                                  data-feather="calendar"
                                  className=" text-primary"
                                />
                              </span>
                              <input
                                type="text"
                                className="form-control border-primary bg-transparent"
                                placeholder="15-September-2022"
                              />
                            </div>
                            <button
                              className="btn btn-outline-primary dropdown-toggle  btn-xs"
                              data-bs-toggle="dropdown"
                              type="button"
                            >
                              Country <span className="caret" />
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <Link className="dropdown-item" to="#">
                                Country
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Province
                              </Link>
                              <Link className="dropdown-item" to="#">
                                District
                              </Link>
                              <Link className="dropdown-item" to="#">
                                City
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <canvas id="chartjsPie" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="mt-30">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe
                            title="iframe1"
                            className="gmap_iframe"
                            width="100%"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Indonesia&t=p&z=8&ie=UTF8&iwloc=B&output=embed"
                          />
                          <Link to="#">MCPE Nation</Link>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              '.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
