// /*==================================================
// /src/store/thunks.js

// It contains all Thunk Creators and Thunks.
// ================================================== */
// import * as ac from './actions/actionCreators';  // Import Action Creators ("ac" keyword Action Creator)
// const axios = require('axios');

// //All Campuses
// // THUNK CREATOR:
// export const fetchAllCampusesThunk = () => async (dispatch) => {  // The THUNK
//   try {
//     // API "get" call to get "campuses" data from database
//     let res = await axios.get(`/api/campuses`);  
//     // Call Action Creator to return Action object (type + payload with "campuses" data)
//     // Then dispatch the Action object to Reducer to update state 
//     dispatch(ac.fetchAllCampuses(res.data));
//   } catch(err) {
//     console.error(err);
//   }
// };

// // Single Campus
// // THUNK CREATOR:
// export const fetchCampusThunk = (id) => async (dispatch) => {  // The THUNK
//   try {
//     // API "get" call to get a student data (based on "id")from database
//     let res = await axios.get(`/api/campuses/${id}`);  
//     dispatch(ac.fetchCampus(res.data));
//   } catch(err) {
//     console.error(err);
//   }
// };

// // All Students
// // THUNK CREATOR:
// export const fetchAllStudentsThunk = () => async (dispatch) => {  // The THUNK
//   try {
//     // API "get" call to get "students" data from database
//     let res = await axios.get(`/api/students`);  
//     // Call Action Creator to return Action object (type + payload with "students" data)
//     // Then dispatch the Action object to Reducer to update state 
//     dispatch(ac.fetchAllStudents(res.data));  
//   } catch(err) {
//     console.error(err);
//   }
// };

// // Add Student
// // THUNK CREATOR:
// export const addStudentThunk = (student) => async (dispatch) => {
//   try {
//     // Ensure imageUrl has a fallback
//     student.imageurl = student.imageurl || "https://via.placeholder.com/150"; 

//     console.log("Student payload:", student); // Debugging log

//     // API call to add student
//     let res = await axios.post(`/api/students`, student);

//     console.log("Response from backend:", res.data); // Debugging log

//     // Dispatch action to update state with new student
//     dispatch(ac.addStudent(res.data));

//     return res.data; // Return the added student data if needed
//   } catch (err) {
//     console.error("Error adding student:", err);
//     alert("Failed to add student. Please try again.");
//   }
// };

// // Delete Student
// // THUNK CREATOR:
// export const deleteStudentThunk = studentId => async dispatch => {  // The THUNK
//   try {
//     // API "delete" call to delete student (based on "studentID") from database
//     await axios.delete(`/api/students/${studentId}`);  
//     // Delete successful so change state with dispatch
//     dispatch(ac.deleteStudent(studentId));
//   } catch(err) {
//     console.error(err);
//   }
// };

// // Edit Student
// // THUNK CREATOR:
// export const editStudentThunk = student => async dispatch => {  // The THUNK
//   try {
//     // API "put" call to update student (based on "id" and "student" object's data) from database
//     let updatedStudent = await axios.put(`/api/students/${student.id}`, student); 
//     // Update successful so change state with dispatch
//     dispatch(ac.editStudent(updatedStudent));
//   } catch(err) {
//     console.error(err);
//   }
// };

// // Single Student
// // THUNK CREATOR:
// export const fetchStudentThunk = (id) => async (dispatch) => {
//   try {
//     console.log('Fetching student with ID:', id); // Debug log
//     const res = await axios.get(`/api/students/${id}`);
//     console.log('Student data:', res.data); // Debug log
//     dispatch(ac.fetchStudent(res.data));
//   } catch (err) {
//     console.error('Error in fetchStudentThunk:', err);
//   }
// };

// // Add Campus
// // THUNK CREATOR:
// export const addCampusThunk = (campus) => async (dispatch) => {
//   try {
//     // Ensure imageUrl has a fallback
//     campus.imageUrl = campus.imageUrl || "https://via.placeholder.com/150";

//     console.log("Campus payload:", campus); // Debugging log

//     // API call to add campus
//     let res = await axios.post(`/api/campuses`, campus);

