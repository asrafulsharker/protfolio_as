import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Route, Link } from 'react-router-dom';


import Home from './Pages/home';

const App = () => {
  return (
    <div>
    <Router>
      <div className="app-container">
        <Switch>
        <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;