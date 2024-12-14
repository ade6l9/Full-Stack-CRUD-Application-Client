import { connect } from "react-redux";
import { fetchCampusThunk, updateCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";



const mapState = (state) => {
  return {
    campus: state.campus, 
  };
};

const mapDispatch = (dispatch) => ({
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)), 
    updateCampus: (id, campus) => dispatch(updateCampusThunk(id, campus)),
  });
  

export default connect(mapState, mapDispatch)(EditCampusView);
