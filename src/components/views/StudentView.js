/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
// StudentView.js



/*==================================================
StudentView.js

The Views component is responsible for rendering a web page with data provided by the corresponding Container component.
It constructs a React component to display a single student and their enrolled campus (if any).
================================================== */
// import { Link } from "react-router-dom";

// // Take in props data to construct the component
// const StudentView = (props) => {
//   const { student, addCampus } = props;

//   // Render a single Student view with their campus
//   return (
//     <div>
//       <h1>{`${student.firstname} ${student.lastname}`}</h1>
//       <p>Email: {student.email}</p>
//       <p>GPA: {student.gpa || "N/A"}</p>
//       <img
//         src={student.imageurl || "https://via.placeholder.com/150"}
//         alt={`${student.firstname} ${student.lastname}`}
//         style={{ width: "300px", height: "auto" }}
//       />
//       <br></br>

//       <h2>Enrolled Campus:</h2>
//       {student.campus ? (
//         <div>
//           <Link to={`/campus/${student.campus.id}`}>
//             <h3>{student.campus.name}</h3>
//           </Link>
//           <p>{student.campus.address}</p>
//           <button onClick={() => addCampus(student.id, null)}>
//             Remove from Campus
//           </button>
//         </div>
//       ) : (
//         <p>Student not enrolled in any campus.</p>
//       )}

//       <br></br>
//       <Link to={`/add-campus?studentId=${student.id}`}>
//         <button>Add Campus</button>
//       </Link>
//       <br></br>
//       <Link to={`/editstudent/${student.id}`}>
//         <button>Edit Student</button>
//       </Link>
//     </div>
//   );
// };

// export default StudentView;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentView = (props) => {
  const { student } = props;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle removing student from campus and refreshing the page
  const handleRemoveFromCampus = async () => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this student from this campus?"
    );
    if (confirmation) {
      try {
        // Send the request to remove the student from campus
        await axios.put(`/api/students/${student.id}/`, {
          campusId: null, // Set campusId to null to remove the student from the campus
        });

        setSuccess("Student removed from campus successfully!");

        // Reload the page to show updated data
        window.location.reload();
      } catch (error) {
        console.error("Error removing student from campus:", error);
        setError("An error occurred while removing the student from campus.");
      }
    }
  };

  return (
    <div>
      <h1>{`${student.firstname} ${student.lastname}`}</h1>
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa || "N/A"}</p>
      <img
        src={student.imageurl || "https://via.placeholder.com/150"}
        alt={`${student.firstname} ${student.lastname}`}
        style={{ width: "300px", height: "auto" }}
      />
      <br />

      <h2>Enrolled Campus:</h2>
      {student.campus ? (
        <div>
          <Link to={`/campus/${student.campus.id}`}>
            <h3>{student.campus.name}</h3>
          </Link>
          <p>{student.campus.address}</p>
          <button onClick={handleRemoveFromCampus}>
            Remove from Campus
          </button>
        </div>
      ) : (
        <p>Student not enrolled in any campus.</p>
      )}

      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <br />
      <Link to={`/add-campus?studentId=${student.id}`}>
        <button>Add Campus</button>
      </Link>
      <br />
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;
