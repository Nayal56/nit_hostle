import React, { useState } from 'react';
import "./RebaitForm.css";
const RebaitForm = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    returnDate: '',
    reason: '',
    contact: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="leave-form">
      <div className="form-group">
        <label htmlFor="fromDate">From Date:</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="reason">Reason of Journey:</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  );
};

export default RebaitForm;
