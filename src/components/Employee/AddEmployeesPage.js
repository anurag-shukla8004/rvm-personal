import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

function AddEmployeesPage() {
  const { token } = useAuthContext();

  const [values, setValues] = useState({
    password: "",
    employee_email: "",
    employee_fullname: "",
    employee_familyname: "",
    employee_officephoneno: "",
    employee_mobileno: "",
    employee_rfid: "",
    employee_country: "",
    employee_province: "",
    employee_city: "",
    employee_district: "",
    employee_subdistrict: "",
    employee_street: "",
    employee_unitno: "",
    employee_zipcode: "",
    employee_ok_name: "",
    employee_nok_contactno: "",
    employee_nok_email: "",
    employee_role: "",
  });
  const [passowrdError, setPassowrdError] = useState(null);
  const [mobileError, setMobileError] = useState(null);
  const [roleError, setRoleError] = useState(null);
  const [fullNameError, setFullNameError] = useState(null);
  const [familyNameError, setFamilyNameError] = useState(null);
  const [rfIdError, setRfIdError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  // Form handling -----
  const {
    password,
    employee_email,
    employee_fullname,
    employee_familyname,
    employee_officephoneno,
    employee_mobileno,
    employee_rfid,
    employee_country,
    employee_province,
    employee_city,
    employee_district,
    employee_subdistrict,
    employee_street,
    employee_unitno,
    employee_zipcode,
    employee_ok_name,
    employee_nok_contactno,
    employee_nok_email,
    employee_role,
  } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.employee_rfid) {
      setRfIdError("employee_rfid can't be empty.");
    } else {
      setRfIdError(null);
    }
    if (!values.employee_email) {
      setEmailError("employee_email can't be empty.");
    } else {
      setEmailError(null);
    }
    if (!values.employee_role) {
      setRoleError("employee_role can't be empty");
    } else {
      setRoleError(null);
    }
    if (!values.employee_fullname) {
      setFullNameError("employee_fullname can't be empty");
    } else {
      setFullNameError(null);
    }
    if (!values.employee_familyname) {
      setFamilyNameError("employee_familyname can't be empty"); //
    } else {
      setFamilyNameError(null);
    }
    if (!values.password) {
      setPassowrdError("password can't be empty");
    } else {
      setPassowrdError(null);
    }
    if (!values.employee_mobileno) {
      setMobileError("employee_mobileno can't be empty");
    } else {
      setMobileError(null);
    }

    if (
      employee_email &&
      employee_mobileno &&
      employee_familyname &&
      employee_fullname &&
      employee_role &&
      employee_rfid &&
      password
    ) {
      console.log("Make a api call");
      try {
        const response = await axios.post(
          "http://65.2.167.102:8000/user/register/",
          values,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "content-type": "application/json",
            },
          }
        );
        console.log(response, "response");
        if (response.status === 200) {
          console.log(values)
          alert("Employee added successfully");
          setValues({
            password: "",
            employee_email: "",
            employee_fullname: "",
            employee_familyname: "",
            employee_officephoneno: "",
            employee_mobileno: "",
            employee_rfid: "",
            employee_country: "",
            employee_province: "",
            employee_city: "",
            employee_district: "",
            employee_subdistrict: "",
            employee_street: "",
            employee_unitno: "",
            employee_zipcode: "",
            employee_ok_name: "",
            employee_nok_contactno: "",
            employee_nok_email: "",
            employee_role: "",
          });
        }
      } catch (e) {
        console.log(e, "errerereer");
        alert(e.response.data.employee_email[0]);
      }
    }
  };
  return (
    <div className="AeMainContainer">
      <h1 className="AeEmployTitle">
        <span>Emp</span>loyee Registration
      </h1>
      <div className="formMainConainer">
        <div className="AeContainer">
          <form className="AeFormContainer" onSubmit={handleSubmit}>
            <div className="AeForm">
              <div className="leftForm">
                <div class="AeInputBox">
                  <span class="label">Role*</span>
                  <div class=" flex-r input">
                    <select
                      className="AeInput"
                      name="employee_role"
                      value={employee_role}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Select your Role
                      </option>
                      <option value="Super Admin">SUPER ADMIN</option>
                      <option value="Admin">ADMIN</option>
                      <option value="Service">SERVICE</option>
                      <option value="Bag Collector">BAGCOLLECTOR</option>
                    </select>
                  </div>
                  {roleError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {roleError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">Password*</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      type="password"
                      placeholder="PWD"
                    />
                  </div>
                  {passowrdError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {passowrdError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">Family Name*</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Family Name"
                      name="employee_familyname"
                      value={employee_familyname}
                      onChange={handleChange}
                    />
                  </div>
                  {familyNameError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {familyNameError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">
                    Radio Frequency Identification (RFID)*
                  </span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="RFID"
                      name="employee_rfid"
                      value={employee_rfid}
                      onChange={handleChange}
                    />
                  </div>
                  {rfIdError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {rfIdError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">Province</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Province"
                      name="employee_province"
                      value={employee_province}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">District</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="District"
                      name="employee_district"
                      value={employee_district}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">Street</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Street"
                      name="employee_street"
                      value={employee_street}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">Zip Code</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="code"
                      name="employee_zipcode"
                      value={employee_zipcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">NOK Name</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="NOK Name"
                      name="employee_ok_name"
                      value={employee_ok_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="AeInputBox">
                  <span class="label">NOK Email</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="NOK Email"
                      name="employee_nok_email"
                      value={employee_nok_email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="rightForm">
                <div class="AeInputBox">
                  <span class="label">E-mail*</span>
                  <div class=" flex-r input">
                    <input
                      className="AeInput"
                      type="email"
                      placeholder="name@abc.com"
                      name="employee_email"
                      value={employee_email}
                      onChange={handleChange}
                    />
                  </div>
                  {emailError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {emailError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">Full Name*</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Full Name"
                      name="employee_fullname"
                      value={employee_fullname}
                      onChange={handleChange}
                    />
                  </div>
                  {fullNameError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {fullNameError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">Office Phone no.</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="tel"
                      placeholder="Phone Number"
                      name="employee_officephoneno"
                      value={employee_officephoneno}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">Mobile no.*</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Mobile number"
                      name="employee_mobileno"
                      value={employee_mobileno}
                      onChange={handleChange}
                    />
                  </div>
                  {mobileError && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {mobileError}
                    </span>
                  )}
                </div>

                <div class="AeInputBox">
                  <span class="label">Country</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Country"
                      name="employee_country"
                      value={employee_country}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">City</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="City"
                      name="employee_city"
                      value={employee_city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">SubDistrict</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="SubDistrict"
                      name="employee_subdistrict"
                      value={employee_subdistrict}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">Unit no.</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Unit Number"
                      name="employee_unitno"
                      value={employee_unitno}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="AeInputBox">
                  <span class="label">NOK Contact no.</span>
                  <div class="flex-r input">
                    <input
                      className="AeInput"
                      type="text"
                      placeholder="Unit Number"
                      name="employee_nok_contactno"
                      value={employee_nok_contactno}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <input class="AeSubmitBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeesPage;
