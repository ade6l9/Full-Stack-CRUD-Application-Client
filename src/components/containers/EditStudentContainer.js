// EditStudentContainer.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import EditStudentView from "../views/EditStudentView";
import StudentView from "../views/StudentView"; // Assuming this is your existing student view

const EditStudentContainer = () => {
  return (
    <Switch>
      <Route path="/editstudent/:id" component={EditStudentView} />
      <Route path="/student/:id" component={StudentView} />
    </Switch>
  );
};

export default EditStudentContainer;
