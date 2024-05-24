import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// importing the files from Lab 6
import Contact from './contact';
import Home from './home';
import Hobbies from './hobbies';
import PhotoGallery from './photogallery';
import PersonalSkills from './personalskills';
import Portfolio from './portfolio';

// importing App.js 
import './App.css';

function App() {
  return (
 
    <Router>
      <div>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/contact"> <Contact /> </Route> 
          <Route exact path="/hobbies"> <Hobbies /> </Route>
          <Route exact path="/photogallery"> <PhotoGallery /> </Route>
          <Route exact path="/personalskills"> <PersonalSkills /> </Route>
          <Route exact path="/portfolio"> <Portfolio /> </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