//     console.log("Response from backend:", res.data); // Debugging log

//     // Dispatch action to update state with new campus
//     dispatch(ac.addCampus(res.data));

//     return res.data;
//   } catch (err) {
//     console.error("Error adding campus:", err);
//     alert("Failed to add campus. Please try again.");
//   }
// };

// // Delete Campus
// // THUNK CREATOR:
// export const deleteCampusThunk = (campusId) => async (dispatch) => {
//   try {
//     // Send DELETE request to the backend
//     await axios.delete(`/api/campuses/${campusId}`);

//     // Dispatch action to update the Redux store
//     dispatch(ac.deleteCampus(campusId));
//   } catch (err) {
//     console.error("Error deleting campus:", err);
//   }
// };

// // Edit Campus
// // THUNK CREATOR:
// export const updateCampusThunk = (campusId, updatedData) => async (dispatch) => {
//   try {
//     const { data: updatedCampus } = await axios.put(`/api/campuses/${campusId}`, updatedData);
//     dispatch(fetchCampusThunk(updatedCampus.id)); // Re-fetch the updated campus
//   } catch (error) {
//     console.error("Error updating campus:", error);
//   }
// };

// // Remove student from campus
// // THUNK CREATOR:
// export const removeStudentFromCampusThunk = (studentId, campusId) => async (dispatch) => {
//   try {
//     // Update the student's campusId to null
//     await axios.put(`/api/students/${studentId}`, { campusId: null });

//     // Refresh the campus data
//     dispatch(ac.fetchCampus(campusId));
//   } catch (error) {
//     console.error('Error removing student from campus:', error);
//   }
// };


const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5001"; 

export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${API_BASE_URL}/api/campuses`);  
    dispatch(ac.fetchAllCampuses(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${API_BASE_URL}/api/campuses/${id}`);  
    dispatch(ac.fetchCampus(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${API_BASE_URL}/api/students`);  
    dispatch(ac.fetchAllStudents(res.data));  
  } catch (err) {
    console.error(err);
  }
};

export const addStudentThunk = (student) => async (dispatch) => {
  try {
    student.imageurl = student.imageurl || "https://via.placeholder.com/150"; 
    let res = await axios.post(`${API_BASE_URL}/api/students`, student);
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch (err) {
    console.error("Error adding student:", err);
    alert("Failed to add student. Please try again.");
  }
};

export const deleteStudentThunk = (studentId) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/students/${studentId}`);  
    dispatch(ac.deleteStudent(studentId));
  } catch (err) {
    console.error(err);
  }
};

export const editStudentThunk = (student) => async (dispatch) => {
  try {
    let updatedStudent = await axios.put(`${API_BASE_URL}/api/students/${student.id}`, student); 
    dispatch(ac.editStudent(updatedStudent));
  } catch (err) {
    console.error(err);
  }
};

export const fetchStudentThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${API_BASE_URL}/api/students/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    campus.imageUrl = campus.imageUrl || "https://via.placeholder.com/150";
    let res = await axios.post(`${API_BASE_URL}/api/campuses`, campus);
    dispatch(ac.addCampus(res.data));
    return res.data;
  } catch (err) {
    console.error("Error adding campus:", err);
    alert("Failed to add campus. Please try again.");
  }
};

export const deleteCampusThunk = (campusId) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/campuses/${campusId}`);
    dispatch(ac.deleteCampus(campusId));
  } catch (err) {
    console.error("Error deleting campus:", err);
  }
};

export const updateCampusThunk = (campusId, updatedData) => async (dispatch) => {
  try {
    let { data: updatedCampus } = await axios.put(`${API_BASE_URL}/api/campuses/${campusId}`, updatedData);
    dispatch(fetchCampusThunk(updatedCampus.id)); 
  } catch (error) {
    console.error("Error updating campus:", error);
  }
};

export const removeStudentFromCampusThunk = (studentId, campusId) => async (dispatch) => {
  try {
    await axios.put(`${API_BASE_URL}/api/students/${studentId}`, { campusId: null });
    dispatch(ac.fetchCampus(campusId));
  } catch (error) {
    console.error('Error removing student from campus:', error);
  }
};
