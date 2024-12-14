// /*==================================================
// NewStudentContainer.js

// The Container component is responsible for stateful logic and data fetching, and
// passes data (if any) as props to the corresponding View component.
// If needed, it also defines the component's "connect" function.
// ================================================== */

import Header from './Header';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NewStudentView from '../views/NewStudentView';


const NewStudentContainer = () => {
  const history = useHistory();
  const [newStudent, setNewStudent] = useState({
    firstname: '',
    lastname: '',
    email: '',
    imageurl: '',
    gpa: '',
    campusId: '',
  });
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    imageurl: '',
    gpa: '',
    campusId: '',
  });
  const [blankFieldError, setBlankFieldError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'campusId') {
      axios.get(`/api/campuses/${value}`)
        .then((response) => {
          const campusName = response.data.name;
          setNewStudent((prevState) => ({
            ...prevState,
            [name]: value, // Update campusId
            campusName,    // Update campusName
          }));
        })
        .catch((error) => {
          console.error(error);
          setNewStudent((prevState) => ({
            ...prevState,
            [name]: value, // Still update campusId even if the request fails
            campusName: '', // Clear campusName in case of an error
          }));
        });
    } else {
      setNewStudent((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      validateField(name, value); // Validate other fields
    }
  };
  
  
  const validateField = (fieldName, value) => {
    let error = '';
    if (fieldName === 'firstname' || fieldName === 'lastname') {
      if (value.length < 2) {
        error = 'Name must be at least 2 characters long';
      }
    } else if (fieldName === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        error = 'Invalid email address';
      }
    } else if (fieldName === 'gpa') {
      if (value < 0 || value > 4) {
        error = 'GPA must be between 0 and 4';
      }
    } else if (fieldName === 'imageurl') {
      if (!value.startsWith('http')) {
        error = 'Image URL must start with http';
      }
    }
    setErrors({ ...errors, [fieldName]: error });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['firstname', 'lastname', 'email', 'gpa'];
    const blankFields = requiredFields.filter((field) => newStudent[field] === '');
    if (blankFields.length > 0) {
      setBlankFieldError(`Please fill in the following fields: ${blankFields.join(', ')}`);
    } else if (Object.values(errors).every((error) => error === '')) {
      axios.post('/api/students', newStudent)
        .then((response) => {
          console.log(response.data);
          history.goBack();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div>
    {/* Include the shared Header */}
    <Header />
    <NewStudentView
      newStudent={newStudent}
      errors={errors}
      blankFieldError={blankFieldError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  </div>
  );
};

export default NewStudentContainer;

