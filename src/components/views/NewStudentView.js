/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */

import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/02/hogwarts-legacy-2951560.jpg?tf=3840x')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  formContainer: {
    width: "500px",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  formTitle: {
    backgroundColor: "#5a5a5a", // Neutral dark gray
    color: "#ffffff", // White text
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px 8px 0 0",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "20px",
    marginBottom: "20px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    backgroundColor: "#f9f9f9", // Light neutral background
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  label: {
    color: "#333333",
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "16px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
    textTransform: "capitalize",
    backgroundColor: "#d3d3d3", // Neutral gray
    color: "#000000", // Black text
    "&:hover": {
      backgroundColor: "#b0b0b0", // Slightly darker gray on hover
    },
  },
}));

const NewStudentView = ({
  newStudent,
  errors,
  blankFieldError,
  handleChange,
  handleSubmit,
  handleCancel,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography variant="h6">Add a Student</Typography>
        </div>
        {blankFieldError && <div className={classes.error}>{blankFieldError}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            value={newStudent.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className={classes.inputField}
          />
          {errors.firstname && <div className={classes.error}>{errors.firstname}</div>}

          <input
            type="text"
            name="lastname"
            value={newStudent.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className={classes.inputField}
          />
          {errors.lastname && <div className={classes.error}>{errors.lastname}</div>}

          <input
            type="email"
            name="email"
            value={newStudent.email}
            onChange={handleChange}
            placeholder="Email"
            className={classes.inputField}
          />
          {errors.email && <div className={classes.error}>{errors.email}</div>}

          <input
            type="text"
            name="imageurl"
            value={newStudent.imageurl}
            onChange={handleChange}
            placeholder="Image URL"
            className={classes.inputField}
          />
          {errors.imageurl && <div className={classes.error}>{errors.imageurl}</div>}

          <input
            type="number"
            name="gpa"
            value={newStudent.gpa}
            onChange={handleChange}
            placeholder="GPA"
            className={classes.inputField}
          />
          {errors.gpa && <div className={classes.error}>{errors.gpa}</div>}

          <input
            type="number"
            name="campusId"
            value={newStudent.campusId}
            onChange={handleChange}
            placeholder="Campus ID"
            className={classes.inputField}
          />
          {errors.campusId && <div className={classes.error}>{errors.campusId}</div>}

          <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Campus Name: {newStudent.campusName}
          </p>

          <div className={classes.buttonGroup}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewStudentView;
