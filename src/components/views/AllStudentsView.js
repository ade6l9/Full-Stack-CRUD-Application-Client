// /*==================================================
// AllStudentsView.js

// The Views component is responsible for rendering web page with data provided by the corresponding Container component.
// It constructs a React component to display the all students view page.
// ================================================== */
// import { Link } from "react-router-dom";

// const AllStudentsView = (props) => {
//   const {students, deleteStudent} = props;
//   console.log('Students:', students);
//   // If there is no student, display a message
//   if (!students.length) {
//     return (
//     <div>
//       <p>There are no students.</p>
//       <Link to={`newstudent`}>
//         <button>Add New Student</button>
//       </Link>
//     </div>
//     );
//   }
  
//   // If there is at least one student, render All Students view 
//   return (
//     <div>
//       <h1>All Students</h1>

//       {students.map((student) => {
//           let name = student.firstname + " " + student.lastname;
//           return (
//             <div key={student.id}> 
//               <Link to={`/student/${student.id}`}>
//                 <h2>{name}</h2>
//               </Link>
//               <button onClick={() => deleteStudent(student.id)}>Delete</button>
//               <hr/>
//             </div>
//           );
//         }
//       )}
//       <br/>
//       <Link to={`/newstudent`}>
//         <button>Add New Student</button>
//       </Link>
//       <br/><br/>
//     </div>
//   );
// };


// export default AllStudentsView;



/// new try 
/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
// import { Link } from "react-router-dom";

// const AllStudentsView = (props) => {
//   const {students, deleteStudent} = props;
//   console.log('Students:', students);
//   // If there is no student, display a message
//   if (!students.length) {
//     return (
//     <div>
//       <p>There are no students.</p>
//       <Link to={`newstudent`}>
//         <button>Add New Student</button>
//       </Link>
//     </div>
//     );
//   }
  
//   // If there is at least one student, render All Students view 
//   return (
//     <div>
//       <h1>All Students</h1>

//       {students.map((student) => {
//           let name = student.firstname + " " + student.lastname;
//           return (
//             <div key={student.id}>
//               {student.id ? (
//                 <Link to={`/student/${student.id}`}>
//                   <h2>{name}</h2>
//                 </Link>
//               ) : (
//                 <h2>{name}</h2>
//               )}
//               <button onClick={() => deleteStudent(student.id)}>Delete</button>
//               <hr/>
//             </div>
//           );
//         }
//       )}
//       <br/>
//       <Link to={`/newstudent`}>
//         <button>Add New Student</button>
//       </Link>
//       <br/><br/>
//     </div>
//   );
// };


// export default AllStudentsView;







// new new new new 
// In your AllStudentsView.js file
// In your AllStudentsView.js file
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const AllStudentsView = (props) => {
//   const { students, deleteStudent, addStudent } = props;
//   const [showForm, setShowForm] = useState(false);

//   const handleAddStudent = (event) => {
//     event.preventDefault();
//     const newStudent = {
//       firstname: event.target.firstname.value,
//       lastname: event.target.lastname.value,
//       email: event.target.email.value,
//       gpa: event.target.gpa.value,
//       campusId: event.target.campusId.value,
//     };
//     addStudent(newStudent);
//     setShowForm(false); // Hide the form after adding
//   };

//   return (
//     <div>
//       <h1>All Students</h1>
//       {students.map((student) => {
//         let name = student.firstname + " " + student.lastname;
//         return (
//           <div key={student.id}>
//             <Link to={`/student/${student.id}`}>
//               <h2>{name}</h2>
//             </Link>
//             <button onClick={() => deleteStudent(student.id)}>Delete</button>
//             <hr/>
//           </div>
//         );
//       })}
//       <br/>
//       <button onClick={() => setShowForm(!showForm)}>
//         {showForm ? 'Cancel' : 'Add New Student'}
//       </button>
//       {showForm && (
//         <form onSubmit={handleAddStudent}>
//           <input type="text" name="firstname" placeholder="First Name" required />
//           <input type="text" name="lastname" placeholder="Last Name" required />
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="text" name="gpa" placeholder="GPA" required />
//           <input type="text" name="campusId" placeholder="Campus ID" required />
//           <button type="submit">Add Student</button>
//         </form>
//       )}
//       <br/><br/>
//     </div>
//   );
// };

// export default AllStudentsView;

import React from 'react';
import { Link } from 'react-router-dom';

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;
  console.log(students);

  return (
    <div>
      <h1>All Students</h1>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <hr/>
          </div>
        );
      })}
      <br/>
      <Link to="/newstudent">
        <button>Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};

export default AllStudentsView;