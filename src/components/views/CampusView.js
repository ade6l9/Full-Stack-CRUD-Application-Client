import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {
    campus,
    removeStudentFromCampus,
    fetchCampus,
  } = props;

  // Handle removing a student with confirmation
  const handleRemoveStudent = async (studentId) => {
    const confirmation = window.confirm("Are you sure you want to remove this student?");
    if (confirmation) {
      await removeStudentFromCampus(studentId, campus.id); // Remove the student
      await fetchCampus(campus.id); // Re-fetch the updated campus data
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

      {/* Add New Student Button */}
      <Link to={`/newstudent?campusId=${campus.id}`}>
        <button>Add New Student</button>
      </Link>

      <br />
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
    </div>
  );
};

export default CampusView;
