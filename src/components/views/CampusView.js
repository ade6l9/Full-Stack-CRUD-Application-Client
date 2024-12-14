/*==================================================
CampusView.js

This component is responsible for rendering a detailed view of a specific campus. 
It displays the campus's information, including its name, address, description, and enrolled students. 
The component also allows adding new students, adding existing students to the campus, and removing students.
================================================== */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CampusView = (props) => {
  const { campus, removeStudentFromCampus, fetchCampus } = props;

  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showAddExistingStudentForm, setShowAddExistingStudentForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    imageurl: "",
    gpa: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [studentsWithoutCampus, setStudentsWithoutCampus] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Store selected student

  // Fetch students who do not belong to any campus
  const fetchStudentsWithoutCampus = async () => {
    try {
      const response = await axios.get("/api/students/");
      const filteredStudents = response.data.filter(
        (student) => student.campusId === null || student.campusId === ""
      );
      setStudentsWithoutCampus(filteredStudents); // Update state
    } catch (error) {
      console.error("Error fetching students without a campus:", error);
      setError("Failed to fetch students without a campus");
    }
  };

  // Handle removing a student with confirmation
  const handleRemoveStudent = async (studentId) => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this student?"
    );
    if (confirmation) {
      await removeStudentFromCampus(studentId, campus.id); // Remove the student
      await fetchCampus(campus.id); // Re-fetch the updated campus data
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle adding a new student to the campus
  const handleAddStudent = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("/api/students", {
        ...formData,
        campusId: campus.id, // Add campusId to form data
      });

      setSuccess("Student added successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        imageurl: "",
        gpa: "",
      });
      setShowAddStudentForm(false);
      await fetchCampus(campus.id);
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.error || "An error occurred while adding the student."
      );
    }
  };

  // Handle selecting an existing student from dropdown
  const handleAddExistingStudent = async () => {
    if (!selectedStudent) {
      setError("Please select a student.");
      return;
    }

    try {
      await axios.put(`/api/students/${selectedStudent}/`, {
        campusId: campus.id,
      });

      setSuccess("Existing student added to campus!");
      setShowAddExistingStudentForm(false); // Hide dropdown after selection
      await fetchCampus(campus.id); // Re-fetch campus data
    } catch (error) {
      console.error("Error adding existing student:", error);
      setError("An error occurred while adding the existing student.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{campus.name}</h1>
      <p style={styles.address}>{campus.address}</p>
      <p style={styles.description}>{campus.description}</p>
      <img
        src={campus.imageUrl || "https://via.placeholder.com/150"}
        alt={`${campus.name} campus`}
        style={styles.image}
      />
      <br />

      <h2 style={styles.sectionTitle}>Enrolled Students:</h2>
      {campus.students && campus.students.length > 0 ? (
        campus.students.map((student) => (
          <div key={student.id} style={styles.studentCard}>
            <Link to={`/student/${student.id}`} style={styles.studentLink}>
              <h3 style={styles.studentName}>{`${student.firstname} ${student.lastname}`}</h3>
            </Link>
            <button
              style={styles.removeButton}
              onClick={() => handleRemoveStudent(student.id)}
            >
              Remove Student
            </button>
          </div>
        ))
      ) : (
        <p style={styles.noDataMessage}>
          No students are currently enrolled at this campus.
        </p>
      )}

      <br />

      <button
        style={styles.addButton}
        onClick={() => setShowAddStudentForm(!showAddStudentForm)}
      >
        {showAddStudentForm
          ? "Close Add Student Form"
          : "Add New Student to This Campus"}
      </button>

      <button
        style={styles.addButton}
        onClick={() => {
          setShowAddExistingStudentForm(true);
          fetchStudentsWithoutCampus();
        }}
      >
        {showAddExistingStudentForm
          ? "Close Add Existing Student Form"
          : "Add Existing Student to This Campus"}
      </button>

      {showAddExistingStudentForm && (
        <div style={styles.form}>
          <h2>Add Existing Student</h2>
          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}
          <select
            onChange={(e) => setSelectedStudent(e.target.value)}
            value={selectedStudent || ""}
            style={styles.dropdown}
          >
            <option value="">Select a student</option>
            {studentsWithoutCampus.map((student) => (
              <option key={student.id} value={student.id}>
                {`${student.firstname} ${student.lastname}`}
              </option>
            ))}
          </select>
          <button style={styles.submitButton} onClick={handleAddExistingStudent}>
            Add to Campus
          </button>
        </div>
      )}

      {showAddStudentForm && (
        <div style={styles.form}>
          <h2>Add New Student</h2>
          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}
          <form onSubmit={handleAddStudent}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                name="imageurl"
                value={formData.imageurl}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div>
              <label>GPA:</label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                step="0.1"
                min="0.0"
                max="4.0"
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              Add Student
            </button>
          </form>
        </div>
      )}

      <br />
      <Link to={`/editcampus/${campus.id}`}>
        <button style={styles.editButton}>Edit Campus</button>
      </Link>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  address: {
    fontSize: "18px",
    color: "#34495e",
  },
  description: {
    fontSize: "16px",
    fontStyle: "italic",
    color: "#7f8c8d",
    marginBottom: "20px",
  },
  image: {
    width: "400px",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  studentCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "10px 20px",
    borderRadius: "8px",
    margin: "10px 0",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  },
  studentLink: {
    textDecoration: "none",
    color: "#3498db",
  },
  studentName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  addButton: {
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
  },
  form: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#ecf0f1",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "5px 0 10px 0",
    borderRadius: "5px",
    border: "1px solid #dcdde1",
  },
  submitButton: {
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  error: {
    color: "#e74c3c",
    marginBottom: "10px",
  },
  success: {
    color: "#2ecc71",
    marginBottom: "10px",
  },
  dropdown: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #dcdde1",
    marginBottom: "10px",
  },
  noDataMessage: {
    fontSize: "16px",
    color: "#7f8c8d",
  },
};

export default CampusView;
