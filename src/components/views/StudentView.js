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









// // export default StudentView;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const StudentView = (props) => {
//   const { student } = props;
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Handle removing student from campus and refreshing the page
//   const handleRemoveFromCampus = async () => {
//     const confirmation = window.confirm(
//       "Are you sure you want to remove this student from this campus?"
//     );
//     if (confirmation) {
//       try {
//         // Send the request to remove the student from campus
//         await axios.put(`/api/students/${student.id}/`, {
//           campusId: null, // Set campusId to null to remove the student from the campus
//         });

//         setSuccess("Student removed from campus successfully!");

//         // Reload the page to show updated data
//         window.location.reload();
//       } catch (error) {
//         console.error("Error removing student from campus:", error);
//         setError("An error occurred while removing the student from campus.");
//       }
//     }
//   };

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
//       <br />

//       <h2>Enrolled Campus:</h2>
//       {student.campus ? (
//         <div>
//           <Link to={`/campus/${student.campus.id}`}>
//             <h3>{student.campus.name}</h3>
//           </Link>
//           <p>{student.campus.address}</p>
//           <button onClick={handleRemoveFromCampus}>
//             Remove from Campus
//           </button>
//         </div>
//       ) : (
//         <p>Student not enrolled in any campus.</p>
//       )}

//       <br />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {success && <p style={{ color: "green" }}>{success}</p>}
//       <br />
//       <Link to={`/add-campus?studentId=${student.id}`}>
//         <button>Add Campus</button>
//       </Link>
//       <br />
//       <Link to={`/editstudent/${student.id}`}>
//         <button>Edit Student</button>
//       </Link>
//     </div>
//   );
// };

// export default StudentView;





// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const StudentView = (props) => {
//   const { student } = props;
//   const [campuses, setCampuses] = useState([]); // List of all campuses
//   const [selectedCampusId, setSelectedCampusId] = useState(""); // Store selected campus ID (initialized as empty string)
//   const [isCampusDropdownVisible, setIsCampusDropdownVisible] = useState(false); // Track if the dropdown is visible

//   // Fetch all campuses when the component is mounted
//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const response = await axios.get("/api/campuses");
//         setCampuses(response.data);
//       } catch (error) {
//         console.error("Error fetching campuses:", error);
//       }
//     };
//     fetchCampuses();
//   }, []);

//   // Handle removing student from campus and refreshing the page
//   const handleRemoveFromCampus = async () => {
//     const confirmation = window.confirm(
//       "Are you sure you want to remove this student from this campus?"
//     );
//     if (confirmation) {
//       try {
//         // Send the request to remove the student from campus
//         await axios.put(`/api/students/${student.id}/`, {
//           campusId: null, // Set campusId to null to remove the student from the campus
//         });

//         //alert("Student removed from campus successfully!");
//         // Reload the page to show updated data
//         window.location.reload();
//       } catch (error) {
//         console.error("Error removing student from campus:", error);
//         alert("An error occurred while removing the student from campus.");
//       }
//     }
//   };

//   // Handle adding a student to a campus
//   const handleAddCampus = () => {
//     if (student.campusId) {
//       // Show an alert if the student already has a campusId
//       alert("Campus can't be added, student is already enrolled.");
//     } else {
//       setIsCampusDropdownVisible(true); // Show the dropdown if the student doesn't have a campus
//     }
//   };

//   // Handle selecting a campus from the dropdown
//   const handleCampusSelect = (event) => {
//     setSelectedCampusId(event.target.value);
//   };

//   // Handle adding the student to the selected campus
//   const handleAddCampusToStudent = async () => {
//     if (!selectedCampusId) {
//       alert("Please select a campus.");
//       return;
//     }

//     try {
//       // Send a request to update the student's campusId
//       await axios.put(`/api/students/${student.id}/`, {
//         campusId: selectedCampusId,
//       });

//       //alert("Student successfully added to the campus!");

//       // Reload the page to show updated data with the new campus
//       window.location.reload(); // Refresh the page after adding the campus
//     } catch (error) {
//       console.error("Error adding student to campus:", error);
//       alert("An error occurred while adding the student to campus.");
//     }
//   };

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
//       <br />

