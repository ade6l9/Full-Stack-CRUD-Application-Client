// /*==================================================
// NewStudentContainer.js

// The Container component is responsible for stateful logic and data fetching, and
// passes data (if any) as props to the corresponding View component.
// If needed, it also defines the component's "connect" function.
// ================================================== */
// import Header from './Header';
// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// import NewStudentView from '../views/NewStudentView';
// import { addStudentThunk } from '../../store/thunks';

// class NewStudentContainer extends Component {
//   // Initialize state
//   constructor(props){
//     super(props);
//     this.state = {
//       firstname: "", 
//       lastname: "", 
//       campusId: null, 
//       redirect: false, 
//       redirectId: null
//     };
//   }

//   // Capture input data when it is entered
//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   // Take action after user click the submit button
//   handleSubmit = async event => {
//     event.preventDefault();  // Prevent browser reload/refresh after submit.

//     let student = {
//         firstname: this.state.firstname,
//         lastname: this.state.lastname,
//         campusId: this.state.campusId
//     };
    
//     // Add new student in back-end database
//     let newStudent = await this.props.addStudent(student);

//     // Update state, and trigger redirect to show the new student
//     this.setState({
//       firstname: "", 
//       lastname: "", 
//       campusId: null, 
//       redirect: true, 
//       redirectId: newStudent.id
//     });
//   }

//   // Unmount when the component is being removed from the DOM:
//   componentWillUnmount() {
//       this.setState({redirect: false, redirectId: null});
//   }

//   // Render new student input form
//   render() {
//     // Redirect to new student's page after submit
//     if(this.state.redirect) {
//       return (<Redirect to={`/student/${this.state.redirectId}`}/>)
//     }

//     // Display the input form via the corresponding View component
//     return (
//       <div>
//         <Header />
//         <NewStudentView 
//           handleChange = {this.handleChange} 
//           handleSubmit={this.handleSubmit}      
//         />
//       </div>          
//     );
//   }
// }

// // The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// // The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//     return({
//         addStudent: (student) => dispatch(addStudentThunk(student)),
//     })
// }

// // Export store-connected container by default
// // NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// // (and re-read the values when the Store State updates).
// export default connect(null, mapDispatch)(NewStudentContainer);











/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
// import React, { Component } from 'react';
// import Header from './Header';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import NewStudentView from '../views/NewStudentView';
// import { addStudentThunk, fetchAllStudentsThunk } from '../../store/thunks'; // Import the fetch action

// class NewStudentContainer extends Component {
//   // Initialize state
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: "",
//       lastname: "",
//       email: "",
//       gpa: "",
//       campusId: null,
//       imageUrl: "",
//       redirect: false,
//       redirectId: null,
//       errors: {}, // To handle form errors
//     };
//   }

//   // Capture input data when it is entered
//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   // Take action after user clicks the submit button
//   handleSubmit = async event => {
//     event.preventDefault();  // Prevent browser reload/refresh after submit.

//     const { firstname, lastname, email, gpa, campusId, imageUrl } = this.state;
//     let student = {
//       firstname,
//       lastname,
//       email,
//       gpa,
//       campusId,
//       imageUrl
//     };

//     try {
//       // Add new student in back-end database
//       let newStudent = await this.props.addStudent(student);

//       // Update state, and trigger redirect to show the new student
//       this.setState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         gpa: "",
//         campusId: null,
//         imageUrl: "",
//         redirect: true,
//         redirectId: newStudent.id
//       });
//     } catch (error) {
//       // Handle errors from the API
//       if (error.response && error.response.data.errors) {
//         this.setState({ errors: error.response.data.errors });
//       } else {
//         console.error('There was an error adding the student!', error);
//         this.setState({ errors: { general: 'An error occurred. Please try again.' } });
//       }
//     }
//   }

//   // Fetch students when the component mounts
//   componentDidMount() {
//     this.props.fetchAllStudents(); // Fetch students from the database
//   }

//   // Unmount when the component is being removed from the DOM:
//   componentWillUnmount() {
//     this.setState({ redirect: false, redirectId: null });
//   }

//   // Render new student input form
//   render() {
//     // Redirect to new student's page after submit
//     if (this.state.redirect) {
//       return (<Redirect to={`/student/${this.state.redirectId}`} />);
//     }

//     // Display the input form via the corresponding View component
//     return (
//       <div>
//         <Header />
//         <NewStudentView
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//           studentData={this.state} // Pass the state to the view for controlled inputs
//           errors={this.state.errors} // Pass errors to the view if needed
//         />
//       </div>
//     );
//   }
// }

// // Map dispatch to props
// const mapDispatch = (dispatch) => {
//   return {
//     addStudent: (student) => dispatch(addStudentThunk(student)),
//     fetchAllStudents: () => dispatch(fetchAllStudentsThunk()), // Add fetch action
//   };
// }

// // Export store-connected container by default
// export default connect(null, mapDispatch)(NewStudentContainer);




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

