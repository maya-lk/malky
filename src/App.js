import React from 'react';
//import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import Wizard from './pages/wizard/wizard.component';
import Header from './components/header/header.component';
import AvailabilityCalender from './pages/availability-calender/availability-calender.component';
import Home from './pages/home/home.component';
import AvailabilityCalenderList from './pages/availability-calender-list/availability-calender-list.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  render(){
    return(
      <div className="appWrappe">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/wizard" component={Wizard} />
          <Route exact path="/availability-calender" component={AvailabilityCalender} />
          <Route exact path="/availability-calender-list" component={AvailabilityCalenderList} />
        </Switch>
      </div>
    )
  }
}

export default App;
