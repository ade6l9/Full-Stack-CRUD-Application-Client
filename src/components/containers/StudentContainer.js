// /*==================================================
// StudentContainer.js

// The Container component is responsible for stateful logic and data fetching, and
// passes data (if any) as props to the corresponding View component.
// If needed, it also defines the component's "connect" function.
// ================================================== */

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
    fetchStudent(id); // Fetch student data based on ID from URL
  }, [id, fetchStudent]);

  useEffect(() => {
    if (student?.campusId) {
      fetchCampus(student.campusId); // Fetch campus data for the associated student
    }
  }, [student, fetchCampus]);

  console.log('StudentContainer: student prop:', student);
  console.log('StudentContainer: campus prop:', campus);

  if (!student) {
    return <div>Loading student data...</div>;
  }

  return (
    <div>
      {/* Include the shared Header */}
      <Header />

      {/* Render the StudentView component */}
      <StudentView
        student={student}
        campus={campus}
        fetchStudent={fetchStudent}
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
