import React, { useState } from 'react';
import "./Profile.css";
import { useLocation } from "react-router-dom";

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
  console.log("hii");
  const location = useLocation();
  console.log(location.state);
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

    // Reset the form after submission
    setDepartment('');
    setYear('');
    setContactNumber('');
    setBloodGroup('');
    setFatherName('');
    setMotherName('');
    setParentsMobileNumber('');
    setAddress('');
    setImage(null);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
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
      <br />

      <label>
        Upload Profile Photo:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Profile;
