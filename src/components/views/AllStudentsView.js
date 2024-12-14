/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */

import React from "react";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  // If there are no students, display a message
  if (!students.length) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>All Students</h1>
        <div style={styles.noDataMessage}>There are no students available.</div>
        <br />
        <Link to="/newstudent">
          <button style={styles.addButton}>Add New Student</button>
        </Link>
      </div>
    );
  }

  // Render list of students
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Students</h1>
      {students.map((student) => {
        let name = `${student.firstname} ${student.lastname}`;
        return (
          <div key={student.id} style={styles.card}>
            <div style={styles.cardContent}>
              <Link to={`/student/${student.id}`} style={styles.link}>
                <h2 style={styles.studentName}>{name}</h2>
              </Link>
              <p style={styles.studentEmail}>{student.email}</p>
              <button
                style={styles.deleteButton}
                onClick={() => deleteStudent(student.id)}
              >
                Delete Student
              </button>
            </div>
          </div>
        );
      })}
      <br />
      <Link to="/newstudent">
        <button style={styles.addButton}>Add New Student</button>
      </Link>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f0f0f0", // Slightly muted background to reduce brightness
    minHeight: "100vh",
  },
  title: {
    fontFamily: "'Merriweather', serif",
    fontWeight: "bold",
    fontSize: "40px",
    color: "#222222", // Darker gray for better readability
    textAlign: "center",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", // Softer shadow for elegance
    border: "1px solid #e0e0e0",
  },
  cardContent: {
    textAlign: "left",
  },
  studentName: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#2c3e50", // Muted navy for a professional touch
    margin: "0 0 10px 0",
  },
  studentEmail: {
    fontSize: "16px",
    color: "#34495e", // Slightly darker gray for secondary details
    margin: "0 0 20px 0",
  },
  link: {
    textDecoration: "none",
  },
  deleteButton: {
    backgroundColor: "#e74c3c", // Refined red for delete button
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  addButton: {
    display: "block",
    margin: "20px auto",
    backgroundColor: "#2c3e50", // Matches student name navy
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  },
  noDataMessage: {
    textAlign: "center",
    fontSize: "18px",
    color: "#7f8c8d", // Neutral gray for the message
  },
};

// Export component
export default AllStudentsView;
