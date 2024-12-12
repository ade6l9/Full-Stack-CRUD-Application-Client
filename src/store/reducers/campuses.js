/*==================================================
/src/store/reducers/campuses.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import * as at from "../actions/actionTypes";  // Import Action Types ("at" keyword for Action Type)

// REDUCER:
const allCampusesReducer = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_CAMPUSES:
      // Ensure campuses are sorted when fetched
      return action.payload.sort((a, b) => a.id - b.id);
    case at.ADD_CAMPUS:
      return [...state, action.payload].sort((a, b) => a.id - b.id);
    case at.DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.payload); // Remove campus by ID
    default:
      return state;
  }
};

export default allCampusesReducer;