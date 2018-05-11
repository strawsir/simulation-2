import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


class StepTwo extends Component{
    constructor(){
        super();

        this.state={
            name: '',
            address:'',
            city: '',
            state: '',
            zipcode: 0,
            imageURL: ''
        }
    }


    render(){
        return(
            <div>
            STEP TWO

        
            <input type="text" placeholder='IMAGE URL'/>
            <Link to='/wizard/stepThree'>NEXT</Link>
            
            
            </div>
        )
    }
}

export default StepTwo;