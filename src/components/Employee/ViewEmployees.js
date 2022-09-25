import React, { useEffect, useState } from 'react';

function ViewEmployees() {
  const [emp, setEmp] = useState([]);
  const [val, setVal] = useState([]);
  const [valCopy, setValCopy] = useState([]);
  const uniquerole = [];
  const uniqueCountry = [];
  const uniqueCity = [];
  const uniqueProvince = [];
  const [values, setValues] = useState({
    employee_role: '',
    employee_country: '',
    employee_city: '',
    employee_province: '',
    is_active: '',
  });

  useEffect(() => {
    console.log('values', values)
  }, [values])

  // Form handling -----
  const { employee_role, employee_country, employee_city, employee_province, is_active } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('values--valCopy->',valCopy)
    if (
      employee_role === '' &&
      employee_city === '' &&
      employee_country === '' &&
      is_active === '' &&
      employee_province === ''
    ) {
      setValCopy(val)
    } else {
      const filterObj = Object.fromEntries(Object.entries(values).filter(([_, v]) => v !== ""));
      const resultFilterArr = val.filter(ele => 
        Object.keys(filterObj).every(singleKey => ele[singleKey]?.toString() === filterObj[singleKey]))
      console.log('resultFilterArr filterObj', filterObj)
      console.log('resultFilterArr', resultFilterArr)
      setValCopy(resultFilterArr)
    }

    //  console.log('country',val)
    //  console.log(values)
  };

  useEffect(() => {
    setValCopy(valCopy);
  }, [valCopy]);

  useEffect(() => {
    let headersList = {
      Accept: '*/*',
      Authorization: 'Basic c2FnYXJAZWMuY29tOnNhZ2Fy',
      'Content-Type': 'application/json',
    };

    fetch('http://65.2.167.102:8000/user/getallemployee/', {
      method: 'GET',
      headers: headersList,
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        setEmp(JSON.parse(data));
        setVal(JSON.parse(data).employee);
        setValCopy(JSON.parse(data).employee);
      });
  }, []);

  const role = emp?.employee?.filter((element) => {
    const isDuplicate = uniquerole.includes(element.employee_role);
    if (!isDuplicate) {
      uniquerole.push(element.employee_role);
      return true;
    }
    return false;
  });

  const country = emp?.employee?.filter((element) => {
    let isDuplicateCountry;
    if (element.employee_country !== null) {
      isDuplicateCountry = uniqueCountry.includes(
        element.employee_country.toUpperCase()
      );
    }

    if (!isDuplicateCountry) {
      if (element.employee_country !== null) {
        uniqueCountry.push(element.employee_country.toUpperCase());
      }

      return true;
    }
    return false;
  });

  const city = emp?.employee?.filter((element) => {
    let isDuplicateCity;
    if (element.employee_city !== null) {
      isDuplicateCity = uniqueCity.includes(
        element.employee_city.toUpperCase()
      );
    }

    if (!isDuplicateCity) {
      if (element.employee_city !== null) {
        uniqueCity.push(element.employee_city.toUpperCase());
      }

      return true;
    }
    return false;
  });

  const province = emp?.employee?.filter((element) => {
    let isDuplicateProvince;
    if (element.employee_province !== null) {
      isDuplicateProvince = uniqueProvince.includes(
        element.employee_province.toUpperCase()
      );
    }

    if (!isDuplicateProvince) {
      if (element.employee_province !== null) {
        uniqueProvince.push(element.employee_province.toUpperCase());
      }

      return true;
    }
    return false;
  });

  const ClearField = () => {
    setValues({
      employee_role: '',
      employee_country: '',
      employee_city: '',
      employee_province: '',
      is_active: '',
    });
    setValCopy(val)
    console.log('clear')
  }

  console.log('cl---', values)
  return emp === '' ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div className="vwMainContainer">
        <h1 className="AeEmployTitle">
          <span>Vie</span>w Employees
        </h1>
        <div className="vwEmpMainContainer">
          <div className="vwEmpTop">
            <div className="vwFilterBox">
              <form className="vwForm" onSubmit={handleSubmit}>
                <select
                  className="vwInput"
                  name="employee_role"
                  value={employee_role}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    Role
                  </option>
                  {role.map((value, index) => {
                    if (value.employee_role !== null) {
                      return (
                        <option value={value.employee_role}>
                          {value.employee_role}
                        </option>
                      );
                    }
                    return <></>
                  })}
                </select>
                <select
                  className="vwInput"
                  name="employee_country"
                  value={employee_country}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    Country
                  </option>
                  {country.map((value, index) => {
                    if (value.employee_country !== null) {
                      return (
                        <option value={value.employee_country}>
                          {value.employee_country}
                        </option>
                      );
                    }
                    return <></>
                  })}
                </select>
                <select
                  className="vwInput"
                  name="employee_city"
                  value={employee_city}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    City
                  </option>
                  {city.map((value, index) => {
                    if (value.employee_city !== null) {
                      return (
                        <option value={value.employee_city}>
                          {value.employee_city}
                        </option>
                      );
                    }
                    return <></>
                  })}
                </select>
                <select
                  className="vwInput"
                  name="employee_province"
                  value={employee_province}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    Province
                  </option>
                  {province.map((value, index) => {
                    if (value.employee_province !== null) {
                      return (
                        <option value={value.employee_province}>
                          {value.employee_province}
                        </option>
                      );
                    }
                    return <></>
                  })}
                </select>
                <select
                  className="vwInput"
                  name="is_active"
                  value={is_active}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>
                    Status
                  </option>
                  <option value={true}>Active</option>
                  <option value={false}>Deactive</option>
                </select>
                <div className="vwSubContainer">
                <input class="vwSubmitBtn" type="submit" value="Search" />
                <input class="vwSubmitBtn" type="button"  value="Clear field" onClick={ClearField} />
                </div>
                
              </form>
            </div>
          </div>
          <div className="vwEmpDetailsBox">
            <div className="vwEmpDetail">
              <div style={{ width: '5%' }} className="vwEmpBox">
                <span className="vwtext">Sr.No</span>
              </div>
              <div style={{ width: '17%' }} className="vwEmpBox">
                <span className="vwtext">Name of Employee</span>
              </div>
              <div className="vwEmpBox">
                <span className="vwtext">Role</span>
              </div>
              <div className="vwEmpBox">
                <span className="vwtext">Status</span>
              </div>
              <div className="vwEmpBox">
                <span className="vwtext">Province</span>
              </div>
              <div className="vwEmpBox">
                <span className="vwtext">Country</span>
              </div>
              <div className="vwEmpBox">
                <span className="vwtext">City</span>
              </div>
              <div className="vwEmpBox">
                <span className="vwtext">Create At</span>
              </div>
              <div style={{ width: '18%' }} className="vwEmpBox">
                <span className="vwtext">Operations</span>
              </div>
            </div>
            {valCopy?.map((value, index) => {
              // const date = parseISO(value?.created_at);
              return (
                <div className="vwEmpDetail vhBgGray">
                  <div style={{ width: '5%' }} className="vwEmpBox">
                    <span className="vwdetailsText"> {index + 1}</span>
                  </div>
                  <div style={{ width: '17%' }} className="vwEmpBox">
                    <span className="vwdetailsText">
                      {value?.employee_fullname}
                    </span>
                  </div>
                  <div className="vwEmpBox">
                    <span className="vwdetailsText">
                      {value?.employee_role}
                    </span>
                  </div>
                  <div className="vwEmpBox">
                    <span className="vwdetailsText">
                      {value.is_active === true ? 'Active' : 'Unactive'}
                    </span>
                  </div>
                  <div className="vwEmpBox">
                    <span className="vwdetailsText">
                      {value?.employee_province}
                    </span>
                  </div>
                  <div className="vwEmpBox">
                    <span className="vwdetailsText">
                      {value.employee_country}
                    </span>
                  </div>
                  <div className="vwEmpBox">
                    <span className="vwdetailsText">
                      {value?.employee_city}
                    </span>
                  </div>
                  <div className="vwEmpBox">
                    <span className="vwdetailsText">
                      {' '}
                      {/* <time className="vwdetailsText">
                        {format(date, 'LLLL	d, yyyy')}
                      </time> */}
                    </span>
                  </div>
                  <div style={{ width: '18%' }} className="vwEmpBox">
                    <span className="vwdetailsText">Operations</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployees;