//       <h2>Enrolled Campus:</h2>
//       {student.campus ? (
//         <div>
//           <Link to={`/campus/${student.campus.id}`}>
//             <h3>{student.campus.name}</h3>
//           </Link>
//           <p>{student.campus.address}</p>
//           <button onClick={handleRemoveFromCampus}>Remove from Campus</button>
//         </div>
//       ) : (
//         <p>Student not enrolled in any campus.</p>
//       )}

//       <br />
//       {/* "Add Campus" Button */}
//       <button onClick={handleAddCampus}>
//         Add Campus
//       </button>

//       {/* Dropdown for selecting a campus */}
//       {isCampusDropdownVisible && (
//         <div>
//           <h3>Select a Campus</h3>
//           <select onChange={handleCampusSelect} value={selectedCampusId}>
//             <option value="">Select a campus</option>
//             {campuses.map((campus) => (
//               <option key={campus.id} value={campus.id}>
//                 {campus.name}
//               </option>
//             ))}
//           </select>
//           <button onClick={handleAddCampusToStudent}>Add to Campus</button>
//         </div>
//       )}

//       <br />
//       <Link to={`/editstudent/${student.id}`}>
//         <button>Edit Student</button>
//       </Link>
//     </div>
//   );
// };

// export default StudentView;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentView = (props) => {
  const { student } = props;
  const [campuses, setCampuses] = useState([]); // List of all campuses
  const [selectedCampusId, setSelectedCampusId] = useState(""); // Store selected campus ID (initialized as empty string)
  const [isCampusDropdownVisible, setIsCampusDropdownVisible] = useState(false); // Track if the dropdown is visible
  const [success, setSuccess] = useState(""); // Track success messages
  const [error, setError] = useState(""); // Track error messages

  // Fetch all campuses when the component is mounted
  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const response = await axios.get("/api/campuses");
        setCampuses(response.data);
      } catch (error) {
        console.error("Error fetching campuses:", error);
        setError("Failed to fetch campuses.");
      }
    };
    fetchCampuses();
  }, []);

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

        setSuccess("Student removed from campus successfully!"); // Update success message
        window.location.reload(); // Reload to reflect the changes
      } catch (error) {
        console.error("Error removing student from campus:", error);
        setError("An error occurred while removing the student from campus."); // Update error message
      }
    }
  };

  // Handle adding a student to a campus
  const handleAddCampus = () => {
    if (student.campusId) {
      setError("Campus can't be added, student is already enrolled."); // Show error if already enrolled
    } else {
      setIsCampusDropdownVisible(true); // Show the dropdown if the student doesn't have a campus
    }
  };

  // Handle selecting a campus from the dropdown
  const handleCampusSelect = (event) => {
    setSelectedCampusId(event.target.value);
  };

  // Handle adding the student to the selected campus
  const handleAddCampusToStudent = async () => {
    if (!selectedCampusId) {
      setError("Please select a campus."); // Show error if no campus selected
      return;
    }

    try {
      // Send a request to update the student's campusId
      await axios.put(`/api/students/${student.id}/`, {
        campusId: selectedCampusId,
      });

      setSuccess("Student successfully added to the campus!"); // Show success message
      window.location.reload(); // Refresh the page after adding the campus
    } catch (error) {
      console.error("Error adding student to campus:", error);
      setError("An error occurred while adding the student to campus."); // Show error message
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
          <button onClick={handleRemoveFromCampus}>Remove from Campus</button>
        </div>
      ) : (
        <p>Student not enrolled in any campus.</p>
      )}

      <br />
      {/* Display success or error messages dynamically */}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />

      {/* "Add Campus" Button */}
      <button onClick={handleAddCampus}>
        Add Campus
      </button>

      {/* Dropdown for selecting a campus */}
      {isCampusDropdownVisible && (
        <div>
          <h3>Select a Campus</h3>
          <select onChange={handleCampusSelect} value={selectedCampusId}>
            <option value="">Select a campus</option>
            {campuses.map((campus) => (
              <option key={campus.id} value={campus.id}>
                {campus.name}
              </option>
            ))}
          </select>
          <button onClick={handleAddCampusToStudent}>Add to Campus</button>
        </div>
      )}

      <br />
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
    </div>
  );
};

export default StudentView;
