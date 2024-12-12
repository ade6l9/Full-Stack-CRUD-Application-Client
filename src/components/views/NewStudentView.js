// /*==================================================
// NewStudentView.js

// The Views component is responsible for rendering web page with data provided by the corresponding Container component.
// It constructs a React component to display the new student page.
// ================================================== */
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// // Create styling for the input form
// const useStyles = makeStyles( () => ({
//   formContainer:{  
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//     textDecoration: 'none'
//   }, 
//   customizeAppBar:{
//     backgroundColor: '#11153e',
//     shadows: ['none'],
//   },
//   formTitle:{
//     backgroundColor:'#c5c8d6',
//     marginBottom: '15px',
//     textAlign: 'center',
//     borderRadius: '5px 5px 0px 0px',
//     padding: '3px'
//   },
// }));

// const NewStudentView = (props) => {
//   const {handleChange, handleSubmit } = props;
//   const classes = useStyles();

//   // Render a New Student view with an input form
//   return (
//     <div>
//       <h1>New Student</h1>

//       <div className={classes.root}>
//         <div className={classes.formContainer}>
//           <div className={classes.formTitle}>
//             <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
//               Add a Student
//             </Typography>
//           </div>
//           <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
//             <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
//             <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
//             <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
//             <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <Button variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//             <br/>
//             <br/>
//           </form>
//           </div>
//       </div>
//     </div>    
//   )
// }

// export default NewStudentView;





////// new try 

