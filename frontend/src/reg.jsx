/*
import React, { useState } from 'react';
import './reg.css';

function Reg() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    gender: '',
    dateOfBirth: '',
    cnic: '',
    cellNo: '',
    district: '',
    domicile: '',
    postalAddress: '',
    universityName: '',
    percentage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Father's Name:
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <label>
          CNIC:
          <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required />
        </label>
        <label>
          Cell No:
          <input type="text" name="cellNo" value={formData.cellNo} onChange={handleChange} required />
        </label>
        <label>
          District:
          <input type="text" name="district" value={formData.district} onChange={handleChange} required />
        </label>
        <label>
          Domicile:
          <input type="text" name="domicile" value={formData.domicile} onChange={handleChange} required />
        </label>
        <label>
          Postal Address:
          <textarea name="postalAddress" value={formData.postalAddress} onChange={handleChange} required></textarea>
        </label>
        <label>
          University Name (Bachelors/Masters Degree):
          <input type="text" name="universityName" value={formData.universityName} onChange={handleChange} required />
        </label>
        <label>
          Percentage:
          <input type="number" name="percentage" value={formData.percentage} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reg;
*/


import React, { useState } from 'react';
import './reg.css'; // Adjust the path if necessary

function Reg() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    gender: '',
    dateOfBirth: '',
    cnic: '',
    cellNo: '',
    district: '',
    domicile: '',
    postalAddress: '',
    universityName: '',
    percentage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Father's Name:
          <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>
        <label>
          CNIC:
          <input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required />
        </label>
        <label>
          Cell No:
          <input type="text" name="cellNo" value={formData.cellNo} onChange={handleChange} required />
        </label>
        <label>
          District:
          <input type="text" name="district" value={formData.district} onChange={handleChange} required />
        </label>
        <label>
          Domicile:
          <input type="text" name="domicile" value={formData.domicile} onChange={handleChange} required />
        </label>
        <label>
          Postal Address:
          <textarea name="postalAddress" value={formData.postalAddress} onChange={handleChange} required></textarea>
        </label>
        <label>
          University Name (Bachelors/Masters Degree):
          <input type="text" name="universityName" value={formData.universityName} onChange={handleChange} required />
        </label>
        <label>
          Percentage:
          <input type="number" name="percentage" value={formData.percentage} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reg;







