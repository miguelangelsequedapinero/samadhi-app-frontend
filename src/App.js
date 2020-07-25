import React from 'react';
import HomePage from './pages/HomePage';
import LevelSelection from './pages/LevelSelection';
import BeginnersCourseInfo from './pages/BeginnersCourseInfo';
import BeginnersCourseContent from './pages/BeginnersCourseContent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route path='/level-selection'><LevelSelection/></Route>
        <Route path='/beginners-course-info' ><BeginnersCourseInfo/></Route>
        <Route path='/beginners-course-info'><BeginnersCourseContent/></Route>
      </Switch>
    </Router>
  );
}

export default App;
