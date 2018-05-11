import React, {Component} from 'react'
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';


export default function Routes(){
    return(
        <div>
        <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/wizard' component={Wizard}/>
        </Switch>
        </div>
    )
}