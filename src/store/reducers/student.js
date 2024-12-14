// /*==================================================
// /src/store/reducers/student.js

// This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
// Depending on the Action object, the Reducer updates the State and return the new State object.
// It also defines the State and its default initial value.
// ================================================== */
// import { FETCH_STUDENT } from "../actions/actionTypes";  // Import Action Type
import * as at from "../actions/actionTypes"; 
// REDUCER:
const initialState = null;

const student = (state = initialState, action) => {
  switch (action.type) {
    case at.FETCH_STUDENT:
      console.log('FETCH_STUDENT action payload:', action.payload); // Debug log
      return action.payload; // Update state with the fetched student
    default:
      return state;
  }
};

export default student;



