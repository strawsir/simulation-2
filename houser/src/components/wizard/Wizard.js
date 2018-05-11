import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import StepOne from '../steps/StepOne';
import {Route} from 'react-router-dom';
import StepTwo from '../steps/StepTwo';
import StepThree from '../steps/StepThree';


class Wizard extends Component{
    constructor(){
        super();

        this.state={
            name: '',
            address:'',
            city: '',
            state: '',
            zipcode: 0
        }
    }


    render(){
        return(
            <div>Wizard

            <Link to='/'>CANCEL</Link>
            <Route path='/wizard/stepOne' component={StepOne}/>
            <Route path='/wizard/stepTwo' component={StepTwo}/>
            <Route path='/wizard/stepThree' component={StepThree}/>
            
            </div>
        )
    }
}

export default Wizard;