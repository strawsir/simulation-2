import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';


class StepThree extends Component{
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
            STEP Three

        
            <input type="text" placeholder='MONTHLY MORTGAGE'/>
            <input type="text" placeholder='MONTHLY RENT'/>
            <Link to='/'>COMPLETE</Link>
            
            </div>
        )
    }
}

export default StepThree;