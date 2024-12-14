/*==================================================
EditCampusContainer.js

This file serves as the container for the "Edit Campus" page.
It connects the Redux store to the EditCampusView component.
It is responsible for fetching and updating campus data by dispatching actions.
==================================================*/

import { connect } from "react-redux";
import { fetchCampusThunk, updateCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
import Header from "./Header"; // Include the Header component

const mapState = (state) => {
  return {
    campus: state.campus, 
  };
};

const mapDispatch = (dispatch) => ({
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)), 
    updateCampus: (id, campus) => dispatch(updateCampusThunk(id, campus)),
});

// Include the Header component in the render output
const EditCampusContainer = (props) => {
  return (
    <div>
      <Header /> {/* Render the Header at the top of the page */}
      <EditCampusView {...props} />
    </div>
  );
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
