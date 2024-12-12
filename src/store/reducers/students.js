/*==================================================
/src/store/reducers/students.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
//import * as at from "../actions/actionTypes";  // Import Action Types ("at" keyword for Action Type)

//REDUCER:
// const initialState = {
//   students: [],
//   success: false, // Add success property
// };

// const allStudents = (state = initialState, action) => {
//   switch (action.type) {
//     case at.FETCH_ALL_STUDENTS:
//       return { ...state, students: action.payload, success: true }; // Update success as needed
//     case at.ADD_STUDENT:
//       return { ...state, students: [...state.students, action.payload], success: true };
//     case at.DELETE_STUDENT:
//       return { ...state, students: state.students.filter(student => student.id !== action.payload), success: true };
//     case at.EDIT_STUDENT:
//       return {
//         ...state,
//         students: state.students.map(student => 
//           student.id === action.payload.id ? action.payload : student
//         ),
//         success: true,
//       };
//     default:
//       return state; // Return the current state if action type is not recognized
//   }
// };

// export default allStudents;

import * as at from "../actions/actionTypes";
const initialState = [];

const allStudents = (state = initialState, action) => {
  switch (action.type) {
    case at.FETCH_ALL_STUDENTS:
      return action.payload.sort((a, b) => a.id - b.id);
    case at.ADD_STUDENT:
      return [...state, action.payload].sort((a, b) => a.id - b.id);
    case at.DELETE_STUDENT:
      return state.filter(student => student.id !== action.payload);
    default:
      return state;
  }
};

export default allStudents;

