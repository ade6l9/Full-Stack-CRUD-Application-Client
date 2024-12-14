
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditStudentView from '../views/EditStudentView';

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

  return student ? (
    <EditStudentView student={student} onUpdate={handleUpdateStudent} error={error} />
  ) : (
    <div>Loading...</div>
  );
};

export default EditStudentContainer;

