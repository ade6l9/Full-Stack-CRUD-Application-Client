import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentView = (props) => {
  const { student } = props;
  const [campuses, setCampuses] = useState([]); // List of all campuses
  const [selectedCampusId, setSelectedCampusId] = useState(""); // Store selected campus ID
  const [isCampusDropdownVisible, setIsCampusDropdownVisible] = useState(false); // Track if the dropdown is visible
  const [success, setSuccess] = useState(""); // Track success messages
  const [error, setError] = useState(""); // Track error messages

  // Fetch all campuses when the component is mounted
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

  // Handle removing student from campus and refreshing the page
  const handleRemoveFromCampus = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this student from this campus?"
    );
    if (confirmation) {
      try {
        // Send the request to remove the student from campus
        await axios.put(`/api/students/${student.id}/`, {
          campusId: null, // Set campusId to null to remove the student from the campus
        });

        setSuccess("Student removed from campus successfully!");
        // Reload the page to show updated data
        window.location.reload();
      } catch (error) {
        console.error("Error removing student from campus:", error);
        setError("An error occurred while removing the student from campus.");
      }
    }
  };

  // Handle adding a student to a campus
  const handleAddCampus = () => {
    if (student.campusId) {
      // Show an error message if the student already has a campusId
      setError("Campus can't be added, student is already enrolled.");
    } else {
      setIsCampusDropdownVisible(true); // Show the dropdown if the student doesn't have a campus
    }
  };

  // Handle selecting a campus from the dropdown
  const handleCampusSelect = (event) => {
    setSelectedCampusId(event.target.value);
  };

  // Handle adding the student to the selected campus
  const handleAddCampusToStudent = async () => {
    if (!selectedCampusId) {
      setError("Please select a campus.");
      return;
    }
  
    try {
      // Send a request to update the student's campusId
      await axios.put(`/api/students/${student.id}/`, {
        campusId: selectedCampusId,
      });
  
      // Update success state instead of using alert
      setSuccess("Student successfully added to the campus!");
  
      // Optionally, you can manually refresh the page or just update the UI without reloading.
      // window.location.reload(); // Refresh the page after adding the campus, or
      // you can trigger a state update here to update the component view dynamically instead.
    } catch (error) {
      console.error("Error adding student to campus:", error);
      setError("An error occurred while adding the student to campus.");
    }
  };
  

  return (
    <div>
      <h1>{`${student.firstname} ${student.lastname}`}</h1>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa || "N/A"}</p>
      <img
        src={student.imageurl || "https://via.placeholder.com/150"}
        alt={`${student.firstname} ${student.lastname}`}
        style={{ width: "300px", height: "auto" }}
      />
      <br />

      <h2>Enrolled Campus:</h2>
      {student.campus ? (
        <div>
          <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
          </Link>
          <p>{student.campus.address}</p>
          <button onClick={handleRemoveFromCampus}>Remove from Campus</button>
        </div>
      ) : (
        <p>Student not enrolled in any campus.</p>
      )}

      <br />
      {/* Show success message */}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />

      {/* "Add Campus" Button */}
      <button onClick={handleAddCampus}>Add Campus</button>

      {/* Dropdown for selecting a campus */}
      {isCampusDropdownVisible && (
        <div>
          <h3>Select a Campus</h3>
          <select onChange={handleCampusSelect} value={selectedCampusId}>
            <option value="">Select a campus</option>
            {campuses.map((campus) => (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            ))}
          </select>
          <button onClick={handleAddCampusToStudent}>Add to Campus</button>
        </div>
      )}

      <br />
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;
