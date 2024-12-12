

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const CampusView = (props) => {
//   const { campus, removeStudentFromCampus, fetchCampus } = props;

//   const [showAddStudentForm, setShowAddStudentForm] = useState(false);
//   const [showAddExistingStudentForm, setShowAddExistingStudentForm] = useState(false);
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     imageurl: "",
//     gpa: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [studentsWithoutCampus, setStudentsWithoutCampus] = useState([]);

//   // Fetch students who do not belong to any campus
//   useEffect(() => {
//     const fetchStudentsWithoutCampus = async () => {
//       try {
//         const response = await axios.get("/api/students/without-campus");
//         setStudentsWithoutCampus(response.data);
//       } catch (error) {
//         console.error("Error fetching students without a campus:", error);
//       }
//     };
//     fetchStudentsWithoutCampus();
//   }, []);

//   // Handle removing a student with confirmation
//   const handleRemoveStudent = async (studentId) => {
//     const confirmation = window.confirm(
//       "Are you sure you want to remove this student?"
//     );
//     if (confirmation) {
//       await removeStudentFromCampus(studentId, campus.id); // Remove the student
//       await fetchCampus(campus.id); // Re-fetch the updated campus data
//     }
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle adding a new student to the campus
//   const handleAddStudent = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const response = await axios.post("/api/students", {
//         ...formData,
//         campusId: campus.id, // Add campusId to form data
//       });

//       setSuccess("Student added successfully!");
//       setFormData({
//         firstname: "",
//         lastname: "",
//         email: "",
//         imageurl: "",
//         gpa: "",
//       });
//       setShowAddStudentForm(false);
//       await fetchCampus(campus.id);
//     } catch (error) {
//       console.error(error);
//       setError(
//         error.response?.data?.error || "An error occurred while adding the student."
//       );
//     }
//   };

//   // Handle adding an existing student to the campus
//   const handleAddExistingStudent = async (studentId) => {
//     try {
//       const response = await axios.put(`/api/students/${studentId}/add-to-campus`, {
//         campusId: campus.id,
//       });

//       setSuccess("Existing student added to campus!");
//       await fetchCampus(campus.id); // Re-fetch campus data
//       setShowAddExistingStudentForm(false);
//     } catch (error) {
//       console.error("Error adding existing student:", error);
//       setError("An error occurred while adding the existing student.");
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
//         campus.students.map((student) => (
//           <div key={student.id}>
//             <Link to={`/student/${student.id}`}>
//               <h3>{`${student.firstname} ${student.lastname}`}</h3>
//             </Link>
//             <button onClick={() => handleRemoveStudent(student.id)}>
//               Remove Student
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No students are currently enrolled at this campus.</p>
//       )}

//       <br />

//       <button onClick={() => setShowAddStudentForm(!showAddStudentForm)}>
//         {showAddStudentForm
//           ? "Close Add Student Form"
//           : "Add New Student to This Campus"}
//       </button>

//       <button onClick={() => setShowAddExistingStudentForm(!showAddExistingStudentForm)}>
//         {showAddExistingStudentForm
//           ? "Close Add Existing Student Form"
//           : "Add Existing Student to This Campus"}
//       </button>

//       {showAddExistingStudentForm && (
//         <div>
//           <h2>Add Existing Student</h2>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           {success && <p style={{ color: "green" }}>{success}</p>}
//           <ul>
//             {studentsWithoutCampus.map((student) => (
//               <li key={student.id}>
//                 <span>{`${student.firstname} ${student.lastname}`}</span>
//                 <button onClick={() => handleAddExistingStudent(student.id)}>
//                   Add to Campus
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {showAddStudentForm && (
//         <div>
//           <h2>Add New Student</h2>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           {success && <p style={{ color: "green" }}>{success}</p>}
//           <form onSubmit={handleAddStudent}>
//             <div>
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div>
//               <label>Image URL:</label>
//               <input
//                 type="text"
//                 name="imageurl"
//                 value={formData.imageurl}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label>GPA:</label>
//               <input
//                 type="number"
//                 name="gpa"
//                 value={formData.gpa}
//                 onChange={handleChange}
//                 step="0.1"
//                 min="0.0"
//                 max="4.0"
//                 required
//               />
//             </div>
//             <button type="submit">Add Student</button>
//           </form>
//         </div>
//       )}

//       <br />
//       <Link to={`/editcampus/${campus.id}`}>
//         <button>Edit Campus</button>
//       </Link>
//     </div>
//   );
// };

// export default CampusView;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CampusView = (props) => {
  const { campus, removeStudentFromCampus, fetchCampus } = props;

  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showAddExistingStudentForm, setShowAddExistingStudentForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    imageurl: "",
    gpa: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [studentsWithoutCampus, setStudentsWithoutCampus] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Store selected student

  // Fetch students who do not belong to any campus
  const fetchStudentsWithoutCampus = async () => {
    try {
      const response = await axios.get("/api/students/");
      // Filter students who do not have a campusId (NULL or empty string)
      const filteredStudents = response.data.filter(
        (student) => student.campusId === null || student.campusId === ""
      );
      setStudentsWithoutCampus(filteredStudents); // Update the state with filtered students
    } catch (error) {
      console.error("Error fetching students without a campus:", error);
      setError("Failed to fetch students without a campus");
    }
  };
  
  // Handle removing a student with confirmation
  const handleRemoveStudent = async (studentId) => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this student?"
    );
    if (confirmation) {
      await removeStudentFromCampus(studentId, campus.id); // Remove the student
      await fetchCampus(campus.id); // Re-fetch the updated campus data
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle adding a new student to the campus
  const handleAddStudent = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await axios.post("/api/students", {
        ...formData,
        campusId: campus.id, // Add campusId to form data
      });

      setSuccess("Student added successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        imageurl: "",
        gpa: "",
      });
      setShowAddStudentForm(false);
      await fetchCampus(campus.id);
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.error || "An error occurred while adding the student."
      );
    }
  };

  // Handle selecting an existing student from dropdown
  const handleAddExistingStudent = async () => {
    if (!selectedStudent) {
      setError("Please select a student.");
      return;
    }
  
    try {
      // Perform the PUT request without assigning the response to a variable
      await axios.put(`/api/students/${selectedStudent}/`, {
        campusId: campus.id,
      });
  
      setSuccess("Existing student added to campus!");
      setShowAddExistingStudentForm(false); // Hide dropdown after selection
      await fetchCampus(campus.id); // Re-fetch campus data
    } catch (error) {
      console.error("Error adding existing student:", error);
      setError("An error occurred while adding the existing student.");
    }
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

      <button onClick={() => setShowAddStudentForm(!showAddStudentForm)}>
        {showAddStudentForm
          ? "Close Add Student Form"
          : "Add New Student to This Campus"}
      </button>

      <button onClick={() => { setShowAddExistingStudentForm(true); fetchStudentsWithoutCampus(); }}>
        {showAddExistingStudentForm
          ? "Close Add Existing Student Form"
          : "Add Existing Student to This Campus"}
      </button>

      {showAddExistingStudentForm && (
        <div>
          <h2>Add Existing Student</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <select
            onChange={(e) => setSelectedStudent(e.target.value)}
            value={selectedStudent || ""}
          >
            <option value="">Select a student</option>
            {studentsWithoutCampus.map((student) => (
              <option key={student.id} value={student.id}>
                {`${student.firstname} ${student.lastname}`}
              </option>
            ))}
          </select>
          <button onClick={handleAddExistingStudent}>Add to Campus</button>
        </div>
      )}

      {showAddStudentForm && (
        <div>
          <h2>Add New Student</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <form onSubmit={handleAddStudent}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                type="text"
                name="imageurl"
                value={formData.imageurl}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>GPA:</label>
              <input
                type="number"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                step="0.1"
                min="0.0"
                max="4.0"
                required
              />
            </div>
            <button type="submit">Add Student</button>
          </form>
        </div>
      )}

      <br />
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
    </div>
  );
};

export default CampusView;
