/*==================================================
AddCampusView.js

This file defines the UI for adding a new campus.
It allows users to input the campus name, address, description, and image URL.
Includes an elegant design with a background image for better aesthetics.
==================================================*/

import React from "react";
import PropTypes from "prop-types";

const AddCampusView = (props) => {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.title}>Add a New Campus</h1>
        <form style={styles.form} onSubmit={props.handleSubmit}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={props.name}
            onChange={props.handleChange}
            required
          />
          <label style={styles.label} htmlFor="address">Address:</label>
          <input
            style={styles.input}
            type="text"
            name="address"
            value={props.address}
            onChange={props.handleChange}
            required
          />
          <label style={styles.label} htmlFor="description">Description:</label>
          <textarea
            style={styles.textarea}
            name="description"
            value={props.description}
            onChange={props.handleChange}
          />
          <label style={styles.label} htmlFor="imageUrl">Image URL:</label>
          <input
            style={styles.input}
            type="text"
            name="imageUrl"
            value={props.imageUrl}
            onChange={props.handleChange}
          />
          <button style={styles.button} type="submit">Add Campus</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url('https://media.cntraveler.com/photos/5b6820739dc0d5057c463bb9/master/w_2580%2Cc_limit/Bard%2520College%2520GettyImages-475706736.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Merriweather', serif", // Elegant font
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
    marginBottom: "8px",
    textAlign: "left",
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
  button: {
    padding: "10px 20px",
    backgroundColor: "#2d87ef", // Elegant blue button
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#1c5ba4", // Slightly darker blue on hover
  },
};

AddCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default AddCampusView;
