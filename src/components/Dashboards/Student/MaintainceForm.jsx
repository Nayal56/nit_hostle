import React, { useState } from 'react';

const MaintenanceForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or data processing here
    // You can access the form field values from the state variables
    console.log({
      roomNumber,
      rollNumber,
      complaintType,
      description
    });

    // Reset the form after submission
    setRoomNumber('');
    setRollNumber('');
    setComplaintType('');
    setDescription('');
  };

  return (
    <div className="maintenance-form">
      <h3>Maintenance Complaint</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Room Number:
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Roll Number:
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Complaint Type:
          <select
            value={complaintType}
            onChange={(e) => setComplaintType(e.target.value)}
          >
            <option value="">Select Complaint Type</option>
            <option value="Electrical">Electrical</option>
            <option value="Plumbing">Furniture</option>
            <option value="Plumbing">LAN/wifi issue</option>
            <option value="Appliance Repair">Appliance Repair</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Plumbing">Other</option>

            {/* Add more complaint types as needed */}
          </select>
        </label>
        <br />

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MaintenanceForm;
