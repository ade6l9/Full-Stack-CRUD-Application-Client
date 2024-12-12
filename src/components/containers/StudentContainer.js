/*==================================================
StudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
// import Header from './Header';
// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchStudentThunk } from "../../store/thunks";
// import { fetchCampusThunk } from "../../store/thunks";
// import { StudentView } from "../views";
// import { fetchCampus } from '../../store/actions/actionCreators';

// class StudentContainer extends Component {
//   // Get student data from back-end database
//   componentDidMount() {
//     //getting student ID from url
//     this.props.fetchStudent(this.props.match.params.id);
//   }

//   // Render Student view by passing student data as props to the corresponding View component
//   render() {
//     return (
//       <div>
//         <Header />
//         <StudentView student={this.props.student} />
//       </div>
//     );
//   }
// }

// // The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// // The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
// const mapState = (state) => {
//   return {
//     student: state.student,  // Get the State object from Reducer "student"
//     campus: state.campuses.find(campus => campus.id === state.student.campusId), // Get the campus data

//   };
// };
// // 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// // The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
// const mapDispatch = (dispatch) => {
//   return {
//     fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
//     fetchCampus:(id)  => dispatch(fetchCampusThunk(id)),
//   };
// };

// // Export store-connected container by default
// // StudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// // (and re-read the values when the Store State updates).
// export default connect(mapState, mapDispatch)(StudentContainer);








import Header from './Header';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import StudentView from '../views/StudentView';
import { 
  fetchStudentThunk, 
  fetchCampusThunk,
  deleteStudentThunk 
} from "../../store/thunks";

const StudentContainer = ({
  student, 
  campus, 
  fetchStudent, 
  fetchCampus,
  deleteStudent,
  history
}) => {
  const { id } = useParams();

  // Debug to ensure id is correct
  console.log('StudentContainer: useParams id:', id);

  useEffect(() => {
    fetchStudent(id);
  }, [id, fetchStudent]);

  useEffect(() => {
    if (student?.campusId) {
      fetchCampus(student.campusId);
    }
  }, [student, fetchCampus]);

  console.log('StudentContainer: student prop:', student);
  console.log('StudentContainer: campus prop:', campus);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Include the shared Header */}
      <Header />

      {/* Render the StudentView component */}
      <StudentView
        student={student}
        campus={campus}
        onDeleteStudent={(id) => {
          deleteStudent(id);
          history.push("/students"); // Redirect to the students list
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  student: state.student || null, // Ensure reducer state is mapped correctly
  campus: state.campus?.selectedCampus || null, // Ensure reducer state is mapped correctly
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentContainer));
