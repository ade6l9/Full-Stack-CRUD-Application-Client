/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentView = ({ student, campus, fetchStudent, onDeleteStudent }) => {
  const [campuses, setCampuses] = useState([]);
  const [selectedCampusId, setSelectedCampusId] = useState("");
  const [isCampusDropdownVisible, setIsCampusDropdownVisible] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const response = await axios.get("/api/campuses");
        setCampuses(response.data);
      } catch (error) {
        console.error("Error fetching campuses:", error);
        setError("Failed to fetch campuses.");
      }
    };
    fetchCampuses();
  }, []);

  const handleRemoveFromCampus = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this student from this campus?"
    );
    if (confirmation) {
      try {
        await axios.put(`/api/students/${student.id}/`, { campusId: null });
        setSuccess("Student removed from campus successfully!");
        fetchStudent(student.id);
      } catch (error) {
        console.error("Error removing student from campus:", error);
        setError("An error occurred while removing the student from campus.");
      }
    }
  };

  const handleAddCampus = () => {
    if (student.campusId) {
      setError("Campus can't be added, student is already enrolled.");
    } else {
      setIsCampusDropdownVisible(true);
    }
  };

  const handleCampusSelect = (event) => {
    setSelectedCampusId(event.target.value);
  };

  const handleAddCampusToStudent = async () => {
    if (!selectedCampusId) {
      setError("Please select a campus.");
      return;
    }

    try {
      await axios.put(`/api/students/${student.id}/`, { campusId: selectedCampusId });
      setSuccess("Student successfully added to the campus!");
      fetchStudent(student.id);
      setIsCampusDropdownVisible(false);
      setSelectedCampusId("");
    } catch (error) {
      console.error("Error adding student to campus:", error);
      setError("An error occurred while adding the student to campus.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={student.imageurl || "https://via.placeholder.com/150"}
          alt={`${student.firstname} ${student.lastname}`}
          style={styles.image}
        />
        <div style={styles.details}>
          <h1 style={styles.name}>{`${student.firstname} ${student.lastname}`}</h1>
          <p style={styles.detail}>Email: {student.email}</p>
          <p style={styles.detail}>GPA: {student.gpa || "N/A"}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Enrolled Campus:</h2>
        {student.campus ? (
          <div>
            <Link to={`/campus/${student.campus.id}`} style={styles.link}>
              <h3 style={styles.campusName}>{student.campus.name}</h3>
            </Link>
            <p style={styles.detail}>{student.campus.address}</p>
            <button style={styles.button} onClick={handleRemoveFromCampus}>
              Remove from Campus
            </button>
          </div>
        ) : (
          <p style={styles.noCampus}>Student not enrolled in any campus.</p>
        )}
      </div>

      {success && <p style={styles.successMessage}>{success}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}

      <div style={styles.actions}>
        <button style={styles.button} onClick={handleAddCampus}>
          Add Campus
        </button>
        {isCampusDropdownVisible && (
          <div style={styles.dropdownContainer}>
            <select onChange={handleCampusSelect} value={selectedCampusId} style={styles.dropdown}>
              <option value="">Select a campus</option>
              {campuses.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
            <button style={styles.button} onClick={handleAddCampusToStudent}>
              Confirm
            </button>
          </div>
        )}
        <Link to={`/editstudent/${student.id}`}>
          <button style={styles.button}>Edit Student</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
    marginBottom: "20px",
    padding: "20px",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ddd",
    marginRight: "20px",
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  detail: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "5px",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  campusName: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "5px",
  },
  link: {
    textDecoration: "none",
  },
  noCampus: {
    color: "#777",
    fontStyle: "italic",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#6fa8dc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  successMessage: {
    color: "green",
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
  dropdownContainer: {
    marginTop: "10px",
    textAlign: "center",
  },
  dropdown: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    marginRight: "10px",
  },
};

export default StudentView;
