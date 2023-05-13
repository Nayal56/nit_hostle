import './Register.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    rollNumber: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobile: '',
    department: '',
    branch: '',
    year: '',
    bloodGroup: '',
    fathersName: '',
    mothersName: '',
    parentsMobileNumber: '',
    permanentAddress: '',
    password: '',
    confirmPassword: ''
  });

    const resetForm = () => {
    setFormData({
      rollNumber: '',
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      mobile: '',
      department: '',
      branch: '',
      year: '',
      bloodGroup: '',
      fathersName: '',
      mothersName: '',
      parentsMobileNumber: '',
      permanentAddress: '',
      password: '',
      confirmPassword: ''
    });
  };

  const validateForm = () => {
    let errors = {};
    const rollNumberRegex = /^\d{6}$/;
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const mobileRegex = /^\d{10}$/;
    const parentsMobileRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if (!formData.rollNumber || !rollNumberRegex.test(formData.rollNumber)) {
      errors.rollNumber = "Please enter a valid 6 digit roll number";
    }
    
    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
      errors.firstName = "Please enter a valid first name";
    }
    
    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
      errors.lastName = "Please enter a valid last name";
    }
    
    if (!formData.gender) {
      errors.gender = "Please select a gender";
    }
    
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      errors.mobile = "Please enter a valid 10 digit mobile number";
    }
    
    if (!formData.department) {
      errors.department = "Please select a department";
    }
    
    if (!formData.branch) {
      errors.branch = "Please select a branch";
    }
    
    if (!formData.year) {
      errors.year = "Please select a year";
    }
    
    if (!formData.bloodGroup) {
      errors.bloodGroup = "Please select a blood group";
    }
    
    if (!formData.fatherName || !nameRegex.test(formData.fatherName)) {
      errors.fatherName = "Please enter a valid father's name";
    }
    
    if (!formData.motherName || !nameRegex.test(formData.motherName)) {
      errors.motherName = "Please enter a valid mother's name";
    }
    
    if (!formData.parentsMobile || !parentsMobileRegex.test(formData.parentsMobile)) {
      errors.parentsMobile = "Please enter a valid 10 digit mobile number for parents";
    }
    
    if (!formData.address) {
      errors.address = "Please enter a permanent address";
    }
    
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password = "Password must be at least 8 characters long and contain at least one letter and one number";
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    
    return errors;
};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.post(`http://localhost:5000/api/students`, formData)    
      .then(response => {
        console.log(response.data);
        resetForm();
      })
      .catch(error => {
        console.error(error);
      });
  };  
  
   
  
  return (
    <div className="registrationform">
      <h2>Student Registration</h2>
      <form className='registration-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="rollNumber">Roll Number:</label>
          <input type="text" id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select id="department" name="department" value={formData.department} onChange={handleChange} required>
              <option value="">--Select Department--</option>
              <option value="BTech">BTech</option>
              <option value="Mtech">Mtech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="Phd">Phd</option>
            </select>
          </div>

         <div className="form-group">
         <label htmlFor="branch">Branch</label>
         <select id="branch" name="branch" value={formData.branch} onChange={handleChange} required>
          <option value="">--Select Branch--</option>
              {formData.department === 'BTech' && (
                <>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Production and Industrial Engineering">Production and Industrial Engineering</option>
                </>
                )}
                {formData.department === "Mtech" && (
                <>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Physics">Physics</option>
                  <option value="School of VLSI Design & Embedded Systems">School of VLSI Design & Embedded Systems</option>
                  <option value="School of Energy and Efficiency">School of Energy and Efficiency</option>
                </>
               )}

                {formData.department === "MCA" && (
                    <>
                      <option value="MCA">MCA</option>
                    </>
                  )}
                {formData.department === "MBA" && (
                  <>
                    <option value="MBA">MBA</option>
                  </>
                )}
                {formData.department === "Phd" && (
                  <>
                    <option value="Phd">Phd</option>
                  </>
                )}
            </select>

         </div>
         <div className="form-group">
          <label htmlFor="year">Year:</label>
          <select id="year" name="year" value={formData.year} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
            <option value="third">Third Year</option>
            <option value="fourth">Fourth Year</option>
          </select>
        </div>

    <div className="form-group">
      <label htmlFor="bloodGroup">Blood Group:</label>
      <select id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
        <option value="">--Select--</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="fatherName">Father's Name:</label>
      <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
    </div>

    <div className="form-group">
      <label htmlFor="motherName">Mother's Name:</label>
      <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} required />
    </div>

    <div className="form-group">
      <label htmlFor="parentMobile">Parent's Mobile Number:</label>
      <input type="tel" id="parentMobile" name="parentMobile" value={formData.parentMobile} onChange={handleChange} pattern="[0-9]{10}" required />
    </div>

        <div className="form-group">
      <label htmlFor="permanentAddress">Permanent Address:</label>
      <input type="text" id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} required />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} minLength={8} required />
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} minLength={8} required />
    </div>

    <button type="reset">Reset</button>
    <button type="submit">Register</button>

  </form>
</div>
);
}
export default Register;
