import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { useAuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { token, setToken } = useAuthContext();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(null);

  // Form handling -----
  const { username, password } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.username && !values.password) return;
    if (validator.isEmail(values?.username)) {
      console.log("valid email");
      setEmailError(null);
    } else {
      console.log("Invalid email");
      setEmailError("Check your email address");
    }

    if (validator.isEmail(values?.username)) {
      let params = JSON.stringify(values);
      console.log(params);
      const response = await axios.post(
        "http://65.2.167.102:8000/user/login/",
        values,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // const resp = await response.data();
      console.log(response, "response");
      if (response.status === 200) {
        setToken(response.data.token);
        console.log("The token", token);
        navigate("/homePage", { token: response.data.token });
      }
      if (response.status !== 200) {
        alert(`There is an error: ${response.status}`);
      }
    }
  };

  return (
    <div className=" flex-r loginContainer">
      
      <div className="headingLogo">
        <div>
          <img className="loginLogo" alt='logo1' src="assets/images/logo.jpg"></img>
        </div>
        <div>
          <h1 className="loginTitile">WELCOME TO RVM</h1>
        </div>
      </div>
      <div className="flex-r login-wrapper">
        <div className="login-text">
          <div className="logo"></div>
          <h1>Log In</h1>
          <p>It's not long before you embark on this journey! </p>

          <form className="flex-c" onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="label">E-mail</span>
              <div className=" flex-r input">
                <input
                  type="text"
                  placeholder="name@abc.com"
                  name="username"
                  value={username}
                  onInput={handleChange}
                />
                <i className="fas fa-at"></i>
              </div>
              {emailError && (
                <span style={{ color: "red", fontSize: 12 }}>{emailError}</span>
              )}
            </div>

            <div className="input-box">
              <span className="label">Password</span>
              <div className="flex-r input">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onInput={handleChange}
                  placeholder="8+ (a, A, 1, #)"
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>

            <div className="check">
              <span>Forgot Password?</span>
            </div>

            <input
              onClick={handleSubmit}
              className="creacteBtn"
              type="submit"
              value="Create an Account"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
