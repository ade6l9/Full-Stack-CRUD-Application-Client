/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { addStudentThunk } from "../../store/thunks";
// import { removeStudentFromCampusThunk } from "../../store/thunks";



// const CampusView = (props) => {
//   const {
//     campus,
//     deleteStudent,
//     allStudents,
//     updateStudent,
//   } = props;

//   // Track whether to show the forms
//   const [showNewStudentForm, setShowNewStudentForm] = useState(false);
//   const [showExistingStudentForm, setShowExistingStudentForm] = useState(false);

//   // Handle new student form state
//   const [newStudent, setNewStudent] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     gpa: "",
//     campusId: campus.id,
//   });

//   const [selectedStudent, setSelectedStudent] = useState("");

//   // // Handle new student form submission
//   // const handleNewStudentSubmit = (e) => {
//   //   e.preventDefault();
//   //   createStudent(newStudent);
//   //   setNewStudent({ firstname: "", lastname: "", email: "", gpa: "", campusId: campus.id });
//   //   setShowNewStudentForm(false); // Hide the form after submission
//   // };
//    // Handle new student form submission
//    const handleNewStudentSubmit = async (e) => {
//     e.preventDefault();
//     const addedStudent = await addStudentThunk(newStudent); // Call the thunk
//     if (addedStudent) {
//       setNewStudent({ firstname: "", lastname: "", email: "", gpa: "", campusId: campus.id });
//       setShowNewStudentForm(false); // Hide the form
//     }
//   };

//   // Handle adding existing student
//   const handleAddExistingStudent = (e) => {
//     e.preventDefault();
//     if (selectedStudent) {
//       updateStudent(selectedStudent, { campusId: campus.id });
//       setSelectedStudent("");
//       setShowExistingStudentForm(false); // Hide the form after submission
//     }
//   };

//   return (
//     <div>
//       <h1>{campus.name}</h1>
//       <p>{campus.address}</p>
//       <p>{campus.description}</p>
//       <img
//         src={campus.imageUrl || "https://via.placeholder.com/150"}
//         alt={`${campus.name} campus`}
//         style={{ width: "300px", height: "auto" }}
//       />
//       <br />

//       <h2>Enrolled Students:</h2>
//       {campus.students && campus.students.length > 0 ? (
//   campus.students.map((student) => (
//     <div key={student.id}>
//       <Link to={`/student/${student.id}`}>
//         <h3>{`${student.firstname} ${student.lastname}`}</h3>
//       </Link>
//       <button onClick={() => deleteStudent(student.id, campus.id)}>
//         Remove Student
//       </button>

//     </div>
//   ))
// ) : (
//   <p>No students are currently enrolled at this campus.</p>
// )}


//       <br />

//       {/* Buttons to trigger the forms */}
//       <button onClick={() => setShowNewStudentForm(!showNewStudentForm)}>
//         {showNewStudentForm ? "Cancel Add New Student" : "Add New Student"}
//       </button>
//       <br />
//       <button onClick={() => setShowExistingStudentForm(!showExistingStudentForm)}>
//         {showExistingStudentForm ? "Cancel Add Existing Student" : "Add Existing Student"}
//       </button>

//       {/* New Student Form */}
//       {showNewStudentForm && (
//         <form onSubmit={handleNewStudentSubmit}>
//           <h2>Add New Student</h2>
//           <label>
//             First Name:
//             <input
//               type="text"
//               value={newStudent.firstname}
//               onChange={(e) => setNewStudent({ ...newStudent, firstname: e.target.value })}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Last Name:
//             <input
//               type="text"
//               value={newStudent.lastname}
//               onChange={(e) => setNewStudent({ ...newStudent, lastname: e.target.value })}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input
//               type="email"
//               value={newStudent.email}
//               onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
//               required
//             />
//           </label>
//           <br />
//           <label>
//             GPA:
//             <input
//               type="number"
//               step="0.01"
//               value={newStudent.gpa}
//               onChange={(e) => setNewStudent({ ...newStudent, gpa: e.target.value })}
//             />
//           </label>
//           <br />
//           <button type="submit">Add Student</button>
//         </form>
//       )}

