import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import House from './components/house/House';
import Wizard from './components/wizard/Wizard';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header/>

          <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/wizard' component={Wizard}/>
          </Switch>
        </div>
      </HashRouter>
     
    );
  }
}

export default App;
