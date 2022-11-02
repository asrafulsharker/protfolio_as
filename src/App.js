import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Route, Link } from 'react-router-dom';


import Home from './Pages/home';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* <Switch>
          <Route path="/home" component={Home} />
        </Switch> */}
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;