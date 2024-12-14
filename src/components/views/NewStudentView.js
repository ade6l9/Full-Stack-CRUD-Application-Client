// /*==================================================
// NewStudentView.js

// The Views component is responsible for rendering web page with data provided by the corresponding Container component.
// It constructs a React component to display the new student page.
// ================================================== */

import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none',
    marginBottom: '20px',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginBottom: '10px',
  },
  label: {
    color: '#11153e',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
}));

const NewStudentView = ({ newStudent, errors, blankFieldError, handleChange, handleSubmit, handleCancel }) => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.title}>New Student</h1>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            Add a Student
          </Typography>
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
          <p>Campus Name: {newStudent.campusName}</p>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
          <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
        </form>
      </div>
    </div>
  );
};

export default NewStudentView;