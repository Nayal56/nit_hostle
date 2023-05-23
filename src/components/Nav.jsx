import React, { useState } from "react";
import "./Nav.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const [formData, setFormData] = useState({
    rollNumber: "",
    mobile: "",
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [errors, setErrors] = useState({}); // Declare the errors variable

  const resetForm = () => {
    setRollNumber("");
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
    console.log(
      "Logging in as",
      selectedUser,
      "with username:",
      username,
      "and password:",
      password
    );
    setShowPopup(false);
  };

  const handleCancel = () => {
    setSelectedUser("");
    setId("");
    setUsername("");
    setPassword("");
    setShowPopup(false);
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle registration logic here
    console.log(
      "Registering as",
      selectedUser,
      "with username:",
      formData.rollNumber,
      "and password:",
      formData.password
    );
    setShowRegisterForm(false);

    // Additional logic for OTP verification
    const { rollNumber, email, otp } = formData;
    // TODO: Perform OTP verification here with the provided rollNumber, mobile, and otp values

    resetForm();
  };
  const handleRegister = () => {
    setSelectedUser("register");
    setShowRegisterForm(true);
  };

  const togglePopup = () => {
    setSelectedUser("student");
    setShowRegisterForm(true);
    setShowPopup(!showPopup);
  };

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(email);

    console.log(rollNumber, name, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        rollNumber,
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("Registration Successful");
          resetForm();
          setSelectedUser("student");
          setShowRegisterForm(true);
        } else {
          alert("Something went wrong");
        }
      });
  };

  // For Login in the authorized Page
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        rollNumber,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "student");
        if (data.status == "OK") {
          alert("Login Successful");
          if (alert) {
            handleClick();
          }
          window.localStorage.setItem("token", data.data);
          window.location.href = "./Dashboard";
        }
      });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Dashboard");
  };

  return (
    <nav>
      <div className="logo">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        {/* <div>
          <h4>NATIONAL INSTITUTE OF TECHNOLOGY</h4>,
          <br />
          <h5>KURUKSHETRA</h5>
        </div> */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="login-signup">
        <button onClick={togglePopup}>Login/Signup</button>
        {showPopup && (
          <div className="popup">
            <div className="popup-buttons">
              <button onClick={() => setSelectedUser("student")}>
                Student
              </button>
              <button onClick={() => setSelectedUser("administrator")}>
                Administrator
              </button>
              <button onClick={() => setSelectedUser("admin")}>Admin</button>
            </div>
            <div className="popup-content">
              {selectedUser && (
                // *****************************
                // *****************************
                // Login Page
                <form onSubmit={handleSubmit}>
                  {selectedUser === "student" && (
                    <>
                      <label htmlFor="rollno">Roll Number:</label>
                      <input
                        type="text"
                        id="rollno"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                      />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div>
                        <button type="submit" onClick={handleSubmit}>
                          Login
                        </button>
                        <button type="button" onClick={handleCancel}>
                          {" "}
                          Cancel{" "}
                        </button>
                      </div>
                      <br />
                      <button className="register" onClick={handleRegister}>
                        Register
                      </button>
                    </>
                  )}
                  {selectedUser === "administrator" && (
                    <>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="text"
                        id="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="submit">Login</button>
                      <button type="button" onClick={handleCancel}>
                        {" "}
                        Cancel{" "}
                      </button>
                    </>
                  )}
                  {selectedUser === "admin" && (
                    <>
                      <label htmlFor="id">ID:</label>
                      <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                      />
                      <label htmlFor="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="submit">Login</button>
                      <button type="button" onClick={handleCancel}>
                        {" "}
                        Cancel{" "}
                      </button>
                    </>
                  )}

                  {/* ********************** */}
                  {/* ********************** */}
                  {/* REGISTRATION FORM */}
                  {selectedUser === "register" && showRegisterForm && (
                    <form className="registration-form" onSubmit={handleChange}>
                      <div className="form-group">
                        <label htmlFor="rollNumber">Roll Number:</label>
                        <input
                          type="text"
                          id="rollNumber"
                          name="rollNumber"
                          value={rollNumber}
                          onChange={(e) => setRollNumber(e.target.value)}
                          required
                        />
                        {errors.rollNumber && (
                          <span className="error-message">
                            {errors.rollNumber}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="fullName">Name:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      {/* <div className="form-group">
                        <label htmlFor="otp">OTP:</label>
                        <input type="text" id="otp" name="otp" value={formData.otp} onChange={handleChange} required />
                        {errors.otp && <span className="error-message">{errors.otp}</span>}
                      </div> */}
                      <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          minLength={8}
                          required
                        />
                        {errors.password && (
                          <span className="error-message">
                            {errors.password}
                          </span>
                        )}
                      </div>
                      {/* <div className="form-group">
                        <label htmlFor="confirmPassword">
                          Confirm Password:
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          minLength={8}
                          required
                        />
                        {errors.confirmPassword && (
                          <span className="error-message">
                            {errors.confirmPassword}
                          </span>
                        )}
                      </div> */}
                      <button type="reset" onClick={resetForm}>
                        Reset
                      </button>
                      <button type="submit" onClick={handleChange}>
                        Register
                      </button>
                      <button type="button" onClick={handleCancel}>
                        {" "}
                        Cancel{" "}
                      </button>
                    </form>
                  )}
                </form>
              )}
              {/* {!selectedUser && <h3>Please select the user type!</h3>} */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