//       {/* Existing Student Dropdown */}
//       {showExistingStudentForm && (
//         <form onSubmit={handleAddExistingStudent}>
//           <h2>Add Existing Student</h2>
//           <label>
//             Select Student:
//             <select
//               value={selectedStudent}
//               onChange={(e) => setSelectedStudent(e.target.value)}
//               required
//             >
//               <option value="">-- Select a Student --</option>
//               {allStudents &&
//                 allStudents
//                   .filter((student) => !student.campusId) // Only show students not already enrolled
//                   .map((student) => (
//                     <option key={student.id} value={student.id}>
//                       {`${student.firstname} ${student.lastname}`}
//                     </option>
//                   ))}
//             </select>
//           </label>
//           <br />
//           <button type="submit">Add to Campus</button>
//         </form>
//       )}

//       <br />
//       <Link to={`/editcampus/${campus.id}`}>
//         <button>Edit Campus</button>
//       </Link>
//     </div>
//   );
// };

// export default CampusView;


/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */

import { useState } from "react";
import { Link } from "react-router-dom";
import { addStudentThunk } from "../../store/thunks";

const CampusView = (props) => {
  const {
    campus,
    allStudents,
    updateStudent,
    removeStudentFromCampus, // Updated: Pass removeStudentFromCampusThunk as a prop
  } = props;

  // Track whether to show the forms
  const [showNewStudentForm, setShowNewStudentForm] = useState(false);
  const [showExistingStudentForm, setShowExistingStudentForm] = useState(false);

  // Handle new student form state
  const [newStudent, setNewStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gpa: "",
    campusId: campus.id,
  });

  const [selectedStudent, setSelectedStudent] = useState("");

  // Handle new student form submission
  const handleNewStudentSubmit = async (e) => {
    e.preventDefault();
    const addedStudent = await addStudentThunk(newStudent); // Call the thunk
    if (addedStudent) {
      setNewStudent({ firstname: "", lastname: "", email: "", gpa: "", campusId: campus.id });
      setShowNewStudentForm(false); // Hide the form
    }
  };

  // Handle adding existing student
  const handleAddExistingStudent = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      updateStudent(selectedStudent, { campusId: campus.id });
      setSelectedStudent("");
      setShowExistingStudentForm(false); // Hide the form after submission
    }
  };

  // New: Handle removing a student from the campus
  const handleRemoveStudent = async (studentId) => {
    await removeStudentFromCampus(studentId, campus.id); // Call the thunk
  };

  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <img
        src={campus.imageUrl || "https://via.placeholder.com/150"}
        alt={`${campus.name} campus`}
        style={{ width: "300px", height: "auto" }}
      />
      <br />

      <h2>Enrolled Students:</h2>
      {campus.students && campus.students.length > 0 ? (
        campus.students.map((student) => (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h3>{`${student.firstname} ${student.lastname}`}</h3>
            </Link>
            <button onClick={() => handleRemoveStudent(student.id)}>
              Remove Student
            </button>
          </div>
        ))
      ) : (
        <p>No students are currently enrolled at this campus.</p>
      )}

      <br />

      {/* Buttons to trigger the forms */}
      <button onClick={() => setShowNewStudentForm(!showNewStudentForm)}>
        {showNewStudentForm ? "Cancel Add New Student" : "Add New Student"}
      </button>
      <br />
      <button onClick={() => setShowExistingStudentForm(!showExistingStudentForm)}>
        {showExistingStudentForm ? "Cancel Add Existing Student" : "Add Existing Student"}
      </button>

      {/* New Student Form */}
      {showNewStudentForm && (
        <form onSubmit={handleNewStudentSubmit}>
          <h2>Add New Student</h2>
          <label>
            First Name:
            <input
              type="text"
              value={newStudent.firstname}
              onChange={(e) => setNewStudent({ ...newStudent, firstname: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={newStudent.lastname}
              onChange={(e) => setNewStudent({ ...newStudent, lastname: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            GPA:
            <input
              type="number"
              step="0.01"
              value={newStudent.gpa}
              onChange={(e) => setNewStudent({ ...newStudent, gpa: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Add Student</button>
        </form>
      )}

      {/* Existing Student Dropdown */}
      {showExistingStudentForm && (
        <form onSubmit={handleAddExistingStudent}>
          <h2>Add Existing Student</h2>
          <label>
            Select Student:
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              required
            >
              <option value="">-- Select a Student --</option>
              {allStudents &&
                allStudents
                  .filter((student) => !student.campusId) // Only show students not already enrolled
                  .map((student) => (
                    <option key={student.id} value={student.id}>
                      {`${student.firstname} ${student.lastname}`}
                    </option>
                  ))}
            </select>
          </label>
          <br />
          <button type="submit">Add to Campus</button>
        </form>
      )}

      <br />
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
    </div>
  );
};

export default CampusView;

