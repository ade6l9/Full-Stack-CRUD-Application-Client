import { connect } from "react-redux";
import { fetchCampusThunk, updateCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";



const mapState = (state) => {
  return {
    campus: state.campus, // Adjust based on your reducer structure
  };
};

// const mapDispatch = (dispatch) => ({
//     fetchCampus: (id) => dispatch(fetchCampusThunk(id)), // Correct mapping
//     updateCampus: (id, campus) => dispatch(updateCampusThunk(id, campus)),
//   });
const mapDispatch = (dispatch) => ({
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)), // Use fetchCampusThunk
    updateCampus: (id, campus) => dispatch(updateCampusThunk(id, campus)),
  });
  

export default connect(mapState, mapDispatch)(EditCampusView);
