import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer
} from './components/containers';

import AddCampusContainer from './components/containers/AddCampusContainer';
import EditCampusContainer from './components/containers/EditCampusContainer';
import EditStudentContainer from './components/containers/EditStudentContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/addcampus" component={AddCampusContainer} />
        <Route path="/editcampus/:id" component={EditCampusContainer} /> 
        <Route path="/editstudent/:id" component={EditStudentContainer} />
=      </Switch>        
    </div>
  );
}

export default App;

