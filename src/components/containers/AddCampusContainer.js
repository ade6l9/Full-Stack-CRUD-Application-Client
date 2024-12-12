import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // Use withRouter
import { addCampusThunk } from "../../store/thunks";
import AddCampusView from "../views/AddCampusView";

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
      <AddCampusView
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

// Wrap the component with withRouter for navigation
export default connect(null, mapDispatchToProps)(withRouter(AddCampusContainer));
