/*==================================================
AddCampusContainer.js

This file serves as the container component for adding a new campus.
It manages the form state for the "Add Campus" page and handles
dispatching the action to add a new campus to the Redux store.
Upon successful submission, the user is redirected to the "All Campuses" page.
==================================================*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // Use withRouter
import { addCampusThunk } from "../../store/thunks";
import AddCampusView from "../views/AddCampusView";
import Header from "./Header"; // Include the Header component

class AddCampusContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Campus Data:", this.state); // Log state
    await this.props.addCampus(this.state); // Dispatch action to add campus
    this.props.history.push("/campuses"); // Redirect to All Campuses
  };

  render() {
    return (
      <div>
    <Header /> {/* Add Header component */}
    <AddCampusView
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      name={this.state.name}
      address={this.state.address}
      description={this.state.description}
      imageUrl={this.state.imageUrl}
  />
</div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

// Wrap the component with withRouter for navigation
export default connect(null, mapDispatchToProps)(withRouter(AddCampusContainer));
