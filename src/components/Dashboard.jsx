import React from "react";
import "./Dashboard.css"; // Import the CSS file for styling

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};

const Dashboard = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("User logged out");
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  };

  return (
    <div className="dashboard">
      <Navbar onLogout={handleLogout} />

      {/* Dashboard Content */}
      <h1>Welcome to the Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
