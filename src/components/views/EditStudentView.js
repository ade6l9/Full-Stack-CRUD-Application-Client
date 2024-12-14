import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const EditStudentView = () => {
  const { id } = useParams(); // Get student ID from the URL
  const history = useHistory();

  const [studentData, setStudentData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    imageurl: "",
    gpa: "",
    campusId: "",
  });
  const [error, setError] = useState(""); // Error state

  // Fetch student data when the component mounts
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`/api/students/${id}`);
        setStudentData(response.data); // Set student data to state
      } catch (error) {
        setError("Error fetching student data.");
      }
    };
    fetchStudentData();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  // Handle saving the changes to the student
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/students/${id}`, studentData); // Update student
      history.push(`/student/${id}`); // Redirect back to student view
    } catch (error) {
      setError("Error saving student data.");
    }
  };

  return (
    <div>
      <h1>Edit Student</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSaveChanges}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="firstname"
            value={studentData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={studentData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={studentData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageurl"
            value={studentData.imageurl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>GPA:</label>
          <input
            type="number"
            name="gpa"
            value={studentData.gpa}
            onChange={handleChange}
            step="0.1"
            min="0.0"
            max="4.0"
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
      <br />
      <button onClick={() => history.push(`/student/${id}`)}>Cancel</button>
    </div>
  );
};

export default EditStudentView;
