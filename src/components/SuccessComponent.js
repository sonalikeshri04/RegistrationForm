import React from 'react';
import './SuccessComponent.css';

const SuccessComponent = ({ formData }) => {
  return (
    <div className="container">
      <h1>Form Submitted Successfully!</h1>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>Phone Number: {formData.phoneNo}</li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>PAN Number: {formData.panNo}</li>
        <li>Aadhar Number: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default SuccessComponent;
