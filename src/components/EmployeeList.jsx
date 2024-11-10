// src/EmployeeList.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios'; // Axios instance for making requests
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        // Assuming you have a route like /employees to fetch employee data
        const response = await axiosInstance.get('/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl">Employee List</h1>
      <button
        onClick={() => navigate('/dashboard')}
        className="mt-4 p-2 bg-gray-500 text-white rounded"
      >
        Go Back to Dashboard
      </button>
      <div className="mt-6">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Designation</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td className="border p-2">{employee.name}</td>
                <td className="border p-2">{employee.email}</td>
                <td className="border p-2">{employee.mobile}</td>
                <td className="border p-2">{employee.designation}</td>
                <td className="border p-2">{employee.gender}</td>
                <td className="border p-2">{employee.course}</td>
                <td className="border p-2">
                  <img src={employee.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
