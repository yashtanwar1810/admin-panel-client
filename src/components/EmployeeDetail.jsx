import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchEmployeeDetail, deleteEmployee } from "../api/api";

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const getEmployeeDetail = async () => {
      try {
        const { data } = await fetchEmployeeDetail(id);
        setEmployee(data);
      } catch (error) {
        console.error("Failed to fetch employee:", error);
      }
    };
    getEmployeeDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteEmployee(id);
      navigate("/employees");
    } catch (error) {
      console.error("Failed to delete employee:", error);
    }
  };

  if (!employee) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{employee.name}</h2>
      <p>Designation: {employee.designation}</p>
      <p>Email: {employee.email}</p>
      <p>Mobile: {employee.mobile}</p>
      <div className="mt-4">
        <Link to={`/update-employee/${employee._id}`} className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
          Edit
        </Link>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
      <Link to="/employees" className="mt-6 inline-block text-blue-500 underline">
        Back to Employee List
      </Link>
    </div>
  );
};

export default EmployeeDetail;
