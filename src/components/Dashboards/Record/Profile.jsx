import React, { useState } from 'react';
import "./Profile.css";
import { useLocation } from "react-router-dom";
import { Troubleshoot } from '@mui/icons-material';

const departments = ['Department 1', 'Department 2', 'Department 3']; // Replace with actual department options
const years = ['Year 1', 'Year 2', 'Year 3']; // Replace with actual year options
const bloodGroups = ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O-', 'AB-']; // Replace with actual blood group options

const Profile = () => {

  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [parentsMobileNumber, setParentsMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState(null);
  const location = useLocation();
  const rollnumber=location.state.rollnumber;
  console.log(rollnumber);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or data processing here
    // You can access the form field values from the state variables
    console.log({
      department,
      year,
      contactNumber,
      bloodGroup,
      fatherName,
      motherName,
      parentsMobileNumber,
      address,
      image
    });
    fetch("http://localhost:5000/updateform",
    {
      method:"POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
      rollnumber,
      department,
      year,
      contactNumber,
      bloodGroup,
      fatherName,
      motherName,
      parentsMobileNumber,
      address,
      image
      }),
    })
    .then((res) => {
      res.json().then((data)=>{
        console.warn(data)
        console.log(data, "update");
        if (data.status == "ok") {
          alert("update Successful");
        } else {
          alert("Something went wrong");
        }
      })
    })
    // Reset the form after submission
    setDepartment('');
    setYear('');
    setContactNumber('');
    setBloodGroup('');
    setFatherName('');
    setMotherName('');
    setParentsMobileNumber('');
    setAddress('');
    setImage('');
  };
  const handleImageChange = (e) => {
    console.log(e);
    var reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);//base64encoded string
      setImage(reader.result);
    };
    reader.onerror = error =>{
      console.log("error:",error);
    };
  };

  return(
    <form onSubmit={handleSubmit} className="registration-form">
      <label>
        Department:
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Year:
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Contact Number:
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </label>
      <br />

      <label>
        Blood Group:
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
          <option value="">Select Blood Group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Father's Name:
        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
      </label>
      <br />

      <label>
        Mother's Name:
        <input
          type="text"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
        />
      </label>
      <br />

      <label>
        Parents Mobile Number:
        <input
          type="text"
          value={parentsMobileNumber}
          onChange={(e) => setParentsMobileNumber(e.target.value)}
        />
      </label>
      <br />

      <label>
        Address:
        <textarea value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
      </label>
      <br/>
      <label>Upload Profile Photo:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />    
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Profile;
