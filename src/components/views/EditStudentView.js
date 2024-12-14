/*==================================================
EditStudentView.js

This file defines the UI for editing student details.
It allows users to edit the student's name, email, GPA, and image URL.
Includes error handling and redirects back to the student view after submission.
==================================================*/

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

  const handleCancel = () => {
    history.push(`/student/${id}`); // Redirect to student view without saving
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Edit Student</h1>
        {error && <p style={styles.error}>{error}</p>}
        <form style={styles.form} onSubmit={handleSaveChanges}>
          <div style={styles.field}>
            <label style={styles.label}>First Name:</label>
            <input
              style={styles.input}
              type="text"
              name="firstname"
              value={studentData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Last Name:</label>
            <input
              style={styles.input}
              type="text"
              name="lastname"
              value={studentData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Email:</label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={studentData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Image URL:</label>
            <input
              style={styles.input}
              type="text"
              name="imageurl"
              value={studentData.imageurl}
              onChange={handleChange}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>GPA:</label>
            <input
              style={styles.input}
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
          <div style={styles.buttonContainer}>
            <button style={styles.button} type="submit">
              Save Changes
            </button>
            <button style={styles.button} type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles
const styles = {
  background: {
    backgroundImage: `url('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/02/hogwarts-legacy-2951560.jpg?tf=3840x')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent white
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "450px",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "'Merriweather', serif",
    color: "#333",
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#555",
    width: "120px",
    textAlign: "right",
    marginRight: "15px",
    fontFamily: "'Merriweather', serif",
  },
  input: {
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    flex: "1",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "1px solid #333",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
    flex: "1",
    margin: "0 5px",
    textAlign: "center",
  },
};

export default EditStudentView;