/*==================================================
NewStudentView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// // Create styling for the input form
// const useStyles = makeStyles(() => ({
//   formContainer: {
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//     padding: '20px',
//   },
//   title: {
//     textAlign: 'center',
//     fontFamily: 'Courier, sans-serif',
//     fontSize: '20px',
//     color: '#11153e',
//   },
//   errorMessage: {
//     color: 'red',
//     fontSize: '0.8em',
//     marginBottom: '10px',
//   },
//   inputField: {
//     width: '100%',
//     height: '40px',
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   submitButton: {
//     width: '100%',
//     height: '40px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// }));

// const NewStudentView = ({ handleChange, handleSubmit, studentData }) => {
//   const classes = useStyles();

//   // Check if the form is valid
//   const isFormValid = () => {
//     return (
//       studentData.firstname &&
//       studentData.lastname &&
//       studentData.email &&
//       studentData.gpa !== undefined && // Ensure GPA is provided
//       studentData.campusId !== undefined && // Ensure Campus ID is provided
//       studentData.imageUrl
//     );
//   };

//   return (
//     <div className={classes.formContainer}>
//       <Typography className={classes.title}>Add New Student</Typography>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstname"
//           value={studentData.firstname}
//           onChange={handleChange}
//           placeholder="First Name"
//           className={classes.inputField}
//           required
//         />
//         {studentData.errors?.firstname && (
//           <div className={classes.errorMessage}>
//             {studentData.errors.firstname}
//           </div>
//         )}
//         <input
//           type="text"
//           name="lastname"
//           value={studentData.lastname}
//           onChange={handleChange}
//           placeholder="Last Name"
//           className={classes.inputField}
//           required
//         />
//         {studentData.errors?.lastname && (
//           <div className={classes.errorMessage}>
//             {studentData.errors.lastname}
//           </div>
//         )}
//         <input
//           type="email"
//           name="email"
//           value={studentData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className={classes.inputField}
//           required
//         />
//         {studentData.errors?.email && (
//           <div className={classes.errorMessage}>
//             {studentData.errors.email}
//           </div>
//         )}
//         <input
//           type="number"
//           name="gpa"
//           value={studentData.gpa}
//           onChange={handleChange}
//           placeholder="GPA"
//           className={classes.inputField}
//           required
//           min="0"
//           max="4"
//         />
//         {studentData.errors?.gpa && (
//           <div className={classes.errorMessage}>
//             {studentData.errors.gpa}
//           </div>)}
//         <input
//           type="text"
//           name="campusId"
//           value={studentData.campusId}
//           onChange={handleChange}
//           placeholder="Campus ID"
//           className={classes.inputField}
//           required
//         />
//         {studentData.errors?.campusId && (
//           <div className={classes.errorMessage}>
//             {studentData.errors.campusId}
//           </div>
//         )}
//         <input
//           type="text"
//           name="imageUrl"
//           value={studentData.imageUrl}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className={classes.inputField}
//         />
//         {studentData.errors?.imageUrl && (
//           <div className={classes.errorMessage}>
//             {studentData.errors.imageUrl}
//           </div>
//         )}
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className={classes.submitButton}
//           disabled={!isFormValid()} // Disable button if form is invalid
//         >
//           Add Student
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default NewStudentView;








/// new new new try bismilah

// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { useHistory } from 'react-router-dom';
// import { addStudent } from '../../store/actions/actionCreators';
// import { useDispatch } from 'react-redux';

// // Create styling for the input form
// const useStyles = makeStyles(() => ({
//   formContainer: {
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//     padding: '20px',
//   },
//   title: {
//     textAlign: 'center',
//     fontFamily: 'Courier, sans-serif',
//     fontSize: '20px',
//     color: '#11153e',
//   },
//   inputField: {
//     width: '100%',
//     height: '40px',
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   submitButton: {
//     width: '100%',
//     height: '40px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// }));

// const NewStudentView = () => {
//   const classes = useStyles();
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [studentData, setStudentData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     gpa: '',
//     campusId: '',
//     imageUrl: '',
//   });

//   const handleChange = (event) => {
//     setStudentData({ ...studentData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!studentData.firstname || !studentData.lastname || !studentData.email) {
//       alert("Please fill in all fields");
//       return;
//     }
//     dispatch(addStudent(studentData));
//     history.goBack();
//   };

//   return (
//     <div className={classes.formContainer}>
//       <Typography className={classes.title}>Add New Student</Typography>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstname"
//           value={studentData.firstname}
//           onChange={handleChange}
//           placeholder="First Name"
//           className={classes.inputField}
//         />
//         <br />
//         <input
//           type="text"
//           name="lastname"
//           value={studentData.lastname}
//           onChange={handleChange}
//           placeholder="Last Name"
//           className={classes.inputField}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={studentData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className={classes.inputField}
//         />
//         <br />
//         <input
//           type="number"
//           name="gpa"
//           value={studentData.gpa}
//           onChange={handleChange}
//           placeholder="GPA"
//           className={classes.inputField}
//         />
//         <br />
//         <input
//           type="text"
//           name="campusId"
//           value={studentData.campusId}
//           onChange={handleChange}
//           placeholder="Campus ID"
//           className={classes.inputField}
//         />
//         <br />
//         <input
//           type="text"
//           name="imageUrl"
//           value={studentData.imageUrl}
//           onChange={handleChange}
//           placeholder="Image URL"
//           className={classes.inputField}
//         />
//         <br />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           className={classes.submitButton}
//         >
//           Add Student
//         </Button>
//       </form>
//     </div>
//   );
// };















//this works
// export default NewStudentView;
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//     padding: '20px',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//     textDecoration: 'none',
//     marginBottom: '20px',
//   },
//   formTitle: {
//     backgroundColor: '#c5c8d6',
//     marginBottom: '15px',
//     textAlign: 'center',
//     borderRadius: '5px 5px 0px 0px',
//     padding: '3px',
//   },
//   inputField: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   error: {
//     color: 'red',
//     fontSize: '12px',
//     marginBottom: '10px',
//   },
//   label: {
//     color: '#11153e',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
// }));

// const NewStudentView = () => {
//   const history = useHistory();

//   const handleCancel = () => {
//   history.goBack();};
//   const classes = useStyles();
//   const [newStudent, setNewStudent] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     imageurl: '',
//     gpa: '',
//     campusId: '',
//   });
//   const [errors, setErrors] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     imageurl: '',
//     gpa: '',
//     campusId: '',
//   });
//   const [blankFieldError, setBlankFieldError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewStudent({ ...newStudent, [name]: value });
//     validateField(name, value);
//   };

//   const validateField = (fieldName, value) => {
//     let error = '';
//     if (fieldName === 'firstname' || fieldName === 'lastname') {
//       if (value.length < 2) {
//         error = 'Name must be at least 2 characters long';
//       }
//     } else if (fieldName === 'email') {
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//       if (!emailRegex.test(value)) {
//         error = 'Invalid email address';
//       }
//     } else if (fieldName === 'gpa') {
//       if (value < 0 || value > 4) {
//         error = 'GPA must be between 0 and 4';
//       }
//     } else if (fieldName === 'campusId') {
//       if (value.length < 5) {
//         error = 'Campus ID must be at least 5 characters long';
//       }
//     } else if (fieldName === 'imageurl') {
//       if (!value.startsWith('http')) {
//         error = 'Image URL must start with http';
//       }
//     }
//     setErrors({ ...errors, [fieldName]: error });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const requiredFields = ['firstname', 'lastname', 'email', 'gpa'];
//     const blankFields = requiredFields.filter((field) => newStudent[field] === '');
//     if (blankFields.length > 0) {
//       setBlankFieldError(`Please fill in the following fields: ${blankFields.join(', ')}`);
//     } else if (Object.values(errors).every((error) => error === '')) {
//       axios.post('/api/students', newStudent)
//         .then((response) => {
//           console.log(response.data);
//           history.goBack();
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h1 className={classes.title}>New Student</h1>

//       <div className={classes.formContainer}>
//         <div className={classes.formTitle}>
//           <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
//             Add a Student
//           </Typography>
//         </div>
//         {blankFieldError && <div className={classes.error}>{blankFieldError}</div>}
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className={classes.label}>First Name:</label>
//             <input
//               type="text"
//               name="firstname"
//               value={newStudent.firstname}
//               onChange={handleChange}
//               className={classes.inputField}
//             />
//             {errors.firstname && <div className={classes.error }>{errors.firstname}</div>}
//           </div>
//           <div>
//             <label className={classes.label}>Last Name:</label>
//             <input
//               type="text"
//               name="lastname"
//               value={newStudent.lastname}
//               onChange={handleChange}
//               className={classes.inputField}
//             />
//             {errors.lastname && <div className={classes.error}>{errors.lastname}</div>}
//           </div>
//           <div>
//             <label className={classes.label}>Email:</label>
//             <input
//               type="text"
//               name="email"
//               value={newStudent.email}
//               onChange={handleChange}
//               className={classes.inputField}
//             />
//             {errors.email && <div className={classes.error}>{errors.email}</div>}
//           </div>
//           <div>
//             <label className={classes.label}>Image URL:</label>
//             <input
//               type="text"
//               name="imageurl"
//               value={newStudent.imageurl}
//               onChange={handleChange}
//               className={classes.inputField}
//             />
//             {errors.imageurl && <div className={classes.error}>{errors.imageurl}</div>}
//           </div>
//           <div>
//             <label className={classes.label}>GPA:</label>
//             <input
//               type="number"
//               name="gpa"
//               value={newStudent.gpa}
//               onChange={handleChange}
//               className={classes.inputField}
//             />
//             {errors.gpa && <div className={classes.error}>{errors.gpa}</div>}
//           </div>
//           <div>
//             <label className={classes.label}>Campus ID:</label>
//             <input
//               type="text"
//               name="campusId"
//               value={newStudent.campusId}
//               onChange={handleChange}
//               className={classes.inputField}
//             />
//             {errors.campusId && <div className={classes.error}>{errors.campusId}</div>}
//           </div>
//           <Button type="submit" variant="contained" color="primary">Submit</Button>
//           <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewStudentView;

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