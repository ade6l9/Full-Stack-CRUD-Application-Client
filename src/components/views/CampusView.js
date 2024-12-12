// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const CampusView = (props) => {
//   const { campus, removeStudentFromCampus, fetchCampus } = props;

//   const [showAddStudentForm, setShowAddStudentForm] = useState(false);
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     imageurl: "",
//     gpa: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

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

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       await axios.post("/api/students/add-to-campus", {
//         ...formData,
//         campusId: campus.id,
//       });

//       setSuccess("Student added successfully!");
//       setFormData({
//         firstname: "",
//         lastname: "",
//         email: "",
//         imageurl: "",
//         gpa: "",
//       });
//       setShowAddStudentForm(false); // Hide form after submission
//       await fetchCampus(campus.id); // Refresh campus data
//     } catch (error) {
//       console.error(error);
//       setError(
//         error.response?.data?.error ||
//           "An error occurred while adding the student."
//       );
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

//       {showAddStudentForm && (
//         <div>
//           <h2>Add New Student</h2>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           {success && <p style={{ color: "green" }}>{success}</p>}
//           <form onSubmit={handleSubmit}>
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
//       </div>
//   );
// };

// export default CampusView;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CampusView = (props) => {
  const { campus, removeStudentFromCampus, fetchCampus } = props;

  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    imageurl: "",
    gpa: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  // Handle adding a student to the campus
  const handleAddStudent = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Log the form data and campus ID before making the API call
    console.log("Campus ID:", campus.id);
    console.log("Form Data:", formData);

    try {
      // Make API call to add student to the campus
      const response = await axios.post("/api/students", {
        ...formData,
        campusId: campus.id, // Make sure campusId is correctly added to the form data
      });

      console.log("Response from API:", response.data); // Log the response

      // Set success message and reset form data
      setSuccess("Student added successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        imageurl: "",
        gpa: "",
      });

      // Hide the form and refresh the campus data
      setShowAddStudentForm(false);
      await fetchCampus(campus.id); // Re-fetch campus data to include new student
    } catch (error) {
      console.error("API Error:", error); // Log any errors for debugging
      setError(
        error.response?.data?.error || "An error occurred while adding the student."
      );
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
