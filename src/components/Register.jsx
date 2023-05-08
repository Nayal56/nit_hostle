import React, { useState } from 'react';
import './Register.css';


function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [department, setDepartment] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [parentMobile, setParentMobile] = useState('');
  const [permanentAdress, setPermanentAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', {
      firstName,
      lastName,
      rollNo,
      department,
      branch,
      year,
      mobileNo,
      email,
      bloodGroup,
      fatherName,
      motherName,
      parentMobile,
      permanentAdress,
      password,
      confirmPassword
    });
    // Send data to server or do something else here
  };

  return (
    <form onSubmit={this.handleSubmit} className="main-form">
            <div className="row">
              <div className="col-lg-8">
                <div className="form-group">
                  <label htmlFor="rollno">Roll Number</label>
                  <input onChange={this.handleChange} type="text" className="form-control" id="Rollno" name="rollno" placeholder="Enter Your Roll Number" value={this.state.rollno} pattern="[0-9]*" required/>
                  {this.state.errors.rollno && <div className="text-danger">{this.state.errors.rollno}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input onChange={this.handleChange} value={this.state.firstName} type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter Your First Name"/>
                {this.state.errors.firstName && <div className="text-danger">{this.state.errors.firstName}</div>}
                </div>
                <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                  <input onChange={this.handleChange} value={this.state.lastName} type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Your Last Name"/>
                  {this.state.errors.lastName && <div className="text-danger">{this.state.errors.lastName}</div>}
                </div>
            
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input onChange={this.handleChange} value={this.state.email} type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" required/>
                  {this.state.errors.email && <div className="text-danger">{this.state.errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input onChange={this.handleChange} value={this.state.mobileNumber} type="text" className="form-control" id="mobileNumber" name="mobileNumber" placeholder="Enter Your Mobile Number"/>
                    {this.state.errors.mobileNumber && <div className="text-danger">{this.state.errors.mobileNumber}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="fatherName">Father's Name</label>
                  <input onChange={this.handleChange} value={this.state.fatherName} type="text" className="form-control" id="fatherName" name="fatherName" placeholder="Enter Your Father's Name"/>
                  {this.state.errors.fatherName && <div className="text-danger">{this.state.errors.fatherName}</div>}
                </div>

                <div className="form-group">
              <label htmlFor="motherName">Mother's Name</label>
              <input onChange={this.handleChange} value={this.state.motherName} type="text" className="form-control" id="motherName" name="motherName" placeholder="Enter Your Mother's Name"/>
              {this.state.errors.motherName && <div className="text-danger">{this.state.errors.motherName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="mobileNo">Mobile No. of Father/Mother</label>
              <input onChange={this.handleChange} value={this.state.mobileNo} type="text" className="form-control" id="mobileNo" name="mobileNo" placeholder="Enter Mobile No. of Father/Mother"/>
              {this.state.errors.mobileNo && <div className="text-danger">{this.state.errors.mobileNo}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="permanentAddress">Permanent Address</label>
              <textarea onChange={this.handleChange} value={this.state.permanentAddress} className="form-control" id="permanentAddress" name="permanentAddress" placeholder="Enter Your Permanent Address"></textarea>
              {this.state.errors.permanentAddress && <div className="text-danger">{this.state.errors.permanentAddress}</div>}
            </div>

          
          <div className="col-lg-8">
          <div className="form-group">
          <label htmlFor="department">Department</label>
          <select onChange={this.handleChange} value={this.state.department} className="form-control" id="department" name="department">
            <option value="">Select Department</option>
            <option value="BTech">BTech</option>
            <option value="Mtech">Mtech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
           <option value="Phd">Phd</option>
           </select>
         {this.state.errors.department && <div className="text-danger">{this.state.errors.department}</div>}
          </div>
          
            <div className="form-group">
              <label htmlFor="year">Year of Study</label>
              <select onChange={this.handleChange} value={this.state.year} className="form-control" id="year" name="year">
                 <option value="">Select Year of Study</option>
                  {this.state.department === "BTech" && (
                  <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </>
                )}
                {this.state.department === "Mtech" && (
                  <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </>
                )}
                {this.state.department === "MCA" && (
                  <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </>
                )}
                {this.state.department === "MBA" && (
                  <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </>
                )}
                {this.state.department === "Phd" && (
                  <>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </>
                )}
              </select>
            </div>

            <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select onChange={this.handleChange} value={this.state.bloodGroup} className="form-control" id="bloodGroup" name="bloodGroup">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
             {this.state.errors.bloodGroup && <div className="text-danger">{this.state.errors.bloodGroup}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Password"/>
              {this.state.errors.password && <div className="text-danger">{this.state.errors.password}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPass">Confirm Password</label>
              <input onChange={this.handleChange} value={this.state.confirmPass} type="password" className="form-control" id="confirmPass" name="confirmPass" placeholder="Confirm Your Password"/>
              {this.state.errors.confirmPass && <div className="text-danger">{this.state.errors.confirmPass}</div>}
            </div>
          </div>
        </div>
        <div className="d-grid mt-4 col-4 mx-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
  );
}

export default RegistrationForm;
