import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import './App.scss';
import MainPage from './MainPage';

const reload = () => window.location.reload();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><MainPage/></Route>
        <Route path="/resume.pdf" onEnter={reload}/>
        <Route path="*"><Redirect to="/"/></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
