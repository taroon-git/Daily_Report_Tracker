import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import './EmployeeList.css'; // Create a CSS file for styling

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees from your API endpoint.
    axios.get('http://192.168.68.41:8000/api/v1/users')
      .then(response => {
        // Update the state with the fetched employee data.
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch employee data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ color: '#f0f0f0' }}>Employee List</h1>
      <div className="employee-card-container">
        {employees.map(employee => (
          <div className="employee-card" key={employee.id}>
            <strong>First Name:</strong> {employee.firstname}<br />
            <strong>Last Name:</strong> {employee.lastname}<br />
            <strong>Email:</strong> {employee.email}<br />
            <strong>Contact:</strong> {employee.contact}<br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
