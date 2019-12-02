import React from 'react';
//import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import Dashboard from './pages/dashboard/dashboard.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render(){
    return(
      <div className="appWrappe">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

export default App;
