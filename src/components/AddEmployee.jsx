// src/AddEmployee.js
import React, { useState } from 'react';
import axiosInstance from '../axios'; // Axios instance for handling requests
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('designation', designation);
    formData.append('gender', gender);
    formData.append('course', course);
    formData.append('avatar', avatar);

    try {
      // Send POST request to add a new employee
      await axiosInstance.post('/employees', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      navigate('/employees'); // Redirect to employee list after successful creation
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl">Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Other form fields (email, mobile, etc.) */}
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded mt-4">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
