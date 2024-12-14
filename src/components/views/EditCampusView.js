/*==================================================
EditCampusView.js

This file defines the UI for editing campus details.
It allows users to edit the campus name, address, description, and image URL.
================================================== */

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EditCampusView = ({ fetchCampus, updateCampus, campus }) => {
  const { id } = useParams(); // Get campus ID from the route
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  // Fetch the campus data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      await fetchCampus(id);
    };
    fetchData();
  }, [id, fetchCampus]);

  // Update form data when the campus data is fetched
  useEffect(() => {
    if (campus) {
      setFormData({
        name: campus.name || "",
        address: campus.address || "",
        description: campus.description || "",
        imageUrl: campus.imageUrl || "https://via.placeholder.com/150",
      });
    }
  }, [campus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCampus(id, formData); // Call the updateCampus function
    history.push(`/campus/${id}`); // Navigate back to the Campus View
  };

  const handleCancel = () => {
    history.push(`/campus/${id}`); // Navigate back to the Campus page without saving
  };

  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Edit Campus</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Name:
            <input
              style={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label style={styles.label}>
            Address:
            <input
              style={styles.input}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label style={styles.label}>
            Description:
            <textarea
              style={styles.textarea}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label style={styles.label}>
            Image URL:
            <input
              style={styles.input}
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </label>
          <div style={styles.buttonContainer}>
            <button style={styles.button} type="submit">
              Save Changes
            </button>
            <button
              style={styles.button}
              type="button"
              onClick={handleCancel}
            >
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
    backgroundImage: `url('https://media.cntraveler.com/photos/5b6820739dc0d5057c463bb9/master/w_2580%2Cc_limit/Bard%2520College%2520GettyImages-475706736.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent white
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "'Merriweather', serif",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
  },
  textarea: {
    padding: "8px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    minHeight: "80px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "transparent",
    border: "1px solid #333",
    borderRadius: "6px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default EditCampusView;
