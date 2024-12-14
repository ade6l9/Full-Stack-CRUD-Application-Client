import React from "react";
import PropTypes from "prop-types";

const AddCampusView = (props) => {
  return (
    <div>
      <h1>Add a New Campus</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={props.handleChange}
          required
        />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={props.address}
          onChange={props.handleChange}
          required
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={props.description}
          onChange={props.handleChange}
        />
        <br />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={props.imageUrl}
          onChange={props.handleChange}
        />
        <br />
        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

AddCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default AddCampusView;
