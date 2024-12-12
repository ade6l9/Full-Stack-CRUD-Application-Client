/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  // If there are no campuses, display a message
  if (!props.allCampuses.length) {
    return (
      <div>
        <h1>All Campuses</h1>
        <div>There are no campuses.</div>
        <br />
        <Link to={`/addcampus`}>
          <button>Add New Campus</button> {/* Add New Campus Button */}
        </Link>
      </div>
    );
  }

  // Sort campuses by ID in ascending order before rendering
  const sortedCampuses = [...props.allCampuses].sort((a, b) => a.id - b.id);

  // If there are campuses, render the list
  return (
    <div>
      <h1>All Campuses</h1>
      {sortedCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>Campus ID: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          {/* Delete Campus Button */}
          <button onClick={() => props.deleteCampus(campus.id)}>Delete Campus</button>
          <hr />
        </div>
      ))}
      <br />
      {/* Add New Campus Button */}
      <Link to={`/addcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br /><br />
    </div>
  );
};

// Prop Types Validation
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  deleteCampus: PropTypes.func.isRequired, // Ensure deleteCampus function is passed
};

export default AllCampusesView;
