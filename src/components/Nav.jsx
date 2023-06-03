import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import HomeImage from "./HomeImage";
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

function Nav() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

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


  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };
  
  const isUserSelected = (user) => {
    return selectedUser === user ? 'selected' : '';
  };

  const resetForm = () => {
    setRollNumber("");
    setName("");
    setEmail("");
    setPassword("");
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

    console.log(rollNumber, Name, email, password);
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
        Name,
        email,
        password,
      }),
    }).then((res) => {
      res.json().then((data) => {
        console.warn(data);
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
    });
  };
  // **********************************
  // **********************************
  // For Login in the authorized Page
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rollNumber, password);
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
          window.localStorage.setItem("token", data.data);
          navigate("/StudentDashboard", { state: { rollNumber: rollNumber } });
        } else {
          alert("NOT REGISTERD");
        }
      });
  };

  const navigate = useNavigate();

  // ***********************************
  // ***********************************
  // *********** ADMIN-LOGIN ***********
  const handleAdmin = (e) => {
    e.preventDefault();
    console.log(adminId, adminPassword);
    fetch("http://localhost:5000/admin-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        adminId,
        adminPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "admin");
        if (data.status == "OK") {
          alert("Login Successful");
          if (alert) {
            handleClickAdmin();
          }
          window.localStorage.setItem("token", data.data);
          window.location.href = "./AdminPage";
        }
      });
  };
  const navigate1 = useNavigate();
  const handleClickAdmin = () => {
    navigate1("/AdminPage");
  };

  const [textName, setTextName] = useState(
    "National Institute of Technology Kurukshetra"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTextName((prevName) =>
        prevName === "National Institute of Technology Kurukshetra"
          ? "राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र"
          : "National Institute of Technology Kurukshetra"
      ); // Toggle between English and Hindi
    }, 3000); // Change state every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const [nextName, setNextName] = useState("Institute of National Importance");

  useEffect(() => {
    const interval = setInterval(() => {
      setNextName((prevName) =>
        prevName === "Institute of National Importance"
          ? "राष्ट्रीय महत्व का संस्थान"
          : "Institute of National Importance"
      ); // Toggle between English and Hindi
    }, 3000); // Change state every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const hrStyle = {
    color: "red", // Change the color to your desired value
    backgroundColor: "red", // Change the background color to your desired value
    height: "2px", // Change the height to your desired value
    border: "none", // Remove the border if desired
    width: "90%",
    marginTop: "0",
    marginBottom: "10px",
  };

  return (
    <>
      <nav>
        <div className="center-container">
          <HomeImage />
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <h3 className="text">
            {textName}
            <br />
            {nextName}
            <div className="text2">Kurukshetra-136119,Haryana</div>
          </h3>
          </div>

        
      </nav>
      <hr style={hrStyle} />
      <nav className="navbar-bottom">
        <ul className="nav-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
        <div className="nav-login-button">
            <button onClick={togglePopup}>Login/Signup</button>
          </div>     

      </nav>
          <div className="login-signup">
         {showPopup && (
          <div className="popup">
            <div className="popup-buttons">

            <button
              className={`user-button ${isUserSelected('student')}`}
              onClick={() => handleUserSelection('student')}
            >
              Student
            </button>
            <button
              className={`user-button ${isUserSelected('administrator')}`}
              onClick={() => handleUserSelection('administrator')}
            >
              Administrator
            </button>
            <button
              className={`user-button ${isUserSelected('admin')}`}
              onClick={() => handleUserSelection('admin')}
            >
              Admin
            </button>
            </div>
            <div className="popup-content">
              {selectedUser && (
                // *****************************
                // *****************************
                // Login Page
                <form onSubmit={handleSubmit}>
                  {selectedUser === "student" && (
                    <>
                    <ClearSharpIcon
                      style={{
                        height: '20px',
                        width: '30px',
                        left: '190px',
                        position: 'relative',
                        cursor: 'pointer',
                      }}
                      onClick={handleCancel}
                    />
                  <div className="typing-effect">
                    <h1>Student Login</h1>
                    </div>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="ROLL NUMBER"
                        id="rollno"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                      />
                      </div>
                      <div className="input-field">
                      <input
                        type="password"
                        placeholder="PASSWORD"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <br/>
                      </div>
                      <div className="action">
                        <button type="submit" onClick={handleSubmit}>
                          Login
                        </button>
                        {/* <button type="button" onClick={handleCancel}>
                          {" "}
                          Cancel{" "}
                        </button> */}
                      <button className="register" onClick={handleRegister}>
                        Register
                      </button>
                      </div>
                    </>
                  )}


                  {selectedUser === "administrator" && (
                    <>
                    <div className="typing-effect">
                      <h1>Administrator Login</h1>
                      </div>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="EMAIL"
                        id="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      </div>
                      <div className="input-field">
                      <input
                        type="password"
                        placeholder="PASSWORD"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      </div>
                      <br/>
                      <div className="action">
                      <button type="submit">Login</button>
                      <button type="button" onClick={handleCancel}>
                        {" "}
                        Cancel{" "}
                      </button>
                      </div>
                    </>
                  )}
                  {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                  $$$$$$$$$$$$$$$ ADMIN PAGE $$$$$$$$$$$$$ */}
                  {selectedUser === "admin" && (
                    <>
                    <div className="typing-effect">
                      <h1>Admin Login</h1>
                      </div>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Admin ID"
                        id="adminId"
                        value={adminId}
                        onChange={(e) => setAdminId(e.target.value)}
                      />
                      </div>
                      <div className="input-field">
                      <input
                        type="password"
                        placeholder="PASSWORD"
                        id="adminPassword"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                      />
                      </div>
                      <br/>
                      <div className="action">
                      <button type="submit" onClick={handleAdmin}>
                        Login
                      </button>
                      <button type="button" onClick={handleCancel}>
                        {" "}
                        Cancel{" "}
                      </button>
                      </div>
                    </>
                  )}

                  {/* ********************** */}
                  {/* ********************** */}
                  {/* REGISTRATION FORM */}
                  {selectedUser === "register" && showRegisterForm && (
                    <form className="registration" onSubmit={handleChange}>
                        <ClearSharpIcon
                          style={{
                            height: '20px',
                            width: '30px',
                            left: '190px',
                            position: 'relative',
                            cursor: 'pointer',
                          }}
                          onClick={handleCancel}
                        />
                      <div className="typing-effect">
                     <h1>Student Registration</h1>
                     </div>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="ROLL NUMBER"
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
                    

                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="NAME"
                        id="name"
                        name="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="input-field">
                      <input
                        type="email"
                        placeholder="E-MAIL"
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
                  <div className="input-field">
                      <input
                        type="password"
                        placeholder="PASSWORD"
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
                
                  <br/>
                  <div className="action">
                    <button type="reset" onClick={resetForm}>
                      Reset
                    </button>
                    <button type="submit" onClick={handleChange}>
                      Register
                    </button>
                    {/* <button type="button" onClick={handleCancel}>
                      {" "}
                      Cancel{" "}
                    </button> */}
                    </div>
                  </form>
                  )}
                </form>
              )}
              {/* {!selectedUser && <h3>Please select the user type!</h3>} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Nav;
