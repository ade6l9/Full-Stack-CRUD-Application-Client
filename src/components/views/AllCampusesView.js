/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  // If there are no campuses, display a message
  if (!props.allCampuses.length) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>All Campuses</h1>
        <div style={styles.noDataMessage}>There are no campuses available.</div>
        <br />
        <Link to={`/addcampus`}>
          <button style={styles.addButton}>Add New Campus</button>
        </Link>
      </div>
    );
  }

  // Sort campuses by ID in ascending order before rendering
  const sortedCampuses = [...props.allCampuses].sort((a, b) => a.id - b.id);

  // If there are campuses, render the list
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Campuses</h1>
      {sortedCampuses.map((campus) => (
        <div key={campus.id} style={styles.card}>
          <div style={styles.cardContent}>
            <Link to={`/campus/${campus.id}`} style={styles.link}>
              <h2 style={styles.campusName}>{campus.name}</h2>
            </Link>
            <h4 style={styles.campusId}>Campus ID: {campus.id}</h4>
            <p style={styles.campusAddress}>{campus.address}</p>
            <p style={styles.campusDescription}>
              {campus.description || "No description available."}
            </p>
            <button
              style={styles.deleteButton}
              onClick={() => props.deleteCampus(campus.id)}
            >
              Delete Campus
            </button>
          </div>
        </div>
      ))}
      <br />
      <Link to={`/addcampus`}>
        <button style={styles.addButton}>Add New Campus</button>
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
  campusName: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#2c3e50", // Muted navy for a professional touch
    margin: "0 0 10px 0",
  },
  campusId: {
    fontSize: "16px",
    color: "#7f8c8d", // Subtle gray for secondary details
    margin: "0 0 10px 0",
  },
  campusAddress: {
    fontSize: "16px",
    color: "#34495e", // Slightly darker gray for addresses
    margin: "0 0 10px 0",
  },
  campusDescription: {
    fontSize: "14px",
    color: "#4d4d4d", // Neutral gray for descriptions
    margin: "0 0 20px 0",
    fontStyle: "italic",
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
    backgroundColor: "#2c3e50", // Matches campus name navy
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

// Prop Types Validation
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

export default AllCampusesView;
