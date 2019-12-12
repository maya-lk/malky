import React from 'react';
//import { connect } from 'react-redux';
import { Switch , Route } from 'react-router-dom';

import Wizard from './pages/wizard/wizard.component';
import Header from './components/header/header.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  render(){
    return(
      <div className="appWrappe">
        <Header/>
        <Switch>
          <Route path="/wizard" component={Wizard} />
        </Switch>
      </div>
    )
  }
}

export default App;
