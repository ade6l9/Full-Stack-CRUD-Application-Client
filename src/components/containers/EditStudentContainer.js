/* ==================================================
EditStudentContainer.js

This file defines the container component for editing a student's details.
It fetches the student data from the server, handles updates, 
and passes the necessary data and callbacks to the EditStudentView component.
Includes the Header component for consistent navigation.
==================================================*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditStudentView from '../views/EditStudentView';
import Header from "./Header"; // Import the Header component

const EditStudentContainer = ({ match }) => {
  const { id } = match.params; // Extract student ID from URL
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`/api/students/${id}`);
        setStudent(response.data);
      } catch (err) {
        setError('Student not found');
        console.error(err);
      }
    };
    fetchStudent();
  }, [id]);

  const handleUpdateStudent = async (updatedStudent) => {
    try {
      await axios.put(`/api/students/${id}`, updatedStudent);
      alert('Student updated successfully');
    } catch (err) {
      setError('Error updating student');
      console.error(err);
    }
  };

  return (
    <>
      <Header /> {/* Add the Header component */}
      {student ? (
        <EditStudentView student={student} onUpdate={handleUpdateStudent} error={error} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default EditStudentContainer;
